"use client";
import { cn } from "@/lib/utils";
import { Oswald } from "next/font/google";

const oswaldFont = Oswald({ weight: "700", subsets: ["latin"] });

interface ScheduleItem {
  [month: string]: string[][] | undefined;
}

const Schedule = ({ scheduleItem }: { scheduleItem: ScheduleItem }) => {
  return (
    <div className="max-w-[1200px] my-0 mx-auto">
      <div className="sm:absolute md:py-[8px] md:px-[32px] sm:text-[12px] sm:w-[264px] sm:py-0  border-r-2 py-3.5 px-14 sm:px-4 sm:bg-[#ffffffc7] bg-[#fff] sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 lg:w-[320px] lg:transform-none lg:top-[88px] lg:left-[90px] lg:text-[14px] ">
        <div
          className={cn(
            oswaldFont.className,
            "leading-none text-[28px] text-shadow text-[#414f6b]   font-bold mb-[-6px]"
          )}
        >
          SCHEDULE
        </div>
        <ul className="felx flex-col ">
          {Object.values(scheduleItem).map((s, i) => {
            return (
              <li key={i} className="flex flex-col py-2.5">
                {s?.map((date, index) => {
                  return (
                    <div key={index} className="flex justify-between ">
                      {date.map((item, index) => {
                        return <div key={index}>{item}</div>;
                      })}
                    </div>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
