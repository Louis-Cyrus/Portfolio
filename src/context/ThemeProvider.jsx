// Dark mode exercise
// Dans le fichier /pages/_app.js tu as une div avec l'id "app". Elle possède la classe "dark". Si tu lui enlèves cette classe : boom ! Tout devient light.
// Donc c'est dans ce fichier qu'on va gérer le dark-mode.
// On va créer un contexte dans ThemeProvider pour gérer le thème de notre application.
// Celui-ci aura un state theme qui devra pouvoir être récupéré partout dans l'app et aussi "toggle" partout dans l'application.
// Il y a un bouton, qui a déja fait, pour changer le thème de l'application: ToggleThemeButton.jsx
// Il faut donc que ce bouton puisse changer le thème de l'application.
// Quelques conditions:
// - Si l'utilisateur change le thème, il faut que le thème soit sauvegardé dans le localStorage
// - Si l'utilisateur change de page, il faut que le thème soit récupéré dans le localStorage
// - Par défaut, c'est le thème de l'ordinateur qui est récupéré (dark ou light), on doit donc utiliser prefers-color-scheme
// - Si le thème par défaut de l'utilisateur change, il faut que le thème de l'application aussi sauf si l'utilisateur a défini le thème à la main, dans ce cas aucune modification n'est faite.

import React, {useEffect, useState, useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeProvider = ({ children }) => {
  const localStorageThemeKey = "theme";
  
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(localStorageThemeKey) || "light";
    }
    return "light";
  });
  

  useEffect(() => {
    if(typeof window === "undefined") {
      return;
    }

    const savedTheme = localStorage.getItem(localStorageThemeKey);
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleDarkModeChange = (e) => {
      if(e.matches && !localStorage.getItem(localStorageThemeKey)) {
        setTheme("dark");
      } else if (!e.matches && !localStorage.getItem(localStorageThemeKey)) {
        setTheme("light");
      }
    };

    if (!savedTheme) {
      handleDarkModeChange(darkMode);
    }

    darkMode.addEventListener("change", handleDarkModeChange);
    return () => {
      darkMode.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    if(typeof window !== "undefined") {
      localStorage.setItem(localStorageThemeKey, theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
