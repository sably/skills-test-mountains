"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import useScroll from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

interface NavbarProps {
  simpleNav?: boolean;
  sticky?: boolean;
}

const StickyNavbar = () => {
  const scrollPosition = useScroll();
  const [isStiky, setStiky] = useState(false);

  const elemRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (elemRef.current) {
      const { top } = elemRef.current.getBoundingClientRect();
      if (top <= 0) {
        setStiky(true);
      } else {
        setStiky(false);
      }
    }
  }, [scrollPosition]);

  return (
    <div className="w-full xxxxxxxx">
      <div
        className={cn(
          "top-0 left-0 float-left w-full z-20",
          isStiky && "fixed"
        )}
      >
        {/* <div className="top-0 float-left w-full"> */}
        <Navbar />
      </div>
      {/* <Navbar /> */}
      <div ref={elemRef} className="h-[60px] bg-transparent"></div>
    </div>
  );
};

export default StickyNavbar;
