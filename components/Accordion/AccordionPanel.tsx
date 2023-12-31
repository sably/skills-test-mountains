"use client";

import React, { useState } from "react";
import Image from "next/image";

import AccordionContent from "./AccordionContent";
import { Bebas_Neue } from "next/font/google";
import { cn } from "@/lib/utils";
import Schedule from "./Schedule";

const bebas_Neue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const scheduleItems = [
  {
    Nov: [
      ["25 Nov 2016", "Vestibulum viverra"],
      ["28 Nov 2016", "Vestibulum viverra"],
    ],
    Dec: [["18 Dec 2016", "Vestibulum viverra"]],
    jan: [["07 Jan 2017", "Vestibulum viverra"]],
  },
  {
    Nov: [["13 Nov 2016", "Vestibulum viverra"]],
    Dec: [
      ["02 Dec 2016", "Vestibulum viverra"],
      ["29 Dec 2016", "Vestibulum viverra"],
    ],
    jan: [["16 jan 2017", "Vestibulum viverra"]],
  },
];

interface AccordionPanelProps {
  asTabs?: boolean;
  onlyOneOpenAccordion?: boolean;
  panels: Panel[];
}

interface Panel {
  heading: string;
  id: string;
  bgImg: string;
  open?: boolean;
}

export default function AccordionPanel({
  asTabs,
  onlyOneOpenAccordion = true,
  panels,
}: AccordionPanelProps) {
  const canClose = !asTabs;
  const onlyOneOpen = asTabs || onlyOneOpenAccordion;

  const [openPanel, setOpenPanel] = useState(
    Math.min(
      panels.findIndex(({ open }) => open),
      canClose ? -1 : 0
    )
  );

  const handleToggle =
    (index: number) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.preventDefault();
      const wasOpen = index === openPanel;
      setOpenPanel(canClose && wasOpen ? -1 : index);
    };

  const isIndexOpen = (index: number) =>
    openPanel !== -1 && openPanel === index;

  return (
    <>
      {asTabs && (
        <div className="TabButtons bg-[#414f6b]">
          <ul
            role="tablist"
            className="TabButtons-list flex px-16 my-0 mx-auto max-w-[1200px]"
          >
            {panels.map(({ heading, id }, i) => (
              <li
                key={i}
                aria-selected={isIndexOpen(i)}
                className={cn(
                  "TabButtons-listItem flex px-5 py-2",
                  bebas_Neue.className
                )}
              >
                <a
                  aria-controls={`panel-${id}`}
                  className="TabButtons-button text-[#b0b4be] font-medium text-[26px] leading-none"
                  href={`#${id}`}
                  id={`tab-${id}`}
                  onClick={handleToggle(i)}
                  role="tab"
                >
                  {heading}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {panels.map(({ bgImg, heading, id, open }, i) => (
        <AccordionContent
          asTab={asTabs}
          handleToggle={onlyOneOpen ? handleToggle : undefined}
          heading={heading}
          id={id}
          index={i}
          key={i}
          open={onlyOneOpen ? isIndexOpen(i) : open}
        >
          <div className="ggggggggggggggg ">
            <Image
              src={bgImg}
              alt={heading}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full sm:object-cover sm:min-h-[250px]"
            />
            <div className="max-w-[1200px]"></div>
          </div>
          {<Schedule scheduleItem={scheduleItems[i]} />}
        </AccordionContent>
      ))}
    </>
  );
}
