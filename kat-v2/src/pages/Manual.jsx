import React from "react";
import Comments from "../components/Comments/Comments";

const Manual = () => {
  return (
    <div
      className="flex flex-wrap p-8 gap-8 z-10 scrollbar-hide lg:flex-nowrap"
      style={{ height: "calc(100vh - 65px)" }}
    >
      <div className="card w-full max-h-full bg-base-100 shadow-xl overflow-y-scroll scrollbar-hide lg:w-1/2">
        <div className="card-body">
          <h2 className="card-title">환영합니다!</h2>
          <div className="w-full max-w-xs">
            <ol>
              <li>ㅎㅇㅎㅇㅇㅎㅇㅇㅁㅈ</li>
              <li>ㅎㅇㅎㅇㅇㅎㅇㅇㅁㅈ</li>
              <li>ㅎㅇㅎㅇㅇㅎㅇㅇㅁㅈ</li>
              <li>ㅎㅇㅎㅇㅇㅎㅇㅇㅁㅈ</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="card w-full max-h-full bg-base-100 shadow-xl overflow-y-scroll scrollbar-hide lg:w-1/2">
        <div className="card-body">
          <h2 className="card-title">댓글</h2>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Manual;
