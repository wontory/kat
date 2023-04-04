import React from "react";

const App = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">강의 추가</h2>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">강의명</span>
          </label>
          <input
            type="text"
            placeholder="컴퓨터공학기초캡스톤디자인"
            className="input input-bordered w-full max-w-xs"
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
            value="2"
            className="range range-primary"
          />
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">완료</button>
        </div>
      </div>
    </div>
  );
};

export default App;
