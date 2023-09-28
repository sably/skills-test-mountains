"use client";
//@ts-ignore
import Flickity from "react-flickity-component";

import "@/app/flickity.css";

const flickityOptions = {
  initialIndex: 0,
  contain: true,
  groupCells: true,
  lazyLoad: 1,
};
const imgs = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "3.jpg",
  "4.jpg",
  "2.jpg",
];

function Carousel() {
  return (
    <div>
      <Flickity
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {imgs.map((img, i) => {
          return (
            <div key={i} className="carousel-cell w-[90%] px-[8px] sm:w-1/4">
              <img
                alt="sliderImage"
                className="carousel-cell-image max-sm:w-[100%] max-sm:rounded-lg"
                data-flickity-lazyload={`/images/slider/${img}`}
              />
            </div>
          );
        })}
      </Flickity>
    </div>
  );
}
export default Carousel;
