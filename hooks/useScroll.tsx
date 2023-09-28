"use client";

import { useState, useEffect } from "react";

interface ScrollProps {
  threshold?: number;
  callback?: () => void;
}

function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);

      //   if (window.scrollY >= threshold) {
      //     callback();
      //   }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}
export default useScroll;
