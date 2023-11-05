import { Typography } from '../atom/Typography';

export const Project = ({ name, description, stargazerCount, url, homepageUrl, topics }) => {
  return (
    <div className="flex flex-col gap-4 p-4 transition-transform w-60 rounded-2xl bg-paper hover:scale-105 hover:shadow-xl focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 md:w-80 md:p-8">
      <p className="w-full text-right">⭐ {stargazerCount}</p>
      <a href={url}>
        <Typography className="font-bold" variant="h3">
          {name}
        </Typography>
      </a>
      <Typography variant="body1">{description}</Typography>
      <div className="flex flex-wrap gap-2">
        {topics && topics.map((topic, index) => (
          <span key={index} className="px-2 py-1 text-xs rounded bg-secondary text-primary">
            {topic}
          </span>
        ))}
      </div>
      {homepageUrl ? (
        <a className="underline text-primary" href={homepageUrl}>
          {homepageUrl.replace('https://', '')}
        </a>
      ) : null}
    </div>
  );
};
