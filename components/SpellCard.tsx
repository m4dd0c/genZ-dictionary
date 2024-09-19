import { IWord } from "@/types/types";
import { IoSearch } from "react-icons/io5";
import React from "react";
import { decorateNum } from "@/utils";
const SpellCard = ({ data }: { data: IWord }) => {
  return (
    <div className="hover:bg-mid my-4 flex cursor-pointer items-center justify-between gap-4 rounded-md px-5 py-3 transition-all">
      <div className="text-left">
        <h1 className="text-xl font-semibold">{data.word}</h1>
        <div className="flex items-center gap-1 text-sm text-neutral">
          <p>{data.type}</p>
          <p>•</p>
          <p>{data.synonym}</p>
        </div>
      </div>

      <div className="flex gap-4 text-sm text-neutral">
        <div className="flex items-center gap-1">
          <IoSearch />
          <p>{decorateNum(data.upvotes)}</p>
        </div>
        <div className="flex items-center gap-1">
          <IoSearch />
          <p>{decorateNum(data.downvotes)}</p>
        </div>
      </div>
    </div>
  );
};

export default SpellCard;
