function TableLaunches() {
  return (
    <div className="h-full w-full max-w-7xl overflow-scroll  bg-gradient-to-r from-[#382937] via-[#312534] to-[#271f30]  pt-10 px-4">
      <table className="w-full text-white text-xs font-light  ">
        <tr className="border-b">
          <th className="text-start">Mission</th>
          <th className="text-start">Date (UTC)</th>
          <th className="text-start">Launchpad</th>
        </tr>
        {[1, 2, 3, 2, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, , 2, 2, 2, 2].map(
          (item, key) => (
            <tr className="border-b last:border-none" key={key}>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
          )
        )}
      </table>
    </div>
  );
}

export default TableLaunches;
