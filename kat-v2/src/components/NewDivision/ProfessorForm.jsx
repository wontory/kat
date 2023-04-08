import React from "react";

const ProfessorForm = (props) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">담당교수</span>
      </label>
      <input
        type="text"
        placeholder="나관상"
        value={props.enteredProfessor}
        className="input input-bordered w-full max-w-xs"
        onChange={props.onChangeProfessor}
      />
    </div>
  );
};

export default ProfessorForm;
