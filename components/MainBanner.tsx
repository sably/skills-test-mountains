"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import useDeviceSize from "@/hooks/useDeviceSize";

const MainBanner = () => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // if (!isClient) {
  //   return "";
  // }

  // const windowWidth = window.innerWidth;
  // const elementhH = windowWidth / 1.939 + "px";

  let elementhH = "0px";
  // // Check if window object is defined
  // if (typeof window !== "undefined") {
  //   const windowWidth = window.innerWidth;
  //   elementhH = windowWidth / 1.939 + "px";
  // }

  // const [windowWidth, setWindowWidth] = useState(0);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setWindowWidth(window.innerWidth);
  //   }
  // }, []);
  // const elementhH = windowWidth / 1.939 + "px";

  // const [windowWidth] = useDeviceSize();
  // let elementH = "";
  // if (typeof window !== "undefined") {
  //   const windowWidth = window.innerWidth;
  //   //   1.93 = is our main banner ratio (width/heigh)
  //   elementH = windowWidth / 1.939 + "px";
  // }

  // To prevent the rest body elements from jumping to the top berfore loading main banner
  const handleFunc = (img: HTMLImageElement) => {
    if (img.parentElement) {
      img.parentElement.style.height = "auto";
    }
  };

  return (
    <div
      className="main-banner w-full aspect-[2/1]"
      // style={{ height: elementhH }}
    >
      <Image
        src="/images/main-banner.jpg"
        alt="mountains"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full"
        onLoadingComplete={(img) => handleFunc(img)}
      />
    </div>
  );
};

export default MainBanner;
