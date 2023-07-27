import React, { useState } from "react";

import LectureForm from "./LectureForm";

const colors = [
  "bg-red-500",
  "bg-cyan-500",
  "bg-violet-500",
  "bg-rose-500",
  "bg-emerald-500",
  "bg-yellow-500",
  "bg-slate-500",
  "bg-green-200",
  "bg-indigo-900",
  "bg-stone-400",
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
      color: colors[props.id],
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
