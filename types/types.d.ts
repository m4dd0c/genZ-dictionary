import React from "react";
type TMode = "dark" | "light";

interface IThemeContext {
  changeMode: (mode?: TMode) => void;
  mode: TMode;
  setMode: React.Dispatch<React.SetStateAction<TMode>>;
}
