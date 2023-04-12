import React from "react";

import LectureItem from "./LectureItem";

const LecturesList = (props) => {
  return (
    <ul className="flex flex-wrap justify-center items-start gap-8 lg:flex-nowrap lg:justify-normal">
      {props.items.map((lecture, index) => (
        <LectureItem
          key={lecture.id}
          id={index + 1}
          name={lecture.name}
          credit={lecture.credit}
          divisions={lecture.divisions}
        />
      ))}
    </ul>
  );
};

export default LecturesList;
