import React from "react";

const Result = (props) => {
  return (
    <div className="flex flex-wrap items-start p-8 gap-8 z-10 scrollbar-hide lg:flex-nowrap">
      {JSON.stringify(props.timetables)}
    </div>
  );
};

export default Result;
