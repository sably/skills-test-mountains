"use client";

import { useState, useEffect } from "react";
import useMedia from "@/hooks/useMedia";
import AccordionPanel from "./AccordionPanel";

const panelItems = [
  {
    id: "MONTAIN-1",
    open: true,
    heading: "MOUNTAIN 1",
    bgImg: "/images/accordian/accordian-1.jpg",
  },
  {
    id: "MONTAIN-2",
    heading: "MOUNTAIN 2",
    bgImg: "/images/accordian/accordian-2.jpg",
  },
];

const Accordion = () => {
  const [isClient, setIsClient] = useState(false);
  const isLargeScreen = useMedia("(min-width: 640px)");

  //Ensure that the component renders the same content server-side as it does during the initial
  //client-side render to prevent a hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return "";
  }

  return (
    <AccordionPanel
      asTabs={isLargeScreen}
      onlyOneOpenAccordion={true}
      panels={panelItems}
    />
  );

  //   return isLargeScreen ? <Tabs items={panels} /> : <Accordion items={panels} />;
};

export default Accordion;
