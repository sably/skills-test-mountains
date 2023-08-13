"use client";

import { cn } from "@/lib/utils";
import { Bebas_Neue } from "next/font/google";

const bebas_Neue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

interface ScheduleItem {
  [month: string]: string[][] | undefined;
}

const Schedule = ({ scheduleItem }: { scheduleItem: ScheduleItem }) => {
  return (
    <div className="max-w-[1200px] lg:relative my-0 mx-auto">
      <div className="sm:absolute sm:text-[12px] sm:w-[264px] sm:py-0  border-r-2 py-3.5 px-14 sm:px-4 sm:bg-[#ffffffc7] bg-[#fff] sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 lg:w-[320px] lg:transform-none lg:top-[88px] lg:left-[90px] lg:text-[14px] ">
        <div
          className={cn(
            "leading-none text-[40px] text-shadow text-[#414f6b]  mb-[-16px] ",
            bebas_Neue.className
          )}
        >
          SCHEDULE
        </div>
        <ul className="felx flex-col ">
          <li className="flex flex-col py-3">
            <div className="flex justify-between ">
              <div className="">date 43 jun</div>
              <div className="">Vestibulum viverra</div>
            </div>
            <div className="flex justify-between">
              <div className="">date 54 feb</div>
              <div className="">Vestibulum viverra</div>
            </div>
          </li>
          <li className="flex flex-col py-3">
            <div className="flex justify-between">
              <div className="">dte 33 jl</div>
              <div className="">Vestibulum viverra</div>
            </div>
          </li>
          <li className="flex flex-col py-3">
            <div className="flex justify-between">
              <div className="">dte 33 jl</div>
              <div className="">Vestibulum viverra</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  // return Object.values(scheduleItem).map(() => {
  //   return <div>hiiiiiiiiiii</div>;
  // });
};

export default Schedule;
