import { dateToUTC } from "@/utils/utils";
import Favorite from "./favorite";
import Spinner from "../spinner/spinner";
import { useLaunches } from "@/hooks/hooks";

function TableLaunches() {
  const { upcomingLaunchesData, isLoading, isError } = useLaunches();

  if (isError)
    return <span>Ha ocurrido un error, por favor recargue la página</span>;
  return (
    <div className="h-full w-full max-w-7xl overflow-scroll  bg-gradient-to-r from-[#382937] via-[#312534] to-[#271f30]  pt-10 px-4">
      {isLoading ? (
        <div className="flex justify-center">
          <Spinner></Spinner>
        </div>
      ) : (
        <TableData upcomingLaunchesData={upcomingLaunchesData} />
      )}
    </div>
  );
}

export default TableLaunches;

const TableData = ({
  upcomingLaunchesData,
}: {
  upcomingLaunchesData: any[];
}) => {
  return (
    <table className="w-full text-white text-xs font-light  ">
      <thead>
        <tr className="border-b">
          <th className="text-start">Mission</th>
          <th className="text-start">Date (UTC)</th>
          <th className="text-start">Launchpad</th>
          <th className="text-start">Favorite</th>
        </tr>
      </thead>
      <tbody>
        {upcomingLaunchesData.map((upcomingLaunch: any, index: number) => (
          <tr className="border-b last:border-none" key={index}>
            <td>{upcomingLaunch.rocket?.rocket_name}</td>
            <td>{dateToUTC(upcomingLaunch.launch_date_local)}</td>
            <td>
              {upcomingLaunch.launch_site.site_name}
              {}
            </td>
            <td>
              <Favorite id={upcomingLaunch.launch_site.site_id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
