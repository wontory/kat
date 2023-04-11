import React from "react";

const Manual = () => {
  return (
    <div
      className="flex p-8 gap-8 z-10 scrollbar-hide"
      style={{ height: "calc(100vh - 65px)" }}
    >
      <div className="card w-1/2 max-h-full bg-base-100 shadow-xl overflow-y-scroll scrollbar-hide">
        <div className="card-body">
          <h2 className="card-title">KAT 사용법</h2>
          <ol>
            <li>ㅎㅇ</li>
            <li>ㅎㅇ</li>
            <li>ㅎㅇ</li>
            <li>ㅎㅇ</li>
          </ol>
        </div>
      </div>
      <div className="card w-1/2 max-h-full bg-base-100 shadow-xl overflow-y-scroll scrollbar-hide">
        <div className="card-body"></div>
      </div>
    </div>
  );
};

export default Manual;
