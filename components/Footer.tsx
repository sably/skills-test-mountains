"use client";
import { useEffect, useState } from "react";

import Logo from "./navbar/Logo";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  //Ensure that the component renders the same content server-side as it does during the initial
  //client-side render to prevent a hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return "";
  }

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
