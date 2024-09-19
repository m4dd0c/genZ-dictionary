"use client";
import { selectRandom } from "@/utils";
import { words } from "@/utils/constants";
import React from "react";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

const WOTD = ({ id }: { id?: string }) => {
  // showing random word details if id not passed or id is NaN
  const data = words[id ? parseInt(id) || selectRandom() : selectRandom()];

  console.log(data);
  const playSound = () => {
    console.log("playing sound...");
  };

  return !data ? (
    <h1>loading...</h1>
  ) : (
    <div className="text-left">
      <h1 className="m-5 text-3xl font-bold underline">{data.word}</h1>
      <div className="ml-10">
        <h1 className="font-semibold">Pronunciation</h1>
        <div className="flex items-center gap-3">
          <p>{data.pronunciation}</p>
          <button onClick={playSound}>
            <HiOutlineSpeakerWave size={20} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <ol className="ml-[50px] list-decimal ">
          <li>
            <p>{data.meaning}</p>
            <p>
              <small>Synonym</small>: {data.synonym}
            </p>
            <p>
              <small>example</small>: {data.example}
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default WOTD;
