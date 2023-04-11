import React from "react";
import Giscus from "@giscus/react";

const Comments = () => {
  return (
    <div className="card w-full max-h-full bg-base-100 shadow-xl overflow-y-scroll scrollbar-hide lg:w-1/2">
      <div className="card-body">
        <h2 className="card-title">댓글</h2>
        <div
          className="overflow-y-scroll scrollbar-hide"
          style={{ maxHeight: "calc(100vh - 229px)" }}
        >
          <Giscus
            id="comments"
            repo="wontory/KAT-V2"
            repoId="R_kgDOJRJYHw"
            category="Announcements"
            categoryId="DIC_kwDOJRJYH84CVr6x"
            mapping="pathname"
            term="Welcome to KAT!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="light"
            lang="ko"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
