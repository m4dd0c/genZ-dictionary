"use client";
import useTheme from "@/hooks/useTheme";
import { IThemeContext, TMode } from "@/types/types";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu, IoMoon, IoSunny } from "react-icons/io5";

export const menuItems = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "Explore",
    link: "/explore",
  },
  {
    id: 3,
    label: "Random",
    link: "/random",
  },
  {
    id: 4,
    label: "Add a word",
    link: "/add-a-word",
  },
];

const MobileHeader = ({
  changeMode,
  mode,
}: {
  changeMode: IThemeContext["changeMode"];
  mode: TMode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-low bg-high fixed inset-x-0 top-0 flex items-center transition-all lg:hidden">
      <div className="bg-mid flex h-14 w-full items-center rounded-br-3xl text-center text-sm font-extrabold leading-loose sm:text-lg md:text-center md:text-xl">
        <h1 className="mx-auto inline-block">Z Slang</h1>
      </div>
      <div className="bg-high flex h-14 items-center justify-end gap-5 px-5 sm:px-10">
        {/* change theme mode */}
        <button
          className="shadow-input rounded-md p-2 outline-none"
          onClick={() => changeMode()}
        >
          {mode === "light" ? <IoSunny /> : <IoMoon />}
        </button>
        <button
          className="shadow-input rounded-md p-2 outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? <IoMenu /> : <IoClose />}
        </button>
      </div>
      {/* menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} bg-high absolute inset-x-0 top-14 h-screen overflow-y-hidden`}
      >
        <div className="mx-auto w-fit space-y-6 py-10">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              onClick={() => setIsOpen(false)}
              className="block"
              href={item.link}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const DesktopHeader = ({
  changeMode,
  mode,
}: {
  changeMode: IThemeContext["changeMode"];
  mode: TMode;
}) => {
  return (
    <div className="bg-high text-low flex h-16 items-center max-lg:hidden">
      <div className="bg-mid flex h-full w-1/2 items-center rounded-br-3xl text-right text-4xl font-extrabold leading-loose max-lg:text-xl">
        <h1 className="mx-20">Z Slang</h1>
      </div>
      <div className="bg-high flex h-full w-1/2 items-center justify-end gap-5 px-10">
        {menuItems.map((item) => (
          <Link key={item.id} href={item.link}>
            {item.label}
          </Link>
        ))}
        {/* change theme mode */}
        <button
          className="shadow-input rounded-md p-2 outline-none"
          onClick={() => changeMode()}
        >
          {mode === "light" ? <IoSunny /> : <IoMoon />}
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  const { changeMode, mode } = useTheme();
  return (
    <div>
      <MobileHeader mode={mode} changeMode={changeMode} />
      <DesktopHeader mode={mode} changeMode={changeMode} />
    </div>
  );
};
export default Header;
