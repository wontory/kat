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
    props.onStopEditing();
  };

  const startEditingHandler = () => {
    setIsEditing(true);
    props.onStartEditing();
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
    props.onStopEditing();
  };

  return (
    <>
      {!isEditing && (
        <button
          className="btn btn-primary w-full mt-4"
          onClick={startEditingHandler}
        >
          분반 추가
        </button>
      )}
      {isEditing && (
        <DivisionForm
          id={props.id}
          credit={props.credit}
          onSaveDivisionData={saveDivisionDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </>
  );
};

export default NewDivision;
