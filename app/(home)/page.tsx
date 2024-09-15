import WOTD from "@/components/WOTD";
import { IoSearch } from "react-icons/io5";
export default function Home() {
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
          <WOTD />
        </div>
      </div>
    </div>
  );
}
