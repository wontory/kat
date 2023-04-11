import React, { useState } from "react";

import LectureForm from "./LectureForm";

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
