import React from "react";

import DivisionsList from "../Divisions/DivisionsList";

const LectureItem = (props) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">강좌 {props.id.substring(1)}</h2>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">과목명</span>
          </label>
          <input
            type="text"
            value={props.name}
            className="input input-bordered w-full max-w-xs"
            disabled
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
            value={props.credit}
            className="range range-primary"
            disabled
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
        </div>
        {props.divisions.length === 0 && (
          <div>
            <div className="divider" />
            <h2>분반 정보가 없습니다.</h2>
          </div>
        )}
        {props.divisions.length !== 0 && (
          <DivisionsList items={props.divisions} />
        )}
      </div>
    </div>
  );
};

export default LectureItem;
