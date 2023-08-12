import Carousel from "@/components/Caruosell";
import Carouselll from "@/components/CCCC";
import StickyNavbar from "@/components/navbar/StickyNavbar";
import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="">
//       <div className="">
//         <img src="/images/main-banner.jpg" />
//       </div>
//       <StickyNavbar />

//       <div className="relative">
//         <img src="/images/history.jpg" />
//         <div className="fffffffffffffffff pt-1 sm:pt-7 pb-10 bg-[#1216408a] absolute w-full bottom-0">
//           <Carouselll>
//             <div className="carousel-cell w-1/3 px-[3px] sm:w-1/4">
//               <img src="/images/slider/slide-1.jpg" />
//             </div>
//             <div className="carousel-cell w-1/3 px-[3px] sm:w-1/4">
//               <img src="/images/slider/slide-2.jpg" />
//             </div>
//             <div className="carousel-cell w-1/3 px-[3px] sm:w-1/4">
//               <img src="/images/slider/slide-3.jpg" />
//             </div>
//             <div className="carousel-cell w-1/3 px-[3px] sm:w-1/4">
//               <img src="/images/slider/slide-4.jpg" />
//             </div>
//             <div className="carousel-cell w-1/3 px-[3px] sm:w-1/4">
//               <img src="/images/slider/slide-5.jpg" />
//             </div>
//             <div className="carousel-cell w-1/3 px-[3px] sm:w-1/4">
//               <img src="/images/slider/slide-2.jpg" />
//             </div>
//           </Carouselll>
//         </div>
//       </div>

//       <div className="">
//         <img src="/images/main-banner.jpg" />
//       </div>
//     </main>
//   );
// }

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

      <div className="">
        <img src="/images/main-banner.jpg" />
      </div>
    </main>
  );
}
