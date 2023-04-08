import React from "react";

const ProfNameForm = (props) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">담당교수</span>
      </label>
      <input
        type="text"
        placeholder="나관상"
        value={props.enteredProfName}
        className="input input-bordered w-full max-w-xs"
        onChange={props.onChangeProfName}
      />
    </div>
  );
};

export default ProfNameForm;
