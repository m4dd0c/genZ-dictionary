import React from "react";
interface IWord {}
const SpellCard = ({ data }: IWord) => {
  return <div>{data.word}</div>;
};

export default SpellCard;
