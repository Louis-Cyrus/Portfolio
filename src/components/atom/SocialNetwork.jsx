import clsx from "clsx";

/**
 *
 * @param socialNetworks {{url: string, name: string, icon: React.ReactElement}[]}
 * @param className string
 * @constructor
 */
export const SocialNetworks = ({ socialNetworks, className }) => {
  return (
    <div className={clsx("flex flex-row justify-around gap-4 mt-5", className)}>
      {socialNetworks.map(({ url, name, icon }) => (
        <a
          key={url}
          href={url}
          className="flex items-center gap-1 p-4 text-xl transition-colors rounded-xl text-primary bg-paper text hover:text-secondary"
        >
          {icon} <span className="">{name}</span>
        </a>
      ))}
    </div>
  );
};
