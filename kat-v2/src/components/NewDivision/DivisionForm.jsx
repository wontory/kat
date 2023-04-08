import React, { useState } from "react";
import { BsX } from "react-icons/bs";

import DayTimeForm from "./DayTimeForm";
import ProfNameForm from "./ProfNameForm";

const DivisionForm = (props) => {
  const [enteredDay, setEnteredDay] = useState("요일");
  const [enteredTime, setEnteredTime] = useState("");
  const [enteredProfName, setEnteredProfName] = useState("");

  const dayChangeHandler = (event) => {
    setEnteredDay(event.target.value);
  };

  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const profNameChangeHandler = (event) => {
    setEnteredProfName(event.target.value);
  };

  const submitHandler = () => {
    const divisionData = {
      day: enteredDay,
      time: enteredTime,
      profName: enteredProfName,
    };

    props.onSaveDivisionData(divisionData);
    setEnteredDay("");
    setEnteredTime("");
    setEnteredProfName("");
  };

  return (
    <>
      <div className="divider" />
      <h2 className="card-title justify-between">
        분반 {props.id}
        <button type="button">
          <BsX onClick={props.onCancel} />
        </button>
      </h2>
      <DayTimeForm
        enteredDay={enteredDay}
        enteredTime={enteredTime}
        onChangeDay={dayChangeHandler}
        onChangeTime={timeChangeHandler}
      />
      <ProfNameForm
        enteredProfName={enteredProfName}
        onChangeProfName={profNameChangeHandler}
      />
      <div className="card-actions mt-4 justify-between">
        <button
          type="button"
          className="btn btn-success w-full"
          onClick={submitHandler}
        >
          완료
        </button>
      </div>
    </>
  );
};

export default DivisionForm;
