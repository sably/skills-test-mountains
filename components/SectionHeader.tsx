"use client";
import { cn } from "@/lib/utils";
// import { Bebas_Neue } from "next/font/google";
import { Oswald } from "next/font/google";

const OswaldFont = Oswald({
  weight: "400",
  subsets: ["latin"],
});

interface SectionHeaderProps {
  secNum: string;
  title: string;
  content: string;
  freeExpand?: boolean;
}

const SectionHeader = ({
  secNum,
  title,
  content,
  freeExpand,
}: SectionHeaderProps) => {
  return (
    <div className={cn(freeExpand ? "lg:flex flex-col" : "flex")}>
      <div
        className={cn(
          "mr-[18px] flex items-end ",
          freeExpand && "float-left",
          OswaldFont.className
        )}
      >
        <div
          className={cn(
            "text-[80px] md:text-[120px] leading-none font-bold",
            freeExpand
              ? "lg:mt-[-10px] text-[#6d7d98]"
              : "mt-[-10px] text-[#a0a7b5]"
          )}
        >
          {secNum}
        </div>
        <div className="pb-[14px] md:pb-[22px] ml-[-12px] md:ml-[-22px] text-[16px] md:text-[26px] text-[#414f6b] font-bold">
          {title}
        </div>
      </div>

      <p
        className={cn(
          "self-center text-[12px] md:m-0",
          freeExpand && "pt-[14px] lg:pt-[0] lg:px-[64px] "
        )}
      >
        {content}
      </p>
    </div>
  );
};

export default SectionHeader;
