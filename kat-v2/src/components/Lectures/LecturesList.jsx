import React from "react";

import LectureItem from "./LectureItem";

const LecturesList = (props) => {
  return (
    <ul>
      {props.items.map((lecture) => (
        <LectureItem
          key={lecture.id}
          id={lecture.id}
          name={lecture.name}
          credit={lecture.credit}
          divisions={lecture.divisions}
        />
      ))}
    </ul>
  );
};

export default LecturesList;
