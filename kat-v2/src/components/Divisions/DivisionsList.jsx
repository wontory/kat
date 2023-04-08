import React from "react";

import DivisionItem from "./DivisionItem";

const DivisionsList = (props) => {
  return (
    <ul>
      {props.items.map((division) => (
        <DivisionItem
          key={division.id}
          id={division.id}
          day={division.day}
          time={division.time}
          professor={division.professor}
        />
      ))}
    </ul>
  );
};

export default DivisionsList;
