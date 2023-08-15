"use client";
import React from "react";
import { cn } from "@/lib/utils";
interface AccordionContentProps {
  asTab?: boolean;
  children?: React.ReactNode;
  handleToggle?: Function;
  heading?: string;
  id: string;
  index: number;
  open?: boolean;
}

export default function AccordionContent({
  asTab,
  children,
  handleToggle,
  heading,
  id,
  index,
  open,
}: AccordionContentProps) {
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
