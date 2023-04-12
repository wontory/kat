import React from "react";

import DivisionItem from "./DivisionItem";

const DivisionsList = (props) => {
  return (
    <ul>
      {props.items.map((division, index) => (
        <DivisionItem
          key={division.id}
          id={index + 1}
          day={division.day}
          time={division.time}
          professor={division.professor}
        />
      ))}
    </ul>
  );
};

export default DivisionsList;
