import { useCountDown } from "@/hooks/hooks";
import { CounterItemInformationProps } from "@/interfaces";
import Spinner from "../spinner/spinner";

function Counter() {
  const { countdown, isLoading } = useCountDown();
  return (
    <div className="h-full min-h-[40rem] w-full max-w-7xl bg-gradient-to-r from-[#224344] via-[#23393c] to-[#253035] px-4 ">
      <div className="h-full py-5 w-full text-white text-xs font-light flex flex-col gap-y-4 items-center justify-around ">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <CounterItemInformation
              value={countdown.days}
              valueMeaning="DAYS"
            />
            <CounterItemInformation
              value={countdown.hours}
              valueMeaning="HOURS"
            />
            <CounterItemInformation
              value={countdown.minutes}
              valueMeaning="MINUTES"
            />
            <CounterItemInformation
              value={countdown.seconds}
              valueMeaning="SECONDS"
            />
          </>
        )}
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
