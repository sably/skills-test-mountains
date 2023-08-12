"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface LogoProps {
  isFooter?: boolean;
}
const Logo: React.FC<LogoProps> = ({ isFooter }) => {
  const router = useRouter();

  return (
    <div
      className={cn("flex items-center space-x-2", isFooter && "max-sm:hidden")}
    >
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
        src="/images/logo2.svg"
        height="100"
        width="90"
        alt="Losangeles"
      />
      <Image
        className="max-sm:hidden cursor-pointer text-logo white-logo"
        src="/images/logo3.svg"
        height="100"
        width="90"
        alt="Losangeles"
      />
    </div>
  );
};

export default Logo;
