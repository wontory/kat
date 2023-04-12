import React from "react";

const TimetableItem = (props) => {
  return (
    <div className="card w-80 max-h-full bg-base-100 shadow-xl overflow-y-scroll scrollbar-hide">
      <div className="card-body">
        <h2 className="card-title">시간표 {props.id.substring(1)}</h2>
        <table className="table table-compact w-full max-w-xs">
          <thead>
            <tr>
              <th></th>
              <th>과목명</th>
              <th>교시</th>
              <th>학점</th>
              <th>담댱교수</th>
            </tr>
          </thead>
          <tbody>
            {props.item.map((lecture, index) => (
              <tr key={lecture.id}>
                <th>{index + 1}</th>
                <td>{lecture.name}</td>
                <td>
                  {lecture.day} {lecture.time}
                </td>
                <td>{lecture.credit}</td>
                <td>{lecture.professor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimetableItem;
