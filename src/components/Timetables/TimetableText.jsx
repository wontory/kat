import React from "react";

const TimetableText = (props) => {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <table className="table table-compact w-full text-center">
        <tbody>
          <tr>
            <th></th>
            <th>과목명</th>
            <th>교시</th>
            <th>학점</th>
            <th>담당교수</th>
          </tr>
          {props.item.map((lecture, index) => (
            <tr key={lecture.id}>
              <th>
                <div className={lecture.color}>&nbsp;&nbsp;</div>
              </th>
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
  );
};

export default TimetableText;
