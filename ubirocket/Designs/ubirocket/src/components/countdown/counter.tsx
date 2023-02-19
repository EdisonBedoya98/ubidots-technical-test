import { CounterItemInformationProps } from "@/interfaces";
import React from "react";

function Counter() {
  return (
    <div className="h-full min-h-[40rem] w-full max-w-7xl bg-gradient-to-r from-[#224344] via-[#23393c] to-[#253035] px-4 ">
      <div className="h-full py-5 w-full text-white text-xs font-light flex flex-col gap-y-4 items-center justify-around ">
        <CounterItemInformation value={2} valueMeaning="DAYS" />
        <CounterItemInformation value={7} valueMeaning="HOURS" />
        <CounterItemInformation value={59} valueMeaning="MINUTES" />
        <CounterItemInformation value={31} valueMeaning="SECONDS" />
      </div>
    </div>
  );
}

export default Counter;

const CounterItemInformation = ({
  value,
  valueMeaning,
}: CounterItemInformationProps) => {
  return (
    <div className="flex flex-col items-center">
      <span className="block text-8xl font-thin">{value}</span>
      <span className="border border-white/70 rounded-sm text-xl font-thin p-[2px]">
        {valueMeaning}
      </span>
    </div>
  );
};
