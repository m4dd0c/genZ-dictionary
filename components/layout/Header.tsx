"use client";
import useTheme from "@/hooks/useTheme";
import { IThemeContext } from "@/types/types";
// import useTheme from "@/hooks/useTheme";
import Link from "next/link";

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
}: {
  changeMode: IThemeContext["changeMode"];
}) => {
  return (
    <div className="flex md:hidden">
      <div>Logo</div>
      <div>
        {/* change theme mode */}
        <button className="rounded-md border px-2" onClick={() => changeMode()}>
          &times;
        </button>
      </div>
    </div>
  );
};

const DesktopHeader = ({
  changeMode,
}: {
  changeMode: IThemeContext["changeMode"];
}) => {
  return (
    <div className="bg-high text-low flex h-16 items-center max-md:hidden">
      <div className="bg-mid w-1/2 rounded-br-3xl text-right text-4xl font-extrabold leading-loose">
        <h1 className="mx-10">GenZ dictionary</h1>
      </div>
      <div className="bg-high flex h-full w-1/2 items-center justify-end gap-5 px-10">
        {menuItems.map((item) => (
          <Link key={item.id} href={item.link}>
            {item.label}
          </Link>
        ))}
        {/* change theme mode */}
        <button className="rounded-md border px-2" onClick={() => changeMode()}>
          &times;
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  const { changeMode } = useTheme();
  return (
    <div>
      <MobileHeader changeMode={changeMode} />
      <DesktopHeader changeMode={changeMode} />
    </div>
  );
};
export default Header;
