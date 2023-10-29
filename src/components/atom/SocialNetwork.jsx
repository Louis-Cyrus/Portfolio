import clsx from "clsx";

/**
 *
 * @param socialNetworks {{url: string, name: string, icon: React.ReactElement}[]}
 * @param className string
 * @constructor
 */
export const SocialNetworks = ({ socialNetworks, className }) => {
  return (
    <div className={clsx("flex flex-col md:flex-row gap-4", className)}>
      {socialNetworks.map(({ url, name, icon }) => (
        <a
          key={url}
          href={url}
          className="flex items-center gap-1 text-xl transition-colors text-primary text hover:text-secondary"
        >
          {icon} <span className="underline">{name}</span>
        </a>
      ))}
    </div>
  );
};
