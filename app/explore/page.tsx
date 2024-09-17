import SpellCard from "@/components/SpellCard";
import { IWord } from "@/types/types";
import React from "react";
import { IoSearch } from "react-icons/io5";

const page = () => {
  const words: IWord[] = [
    {
      _id: "1",
      word: "OOTD",
      synonym: "Hell",
      type: "abbreviation",
      full_form: "Outfit of the day.",
      meaning: "When someone shows his/her outfit he/she wearing the day.",
      example: "Hey guys look at his ootd; its so mid.",
    },
    {
      _id: "2",
      word: "GOAT",
      synonym: "Hello yeah",
      type: "abbreviation",
      full_form: "greatest of all time.",
      meaning: "When someone is all time best in specific field.",
      example: "Virat kohli is GOAT.",
    },
  ];
  return (
    <div className="bg-high text-high mx-auto max-w-3xl text-center">
      <h1 className="mb-5 mt-10 text-4xl">Look up for a word</h1>
      <div className="flex w-full items-center rounded-full border-2 border-neutral p-2">
        <input
          className="w-full bg-transparent px-4"
          placeholder="start typing slang, abbreviation, or whatever it is..."
        />
        <button className="bg-low flex items-center justify-center gap-2 rounded-full px-4 py-2">
          <h1 className="max-sm:hidden">Search&nbsp;</h1>
          <IoSearch />
        </button>
      </div>
      <div className="bg-mid my-10 rounded-lg px-5 py-10">
        {/* something  */}
        <h1 className="text-3xl underline">Word of the day</h1>
        <div>
          {/* cards */}
          {words.map((data) => (
            <SpellCard key={data._id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
