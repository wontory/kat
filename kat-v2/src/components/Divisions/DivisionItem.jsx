import React from "react";

const DivisionItem = (props) => {
  return (
    <div>
      <div className="divider" />
      <h2 className="card-title">분반 {props.id.substring(1)}</h2>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">교시</span>
        </label>
        <div className="input-group">
          <select className="select select-bordered" value={props.day} disabled>
            <option>월</option>
            <option>화</option>
            <option>수</option>
            <option>목</option>
            <option>금</option>
          </select>
          <input
            type="text"
            value={props.time}
            className="input input-bordered w-full max-w-xs"
            disabled
          />
        </div>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">담당교수</span>
        </label>
        <input
          type="text"
          value={props.profName}
          className="input input-bordered w-full max-w-xs"
          disabled
        />
      </div>
    </div>
  );
};

export default DivisionItem;
