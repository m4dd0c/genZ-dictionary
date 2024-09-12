import React from "react";
type IMode = "dark" | "light";

interface IThemeContext {
  changeMode: (mode?: IMode) => void;
  mode: IMode;
  setMode: React.Dispatch<React.SetStateAction<IMode>>;
}
