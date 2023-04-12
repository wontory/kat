import React, { useState } from "react";

import TitleForm from "./TitleForm";
import CreditForm from "./CreditForm";
import NewDivision from "../NewDivision/NewDivision";
import DivisionsList from "../Divisions/DivisionsList";
import ButtonForm from "./ButtonForm";

const LectureForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredCredit, setEnteredCredit] = useState(2);
  const [divisions, setDivisions] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const changeCreditHandler = (event) => {
    setEnteredCredit(event.target.value);
  };

  const addDivisionHandler = (division) => {
    setDivisions((prevDivisions) => [...prevDivisions, division]);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const lectureData = {
      name: enteredName,
      credit: +enteredCredit,
      divisions: divisions,
    };

    props.onSaveLectureData(lectureData);
    setEnteredName("");
    setEnteredCredit(2);
    setDivisions([]);
    setIsEditing(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="card w-80 max-h-full bg-base-100 shadow-xl">
        <div className="card-body">
          <div
            className="overflow-y-scroll scrollbar-hide"
            style={{ maxHeight: "calc(100vh - 192px)" }}
          >
            <h2 className="card-title">강좌 {props.id}</h2>
            <TitleForm
              enteredName={enteredName}
              onChangeName={changeNameHandler}
              onEdit={isEditing}
            />
            <CreditForm
              enteredCredit={enteredCredit}
              onChangeCredit={changeCreditHandler}
              onEdit={isEditing}
            />
            {divisions.length !== 0 && <DivisionsList items={divisions} />}
            <NewDivision
              id={divisions.length + 1}
              onAddDivision={addDivisionHandler}
              onStartEditing={startEditingHandler}
              onStopEditing={stopEditingHandler}
            />
            <ButtonForm onEdit={isEditing} onCancel={props.onCancel} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default LectureForm;
