import React from "react";

const TitleForm = (props) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">과목명</span>
      </label>
      <input
        type="text"
        placeholder="컴퓨터공학기초캡스톤디자인"
        value={props.enteredName}
        className="input input-bordered w-full max-w-xs"
        onChange={props.onChangeName}
        disabled={props.onEdit}
        required
      />
    </div>
  );
};

export default TitleForm;
