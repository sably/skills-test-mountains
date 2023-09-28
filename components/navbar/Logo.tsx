"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import useMedia from "@/hooks/useMedia";

interface LogoProps {
  isFooter?: boolean;
}
const Logo: React.FC<LogoProps> = ({ isFooter }) => {
  const router = useRouter();
  const isSmallScreen = useMedia("(max-width: 640px)");

  if (isSmallScreen && isFooter) {
    return "";
  }

  return (
    <div className={"flex items-center space-x-2"}>
      <Image
        onClick={() => router.push("/")}
        className="cursor-pointer border border-gray-400 rounded-full"
        src="/images/logo.svg"
        height="40"
        width="40"
        alt="Logo"
      />
      <Image
        onClick={() => router.push("/")}
        className=" cursor-pointer text-logo colory-logo"
        src="/images/textLogo.svg"
        height="100"
        width="90"
        alt="Losangeles"
      />
      <Image
        className="max-sm:hidden cursor-pointer text-logo white-logo"
        src="/images/textLogoWhite.svg"
        height="100"
        width="90"
        alt="Losangeles"
      />
    </div>
  );
};

export default Logo;
