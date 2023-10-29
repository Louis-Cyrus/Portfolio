import React from "react";
import { useTheme } from "../context/ThemeProvider";
import styles from "./ToggleThemeButton.module.css";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
import clsx from "clsx";

export const ToggleThemeButton = () => {
  // Dark Mode - Exercise
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative p-2 overflow-hidden rounded-full border-primary">
      <MdOutlineWbSunny
        onClick={toggleTheme}
        className={clsx("relative h-6 w-6 cursor-pointer text-primary", {
          [styles.enter]: theme === "light",
          [styles.exit]: theme === "dark",
        })}
      />
      <MdOutlineModeNight
        onClick={toggleTheme}
        className={clsx("absolute top-2 h-6 w-6 cursor-pointer text-primary", {
          [styles.enter]: theme === "dark",
          [styles.exit]: theme === "light",
        })}
      />
    </div>
  );
};
