import { useRouter } from "next/router";
import Counter from "./counter";
import ArrowIcon from "@/assets/chevron-down.svg";
import Spinner from "../spinner/spinner";
import { useNextLaunchCountDown } from "@/hooks/hooks";

function Countdown() {
  const { nextLaunchData, isLoading } = useNextLaunchCountDown();
  return (
    <section className="h-auto min-h-screen py-10 bg-gradient-to-r from-[#4eccc3] via-[#4d989a] to-[#556471] overflow-scroll  ">
      <div className=" w-4/5 mx-auto flex flex-col items-center ">
        {isLoading ? (
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
      <ArrowIcon
        className="w-7 cursor-pointer mt-3"
        alt="ArrowIcon"
        onClick={() => router.push("/")}
      />
    </>
  );
};
