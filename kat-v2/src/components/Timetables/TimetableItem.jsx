import React from "react";

import TimetableTable from "./TimetableTable";
import TimetableText from "./TimetableText";

const TimetableItem = (props) => {
  return (
    <div className="card w-80 max-h-full bg-base-100 shadow-xl overflow-y-scroll scrollbar-hide sm:w-full">
      <div className="card-body">
        <h2 className="card-title">시간표 {props.id.substring(1)}</h2>
        <div
          className="card-body p-0"
          style={{ maxHeight: "calc(100vh - 228px)" }}
        >
          <TimetableTable item={props.item} />
          <TimetableText item={props.item} />
        </div>
      </div>
    </div>
  );
};

export default TimetableItem;
