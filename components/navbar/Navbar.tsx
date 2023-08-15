"use client";

import NavbarLinks from "./NavbarLinks";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

interface NavbarProps {
  simpleNav?: boolean;
  sticky?: boolean;
}

const links = ["01. HISTORY", "02. TEAM"];

const Navbar: React.FC<NavbarProps> = ({ simpleNav }) => {
  return (
    <div
      className={cn(
        "w-full z-10 bg-white text-[10px]",
        simpleNav && "bg-transparent simple-nav absolute"
      )}
    >
      <div className="my-0 mx-auto max-w-[1000px] px-2 py-[10px] sm:px-16">
        <div
          className="
            flex 
            items-center     
          "
        >
          <Logo />
          <NavbarLinks links={links} simpleNav={simpleNav} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
