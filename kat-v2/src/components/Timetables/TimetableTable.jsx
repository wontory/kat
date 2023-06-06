import React from "react";

import convert from "../../lib/convert";

const TimetableTable = (props) => {
  return (
    <div className="overflow-x-scroll scrollbar-hide">
      {convert(props.item)}
    </div>
  );
};

export default TimetableTable;
