import React, { useState } from "react";

import DivisionForm from "./DivisionForm";

const NewDivision = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveDivisionDataHandler = (enteredDivisionData) => {
    const divisionData = {
      id: `d${props.id}`,
      ...enteredDivisionData,
    };
    props.onAddDivision(divisionData);
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
        <button
          className="btn btn-primary w-full"
          onClick={startEditingHandler}
        >
          분반 추가
        </button>
      )}
      {isEditing && (
        <DivisionForm
          id={props.id}
          onSaveDivisionData={saveDivisionDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewDivision;
