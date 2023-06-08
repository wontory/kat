const days = ["", "월", "화", "수", "목", "금"];

const convert = (timetable) => {
  const table = Array.from(Array(9), () =>
    Array(6).fill({ credit: null, name: null })
  );
  const result = [];

  timetable.map((tt) => {
    const classInfo = { credit: tt.credit, name: tt.name, color: tt.color };
    const day = days.indexOf(tt.day);
    const time = Array.from(tt.time, mapfn);

    return time.map((time) => (table[time][day] = classInfo));
  });

  createThead(result);
  createTbody(table, result);

  return (
    <table className="table table-zebra table-compact w-full text-center">
      {result}
    </table>
  );
};

const mapfn = (arg) => Number(arg);

const createThead = (result) => {
  const data = [];

  days.map((day) => data.push(<th>{day}</th>));

  result.push(
    <thead>
      <tr>{data}</tr>
    </thead>
  );
};

const createTbody = (table, result) => {
  const row = [];

  for (let i = 1; i < table.length; i++) {
    const data = [];

    data.push(<th>{i}</th>);
    for (let j = 1; j < table[i].length; j++) {
      const bgColor = `bg-${table[i][j].color}-500`;

      table[i][j].credit !== null
        ? JSON.stringify(table[i - 1][j]) !== JSON.stringify(table[i][j]) &&
          data.push(
            <td rowSpan={table[i][j].credit} className={bgColor}>
              {table[i][j].name}
            </td>
          )
        : data.push(<td></td>);
    }

    row.push(<tr>{data}</tr>);
  }

  result.push(<tbody>{row}</tbody>);
};

export default convert;
