import React from "react";

import Utterances from "./Utterances";

const Comments = () => {
  return (
    <div className="card w-full max-h-full bg-base-100 shadow-xl overflow-y-scroll scrollbar-hide lg:w-1/2">
      <div className="card-body">
        <h2 className="card-title">댓글</h2>
        <Utterances />
      </div>
    </div>
  );
};

export default Comments;
