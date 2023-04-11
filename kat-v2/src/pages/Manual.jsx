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
          <div className="w-full">
            <h1>각종 문의 및 버그 제보는 ~~~ 또는 댓글로 편하게 해주세요 😊</h1>
            <h1>이슈 또는 PR도 환영입니다!</h1>
          </div>
          <div className="divider" />
          <h2 className="card-title">사용 방법</h2>
          <div>
            <ol>
              <li>1. </li>
              <li>2. </li>
              <li>3. </li>
              <li>4. </li>
              <li>5. </li>
              <li>6. </li>
              <li>7. </li>
            </ol>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Manual;
