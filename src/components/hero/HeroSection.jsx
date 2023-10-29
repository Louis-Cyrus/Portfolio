import { FULL_NAME } from "../../lib/config";

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
      {/* Hero - Exercise*/}
      <div className="">
        {/* Hero - Exercise*/}
        <h1 className="text-6xl drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)] md:text-7xl max-w-full">
          I'm{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {FULL_NAME}
          </span>
        </h1>
        <p className="max-w-2xl mt-10 text-2xl">
          <b>Développeur web React basé à Paris,</b> je conçois des solutions digitales élégantes et efficaces. 
          Avec un souci du détail et une passion pour l'excellence, 
          je suis déterminé à créer des expériences utilisateur remarquables.
        </p>
        <div className="mt-10 text-center">
          <a href="mon-cv.pdf" download className="text-2xl hover:text-secondary">
              Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  );
};
