import Accordion from "@/components/Accordion/Accordion";
import Carousel from "@/components/Caruosel";
import StickyNavbar from "@/components/navbar/StickyNavbar";
import SectionTitre from "@/components/SectionTitre";
const sectionsContent = [
  "we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together.",
  "we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together. we can do our best together.",
];

export default function Home() {
  return (
    <main className="">
      <div className="">
        <img src="/images/main-banner.jpg" />
      </div>
      <StickyNavbar />

      <div className="relative">
        <div className="my-0 mx-auto max-w-[1200px] md:px-[84px] p-2.5 md:pt-[46px] md:absolute md:left-0 md: right-0  border-t border-solid border-opacity-25 border-[#392b581a]">
          <SectionTitre
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
      </div>
      <div className="my-0 mx-auto max-w-[1200px] md:px-[84px] p-2.5 border-b border-solid border-opacity-25 border-[#392b581a]">
        <SectionTitre secNum="02." title="TEAM" content={sectionsContent[1]} />
      </div>
      <div>
        <Accordion />
      </div>

      {/* <div className="">
        <img src="/images/main-banner.jpg" />
      </div> */}
    </main>
  );
}
