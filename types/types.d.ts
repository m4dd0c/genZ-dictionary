import React from "react";
type TMode = "dark" | "light";

interface IThemeContext {
  changeMode: (mode?: TMode) => void;
  mode: TMode;
  setMode: React.Dispatch<React.SetStateAction<TMode>>;
}

interface IWord {
  _id: string;
  word: string;
  pronunciation: string;
  synonym: string;
  type: "spelling" | "abbreviation";
  full_form?: string | null;
  example: string;
  meaning: string;
  upvotes: number;
  downvotes: number;
}
