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
  "slide-1.jpg",
  "slide-2.jpg",
  "slide-3.jpg",
  "slide-4.jpg",
  "slide-5.jpg",
  "slide-1.jpg",
  "slide-2.jpg",
  "slide-3.jpg",
  "slide-4.jpg",
  "slide-5.jpg",
  "slide-1.jpg",
  "slide-2.jpg",
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
            <div key={i} className="carousel-cell w-[32%] px-[3px] sm:w-1/4">
              <img
                className="carousel-cell-image"
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
