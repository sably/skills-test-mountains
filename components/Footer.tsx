"use client";

import Logo from "./navbar/Logo";

const Footer = () => {
  return (
    <footer className="relative w-full">
      <div className="absolute w-full h-full overlay opacity-80"></div>
      <div className="my-0 mx-auto max-w-[1000px] px-2 py-[10px] sm:px-16 flex items-center text-[10px] justify-center ">
        <Logo isFooter />
        <div className="sm:ml-auto flex items-center ">
          COPYRIGHT 2016, ALL RIGHTS RESEVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
