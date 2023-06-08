import React, { useState } from "react";

import LectureForm from "./LectureForm";

const colors = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const NewLecture = (props) => {
  const [isEditing, setIsEditing] = useState(true);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveLectureDataHandler = (enteredLectureData) => {
    const lectureData = {
      id: `l${props.id}`,
      color: colors[Math.floor(Math.random() * colors.length)],
      ...enteredLectureData,
    };
    props.onAddLecture(lectureData);
    setIsEditing(false);
  };

  return (
    <>
      {!isEditing && (
        <button className="btn btn-primary w-80" onClick={startEditingHandler}>
          강좌 추가
        </button>
      )}
      {isEditing && (
        <LectureForm
          id={props.id}
          onSaveLectureData={saveLectureDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </>
  );
};

export default NewLecture;
