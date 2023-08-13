import { cn } from "@/lib/utils";
import React from "react";
interface AccordionContentProps {
  asTab: any;
  children: React.ReactNode;
  handleToggle: any;
  heading: any;
  id: any;
  index: any;
  open: any;
}

export default function AccordionPanel({
  asTab,
  children,
  handleToggle,
  heading,
  id,
  index,
  open,
}: AccordionContentProps) {
  // console.log(index, 'AccordionPanel open:', open);
  if (asTab) {
    return !open ? null : (
      <div
        aria-labelledby={`tab-${id}`}
        className="Accordion-group"
        id={`panel-${id}`}
        role="tabpanel"
      >
        <div className="Tab-panel relative">{children}</div>
      </div>
    );
  }
  return (
    <details
      className={cn(
        "Accordion-group border-b border-solid border-opacity-25 border-[#392b581a]",
        open && "is-active"
      )}
      open={open}
    >
      <summary
        className="Accordion-head p-2.5 "
        onClick={handleToggle?.(index)}
      >
        <span className="icon plus expand float-right"></span>
        {heading}
      </summary>
      <div className="Accordion-panel relative" id={id}>
        {children}
      </div>
    </details>
  );
}
