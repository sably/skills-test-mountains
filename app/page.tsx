import Accordion from "@/components/Accordion/Accordion";
import Carousel from "@/components/Caruosel";
import StickyNavbar from "@/components/navbar/StickyNavbar";
import SectionHeader from "@/components/SectionHeader";

const sectionsContent = [
  "we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together.",
  "we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together.",
];

export default function Home() {
  return (
    <main className="">
      <div className="main-banner">
        <img src="/images/main-banner.jpg" />
      </div>
      <StickyNavbar />

      <section className="relative">
        <div
          id="History"
          className="my-0 mx-auto max-w-[1200px] md:px-[84px] p-2.5 md:pt-[46px] md:absolute md:left-0 md: right-0  border-t border-solid border-opacity-25 border-[#392b581a]"
        >
          <SectionHeader
            secNum="01."
            title="HISTORY"
            content={sectionsContent[0]}
            freeExpand
          />
        </div>
        <img src="/images/history.jpg" />
        <div className="fffffffffffffffff max-sm:relative max-sm:bg-[#fff] pt-1 sm:pt-7 pb-10 bg-[#1216408a] absolute w-full bottom-0">
          <Carousel />
        </div>
      </section>
      <section>
        <div
          id="Team"
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
