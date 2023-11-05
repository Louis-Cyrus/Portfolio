import { FULL_NAME } from "../lib/config";
import { ToggleThemeButton } from "./ToggleThemeButton";

export const Header = () => {
  return (
    <header className="flex justify-between py-8">
      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-extrabold text-transparent drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
        {FULL_NAME}
      </span>
      <ToggleThemeButton />
    </header>
  );
};
