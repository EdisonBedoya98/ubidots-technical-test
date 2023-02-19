import React from "react";
import Counter from "./counter";

function Countdown() {
  return (
    <section className="h-auto min-h-screen py-10 bg-gradient-to-r from-[#4eccc3] via-[#4d989a] to-[#556471] overflow-scroll  ">
      <div className=" w-4/5 mx-auto flex flex-col items-center gap-y-7 ">
        <h1 className="text-3xl font-medium text-white">Upcoming : SXM-8</h1>
        <Counter />
      </div>
    </section>
  );
}

export default Countdown;
