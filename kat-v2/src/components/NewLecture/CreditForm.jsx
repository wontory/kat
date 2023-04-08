import React from "react";

const CreditForm = (props) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">학점</span>
      </label>
      <input
        type="range"
        min="1"
        max="3"
        step="1"
        value={props.enteredCredit}
        className="range range-primary"
        onChange={props.onChangeCredit}
        disabled={props.onEdit}
        required
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
  );
};

export default CreditForm;
