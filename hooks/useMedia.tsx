"use client";

import { useState, useEffect } from "react";

const useMedia = (query: string): boolean => {
  const isClient = typeof window === "object";
  const [matches, setMatches] = useState(
    isClient && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (!isClient) return;

    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [isClient, matches, query]);

  return matches;
};

export default useMedia;
