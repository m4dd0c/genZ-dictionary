"use client";
import React from "react";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

const WOTD = () => {
  const playSound = () => {
    console.log("playing sound...");
  };
  return (
    <div className="text-left">
      <h1 className="m-5 text-3xl font-bold underline">Rizzler</h1>
      <div className="ml-10">
        <h1 className="font-semibold">Pronunciation</h1>
        <div className="flex items-center gap-3">
          <p>/ˈɹɪzləɹ/</p>
          <button onClick={playSound}>
            <HiOutlineSpeakerWave size={20} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <ol className="ml-[50px] list-decimal ">
          <li>
            <p>
              Someone exceptionally skilled at applying rizz; an expert seducer.
            </p>
            <p>
              <small>Synonym</small>: rizzly bear
            </p>
            <p>
              <small>example</small>: God damn!!! Bro is the Rizzler!!!
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default WOTD;
