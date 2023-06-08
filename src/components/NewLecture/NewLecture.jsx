import React, { useState } from "react";

import LectureForm from "./LectureForm";

const colors = [
  "bg-slate-500",
  "bg-gray-500",
  "bg-zinc-500",
  "bg-neutral-500",
  "bg-stone-500",
  "bg-red-500",
  "bg-orange-500",
  "bg-amber-500",
  "bg-yellow-500",
  "bg-lime-500",
  "bg-green-500",
  "bg-emerald-500",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-sky-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-violet-500",
  "bg-purple-500",
  "bg-fuchsia-500",
  "bg-pink-500",
  "bg-rose-500",
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
