let timetables = [];
let timetableBuffer = [];

const generate = (lectures, depth) => {
  if (depth === lectures.length) {
    timetables.push([...timetableBuffer]);
    return;
  }

  for (let i = 0; i < lectures[depth].divisions.length; i++) {
    let isReserved = false;
    for (let j = 0; j < depth; j++) {
      if (
        (lectures[depth].divisions[i].time.includes(
          timetableBuffer[j].time.charAt(0)
        ) ||
          timetableBuffer[j].time.includes(
            lectures[depth].divisions[i].time.charAt(0)
          )) &&
        lectures[depth].divisions[i].day === timetableBuffer[j].day
      ) {
        isReserved = true;
        break;
      }
    }

    if (!isReserved) {
      timetableBuffer[depth] = {
        ...lectures[depth].divisions[i],
        id: lectures[depth].id + lectures[depth].divisions[i].id,
        name: lectures[depth].name,
        credit: lectures[depth].credit,
      };
      generate(lectures, depth + 1);
    }
  }

  return timetables;
};

export default generate;
