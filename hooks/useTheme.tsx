"use client";
import { IThemeContext } from "@/types/types";
import React, { createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const changeMode: IThemeContext["changeMode"] = (mode) => {
    setMode((prev) => {
      const val = mode || (prev === "dark" ? "light" : "dark");
      // set to localStorage
      localStorage.setItem("mode", val);
      // add to className
      if (val === "dark") {
        // add dark
        document.body.classList.add("dark");
      } else {
        // remove if there
        document.body.classList.remove("dark");
      }
      return val;
    });
  };
  // on load
  useEffect(() => {
    if (localStorage.getItem("mode")) {
      changeMode(localStorage.getItem("mode") as "dark" | "light");
    } else {
      // prefers-color-scheme dark
      if (
        window &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      )
        changeMode("dark");
      else changeMode("light");
    }
  }, []);

  return (
    <themeContext.Provider value={{ mode, setMode, changeMode }}>
      {children}
    </themeContext.Provider>
  );
};

const useTheme = () => {
  const theme = useContext(themeContext);
  if (!theme) throw new Error("Theme context found!");
  return theme;
};
export default useTheme;
