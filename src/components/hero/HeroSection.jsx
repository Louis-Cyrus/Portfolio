import { FULL_NAME, SOCIAL_NETWORKS, EMAIL } from "../../lib/config";
import { SocialNetworks } from "../atom/SocialNetwork";

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center md:flex-row-reverse">
      <img
        width={300}
        height={300}
        src="/images/avatar.svg"
        alt="avatar"
        className="rounded shadow-none"
      />
      
      <div className="">
        
        <h1 className="text-6xl drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)] md:text-7xl max-w-full">
          I'm{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {FULL_NAME}
          </span>
        </h1>
        <p className="max-w-2xl mt-10 text-2xl">
          <b>Front-end Engineer.</b> You can see my projects on my Portfolio and on my GitHub.
          I’ll be happy to chat with you about a potential job or a freelance opportunity.
        </p>
        <div className="flex flex-col items-center gap-2">
          <SocialNetworks className="" socialNetworks={SOCIAL_NETWORKS} />
          <a className="text-xl underline text-primary" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
        
        <div className="mt-6 text-center">
          <a href="mon-cv.pdf" download className="text-2xl hover:text-secondary">
              Download my CV
          </a>
        </div>
      </div>
    </div>
  );
};
