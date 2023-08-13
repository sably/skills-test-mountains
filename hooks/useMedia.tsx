import { useState, useEffect } from "react";

const useMedia = (query: any) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    // media.addListener(listener);
    // return () => media.removeListener(listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

export default useMedia;
