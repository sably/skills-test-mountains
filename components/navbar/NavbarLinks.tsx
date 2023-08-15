"use client";

import { cn } from "@/lib/utils";

interface NavbarLinksProp {
  links: string[];
  simpleNav?: boolean;
}

const NavbarLinks = ({ links, simpleNav }: NavbarLinksProp) => {
  return (
    <div className="ml-auto flex items-center space-x-3">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link}`}
          className={cn(
            simpleNav
              ? "border-b border-[#fff] text-[#fff] font-bold hover:text-[#ebebeb] hover:border-[#ebebeb] "
              : "border-b border-blue-900 text-blue-900 font-bold hover:text-blue-600 hover:border-blue-600 "
          )}
        >
          {link}
        </a>
      ))}

      {/* <a
        href="#History"
        className="border-b border-blue-900 text-blue-900 font-bold hover:border-blue-800"
      >
        01. HISTORY
      </a>
      <a
        href="#Team"
        className="border-b border-blue-900 text-blue-900 font-bold"
      >
        02. TEAM
      </a> */}
    </div>
  );
};

export default NavbarLinks;
