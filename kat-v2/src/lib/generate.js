let timetables = [];
let timetableBuffer = [];

const generate = (lectures, depth) => {
  if (depth === lectures.length) {
    timetables.push([...timetableBuffer]);
    return;
  }

  if (depth === 0) {
    timetables = [];
    timetableBuffer = [];
  }

  for (const division of lectures[depth].divisions) {
    let isReserved = timetableBuffer.some((lecture) => {
      return (
        division.day === lecture.day &&
        (division.time.includes(lecture.time.charAt(0)) ||
          lecture.time.includes(division.time.charAt(0)))
      );
    });

    if (!isReserved) {
      timetableBuffer[depth] = {
        ...division,
        id: lectures[depth].id + division.id,
        name: lectures[depth].name,
        credit: lectures[depth].credit,
      };

      generate(lectures, depth + 1);
      timetableBuffer[depth] = {};
    }
  }

  return timetables;
};

export default generate;
