const timetables = [];
const timetableBuffer = [];

const generate = (lectures, depth) => {
  if (depth === lectures.length)
    return timetables.push({
      id: `t${timetables.length + 1}`,
      lectures: [...timetableBuffer],
    });

  if (depth === 0) timetables.length = 0;

  for (const division of lectures[depth].divisions) {
    const isReserved = timetableBuffer.some(
      (lecture) =>
        division.day === lecture.day &&
        (division.time.includes(lecture.time.charAt(0)) ||
          lecture.time.includes(division.time.charAt(0)))
    );

    if (!isReserved) {
      timetableBuffer[depth] = {
        ...division,
        id: `${lectures[depth].id}${division.id}`,
        name: lectures[depth].name,
        credit: lectures[depth].credit,
      };

      generate(lectures, depth + 1);

      timetableBuffer.pop();
    }
  }

  return timetables;
};

export default generate;
