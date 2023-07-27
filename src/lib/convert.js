const days = ["", "월", "화", "수", "목", "금"];

const convert = (timetable) => {
  const table = Array.from(Array(9), () =>
    Array(6).fill({ credit: null, name: null })
  );
  const result = [];

  timetable.map((tt) => {
    const classInfo = {
      credit: tt.credit,
      name: tt.name,
      color: tt.color,
    };
    const day = days.indexOf(tt.day);
    const time = Array.from(tt.time, mapfn);

    return time.map((time) => (table[time][day] = classInfo));
  });

  createThead(result);
  createTbody(table, result);

  return (
    <table
      className="table table-compact w-full text-center"
      key={Math.random().toString(36)}
    >
      {result}
    </table>
  );
};

const mapfn = (arg) => Number(arg);

const createThead = (result) => {
  const data = [];

  days.map((day) => data.push(<th key={Math.random().toString(36)}>{day}</th>));

  result.push(
    <thead key={Math.random().toString(36)}>
      <tr>{data}</tr>
    </thead>
  );
};

const createTbody = (table, result) => {
  const row = [];

  for (let i = 1; i < table.length; i++) {
    const data = [];

    data.push(<th key={Math.random().toString(36)}>{i}</th>);
    for (let j = 1; j < table[i].length; j++) {
      table[i][j].credit !== null
        ? JSON.stringify(table[i - 1][j]) !== JSON.stringify(table[i][j]) &&
          data.push(
            <td
              rowSpan={table[i][j].credit}
              className={table[i][j].color}
              key={Math.random().toString(36)}
            ></td>
          )
        : data.push(<td key={Math.random().toString(36)}></td>);
    }

    row.push(<tr key={Math.random().toString(36)}>{data}</tr>);
  }

  result.push(<tbody key={Math.random().toString(36)}>{row}</tbody>);
};

export default convert;
