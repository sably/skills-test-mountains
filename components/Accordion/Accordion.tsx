"use client";
import useMedia from "@/hooks/useMedia";
import AccordionPanel from "./AccordionPanel";

const panelItems = [
  {
    id: "MONTAIN-1",
    open: true,
    heading: "MOUNTAIN 1",
    bgImg: "/images/accordian/accordian-1.jpg",
    content: <></>,
  },
  {
    id: "MONTAIN-2",
    heading: "MOUNTAIN 2",
    bgImg: "/images/accordian/accordian-2.jpg",

    content: <p></p>,
  },
];

const Accordion = () => {
  const isLargeScreen = useMedia("(min-width: 640px)");

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
