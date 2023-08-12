"use client";
import React, { useRef, useEffect, ReactNode } from "react";
import Flickity from "flickity";
import "@/app/flickity.css";

interface FlickitySliderProps {
  children: ReactNode;
}

const FlickitySlider: React.FC<FlickitySliderProps> = ({ children }) => {
  const flickityRef = useRef<Flickity | null>(null);

  useEffect(() => {
    flickityRef.current = new Flickity(".carousel", {
      initialIndex: 0,
      contain: true,
      groupCells: true,
      //   lazyLoad: true,
      // imagesLoaded: true,
      // adaptiveHeight: true,
    });

    return () => {
      if (flickityRef.current) {
        flickityRef.current.destroy();
      }
    };
  }, []);

  return <div className="carousel">{children}</div>;
};

export default FlickitySlider;
