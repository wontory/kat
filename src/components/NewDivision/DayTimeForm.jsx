import React from "react";

const DayTimeForm = (props) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">교시</span>
      </label>
      <div className="input-group">
        <select
          className="select select-bordered"
          value={props.enteredDay}
          onChange={props.onChangeDay}
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
          value={props.enteredTime}
          className="input input-bordered w-full max-w-xs"
          onChange={props.onChangeTime}
        />
      </div>
    </div>
  );
};

export default DayTimeForm;
