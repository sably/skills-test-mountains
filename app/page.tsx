import Image from "next/image";

import Accordion from "@/components/Accordion/Accordion";
import Carousel from "@/components/Caruosel";
import StickyNavbar from "@/components/navbar/StickyNavbar";
import SectionHeader from "@/components/SectionHeader";
import MainBanner from "@/components/MainBanner";

const sectionsContent = [
  "we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together.",
  "we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together.",
];

export default function Home() {
  return (
    <main className="">
      <MainBanner />
      <StickyNavbar />

      <section id="history" className="relative">
        <div
          id="01. HISTORY"
          className="my-0 mx-auto max-w-[1200px] md:px-[84px] p-2.5 md:pt-[46px] md:absolute md:left-0 md: right-0  border-t border-solid border-opacity-25 border-[#392b581a]"
        >
          <SectionHeader
            secNum="01."
            title="HISTORY"
            content={sectionsContent[0]}
            freeExpand
          />
        </div>
        <Image
          src="/images/history.jpg"
          alt="history"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full max-sm:hidden"
        />
        <div className="max-sm:relative max-sm:bg-[#fff] pt-1 sm:pt-7 pb-10 bg-[#1216408a] absolute w-full bottom-0">
          <Carousel />
        </div>
      </section>
      <section id="team">
        <div
          id="02. TEAM"
          className="my-0 mx-auto max-w-[1200px] md:px-[84px] p-2.5 border-b border-solid border-opacity-25 border-[#392b581a]"
        >
          <SectionHeader
            secNum="02."
            title="TEAM"
            content={sectionsContent[1]}
          />
        </div>
        <div>
          <Accordion />
        </div>
      </section>
    </main>
  );
}
