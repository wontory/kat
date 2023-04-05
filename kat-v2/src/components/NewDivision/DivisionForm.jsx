import React, { useState } from "react";

const DivisionForm = (props) => {
  const [enteredDay, setEnteredDay] = useState("");
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

  const submitHandler = (event) => {
    event.preventDefault();

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
    <div>
      <div className="divider" />
      <h2 className="card-title">분반 {props.id}</h2>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">교시</span>
        </label>
        <div className="input-group">
          <select
            className="select select-bordered"
            defaultValue="요일"
            onChange={dayChangeHandler}
          >
            <option disabled>요일</option>
            <option>월</option>
            <option>화</option>
            <option>수</option>
            <option>목</option>
            <option>금</option>
          </select>
          <input
            type="text"
            placeholder="123"
            className="input input-bordered w-full max-w-xs"
            onChange={timeChangeHandler}
          />
        </div>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">담당교수</span>
        </label>
        <input
          type="text"
          placeholder="나관상"
          className="input input-bordered w-full max-w-xs"
          onChange={profNameChangeHandler}
        />
      </div>
      <div className="card-actions mt-4 justify-between">
        <button
          type="button"
          className="btn btn-success"
          onClick={submitHandler}
        >
          완료
        </button>
        <button
          type="button"
          className="btn btn-error"
          onClick={props.onCancel}
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default DivisionForm;
