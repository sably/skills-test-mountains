"use client";

import { useEffect, useRef, useState } from "react";

import Navbar from "./Navbar";
import useScroll from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

const StickyNavbar = () => {
  const scrollPosition = useScroll();
  const [isStiky, setStiky] = useState(false);

  const elemRef = useRef<HTMLDivElement>(null);

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
    <div className="sticky-navbar w-full">
      <div
        className={cn(
          "top-0 left-0 float-left w-full z-20",
          isStiky && "fixed"
        )}
      >
        <Navbar />
      </div>
      <div ref={elemRef} className="h-[60px] bg-transparent"></div>
    </div>
  );
};

export default StickyNavbar;
