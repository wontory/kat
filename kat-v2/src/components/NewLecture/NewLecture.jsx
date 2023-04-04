import React, { useState } from "react";

import LectureForm from "./LectureForm";

const NewLecture = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveLectureDataHandler = (enteredLectureData) => {
    const lectureData = {
      id: `l${props.id}`,
      ...enteredLectureData,
    };
    props.onAddLecture(lectureData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing && (
        <button className="btn btn-primary" onClick={startEditingHandler}>
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
    </div>
  );
};

export default NewLecture;
