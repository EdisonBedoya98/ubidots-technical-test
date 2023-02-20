import { useRouter } from "next/router";
import Counter from "./counter";
import Spinner from "../spinner/spinner";

import { BsChevronDown } from "react-icons/bs";

import { useNextLaunchCountDown } from "@/hooks/hooks";

function Countdown() {
  const { nextLaunchData, isLoading, isError } = useNextLaunchCountDown();

  return (
    <section className="h-auto min-h-screen py-10 bg-gradient-to-r from-[#4eccc3] via-[#4d989a] to-[#556471] overflow-scroll  ">
      <div className=" w-4/5 mx-auto flex flex-col items-center ">
        {isError ? (
          <span>Ha ocurrido un error, por favor recargue la página</span>
        ) : isLoading ? (
          <Spinner />
        ) : (
          <CountDownInfo rocketName={nextLaunchData.rocket?.rocket_name} />
        )}
      </div>
    </section>
  );
}

export default Countdown;

const CountDownInfo = ({ rocketName }: { rocketName: string }) => {
  const router = useRouter();
  return (
    <>
      <h1 className="text-3xl font-medium text-white mb-6">
        Upcoming : {rocketName}
      </h1>
      <Counter />
      <BsChevronDown
        className="cursor-pointer mt-3 text-white"
        onClick={() => router.push("/")}
        size={30}
      />
    </>
  );
};
