import { Client } from "@notionhq/client";
import Filter from "bad-words";

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });
const IP_CACHE = {};
const filter = new Filter();
const isDevelopment = process.env.NODE_ENV === "development";

const handler = async (req, res) => {
  if (req.method === "POST") {
    await postHandler(req, res);
    return;
  }
  if (req.method === "GET") {
    await getHandler(req, res);
    return;
  }
  res.status(404);
};

const postHandler = async (req, res) => {
  const { username, comment } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  if (filter.isProfane(comment) || filter.isProfane(username)) {
    res.status(400).json({ error: "Comment is profane" });
    return;
  }

  if (IP_CACHE[ip] && !isDevelopment) {
    const yesterday = new Date(Date.now() - 1000 * 60 * 60 * 24);
    const ipDate = IP_CACHE[ip].filter((date) => {
      return date > yesterday;
    });
    if (ipDate.length >= 1) {
      res.status(403).json({
        error: "You can only post 3 comments per day",
      });
      return;
    }
    IP_CACHE[ip].push(new Date());
  } else {
    IP_CACHE[ip] = [new Date()];
  }

  if (!username || !comment) {
    res.status(400).json({ error: "Username and Comment are required" });
    return;
  }

  const response = await notion.pages.create({
    parent: {
      type: "database_id",
      database_id: process.env.NOTION_DATABASE_ID,
    },
    properties: {
      Username: {
        title: [
          {
            text: {
              content: username,
            },
          },
        ],
      },

      Comment: {
        rich_text: [
          {
            text: {
              content: comment,
            },
          },
        ],
      },
    },
  });
  res.status(200).json(response);
};

const getHandler = async (req, res) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    page_size: 9,
    sorts: [
      {
        property: "Created",
        direction: "descending",
      },
    ],
  });

  const result = response.results.map((result) => {
    const properties = result.properties;
    // Vérifiez que la propriété existe et que le tableau `rich_text` n'est pas vide
    const commentText = properties.Comment && properties.Comment.rich_text.length > 0
      ? properties.Comment.rich_text[0].plain_text
      : "";
    const usernameText = properties.Username && properties.Username.title.length > 0
      ? properties.Username.title[0].plain_text
      : "";
    
    return {
      id: result.id,
      comment: commentText,
      username: usernameText,
      createdAt: properties.Created.created_time,
    };
  });
  res.status(200).json(result);
};


export default handler;
