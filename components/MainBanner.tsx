"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

const MainBanne = () => {
  const elemRef = useRef<HTMLDivElement>(null);
  const windowWidth = window.innerWidth;
  //   1.93 = is our main banner ratio (width/heigh)
  const elementH = windowWidth / 1.939 + "px";
  // To prevent the rest body elements from jumping to the top berfore loading main banner
  const handleFunc = (img: HTMLImageElement) => {
    if (img.parentElement) {
      img.parentElement.style.height = "auto";
    }
  };

  return (
    <div className="main-banner" ref={elemRef} style={{ height: elementH }}>
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

export default MainBanne;
