import TableLaunches from "./table-launches";

export default function UpcomingLaunches({ title }: { title: string }) {
  return (
    <section className="h-auto min-h-screen py-10 bg-gradient-to-r from-[#aa5289] via-[#7b3772] to-[#401656] overflow-scroll  ">
      <div className="h-[90vh] min-h-[20rem] w-4/5 mx-auto flex flex-col items-center gap-y-7 ">
        <h1 className="text-3xl font-medium text-white">{title}</h1>
        <TableLaunches />
      </div>
    </section>
  );
}
