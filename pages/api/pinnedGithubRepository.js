const handler = async (req, res) => {
  const username = req.query.username;

  const query = `
  {
    user(login: "${username}") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            homepageUrl
            url
            stargazerCount
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
  `;
  try {
    const response = await fetch(`https://api.github.com/graphql`, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    }).then((r) => r.json());

    const projects = response.data.user.pinnedItems.nodes.map((repo) => ({
      ...repo,
      topics: repo.repositoryTopics.nodes.map((node) => node.topic.name),
    }));

    res.status(200);
    res.json(projects);
  } catch (e) {
    res.status(400);
    res.json({ error: e.message });
  }
};

export default handler;
