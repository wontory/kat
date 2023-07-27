import React from "react";

import TimetableItem from "../components/Timetables/TimetableItem";

const Result = (props) => {
  return (
    <div
      className="flex flex-wrap justify-center items-start p-8 gap-8 overflow-x-scroll overflow-y-hidden z-10 sm:flex-nowrap sm:justify-normal"
      style={{ minHeight: "calc(100vh - 65px)" }}
    >
      {props.timetables.length === 0 ? (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>생성된 시간표가 없습니다.</span>
          </div>
        </div>
      ) : (
        <ul className="flex flex-wrap justify-center items-start gap-8 sm:flex-nowrap sm:justify-normal">
          {props.timetables.map((timetable) => (
            <TimetableItem
              key={timetable.id}
              id={timetable.id}
              item={timetable.lectures}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Result;
