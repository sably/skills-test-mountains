import Accordion from "@/components/Accordion/Accordion";
import Carousel from "@/components/Caruosell";
import Carouselll from "@/components/CCCC";
import StickyNavbar from "@/components/navbar/StickyNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <img src="/images/main-banner.jpg" />
      </div>
      <StickyNavbar />

      <div className="relative">
        <img src="/images/history.jpg" />
        <div className="fffffffffffffffff pt-1 sm:pt-7 pb-10 bg-[#1216408a] absolute w-full bottom-0">
          <Carousel />
        </div>
      </div>
      <div>
        <Accordion />
      </div>

      <div className="">
        <img src="/images/main-banner.jpg" />
      </div>
    </main>
  );
}
