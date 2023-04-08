import React, { useState } from "react";

import NewDivision from "../NewDivision/NewDivision";
import DivisionsList from "../Divisions/DivisionsList";

const LectureForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredCredit, setEnteredCredit] = useState(2);
  const [divisions, setDivisions] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const creditChangeHandler = (event) => {
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
    setEnteredCredit("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="card w-80 max-h-full bg-base-100 shadow-xl overflow-y-scroll scrollbar-hide">
        <div className="card-body">
          <h2 className="card-title">강좌 {props.id}</h2>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">과목명</span>
            </label>
            <input
              type="text"
              placeholder="컴퓨터공학기초캡스톤디자인"
              value={enteredName}
              className="input input-bordered w-full max-w-xs"
              onChange={nameChangeHandler}
              disabled={isEditing}
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">학점</span>
            </label>
            <input
              type="range"
              min="1"
              max="3"
              step="1"
              value={enteredCredit}
              className="range range-primary"
              onChange={creditChangeHandler}
              disabled={isEditing}
              required
            />
            <div className="w-full flex justify-between text-xs px-2">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
          {divisions.length !== 0 && <DivisionsList items={divisions} />}
          <NewDivision
            id={divisions.length + 1}
            onAddDivision={addDivisionHandler}
            onStartEditing={startEditingHandler}
            onStopEditing={stopEditingHandler}
          />
          <div className="card-actions mt-4 justify-between">
            <button
              type="submit"
              className="btn btn-success"
              disabled={isEditing}
            >
              완료
            </button>
            <button
              type="button"
              className="btn btn-error"
              onClick={props.onCancel}
              disabled={isEditing}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LectureForm;
