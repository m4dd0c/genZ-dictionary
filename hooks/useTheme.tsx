"use client";
import Header from "@/components/layout/Header";
import React, { createContext, useContext, useState } from "react";

interface IThemeContext {}
const themeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  return (
    <themeContext.Provider value={{ mode, setMode }}>
      <Header />
      {children}
    </themeContext.Provider>
  );
};

const useTheme = () => {
  const theme = useContext(themeContext);
  if (!theme) return console.error("Theme context not found!");
  return theme;
};
export default useTheme;
