import React, { useState } from "react";
import Swal from "sweetalert2";

import LecturesList from "../components/Lectures/LecturesList";
import NewLecture from "../components/NewLecture/NewLecture";
import generate from "../lib/generate";

const Main = () => {
  const [lectures, setLectures] = useState([]);
  const [timetables, setTimetables] = useState([]);

  const addLectureHandler = (lecture) => {
    setLectures((prevLectures) => [...prevLectures, lecture]);
  };

  // [for test] 테스트 코드입니다.
  const generateTimetableHandler = () => {
    setTimetables(generate(lectures, 0));

    let html = "";

    timetables.forEach((timetable) => {
      timetable.forEach(
        (lecture) =>
          (html += `${lecture.name}&nbsp;&nbsp;&nbsp;&nbsp;${lecture.day} ${lecture.time}&nbsp;&nbsp;&nbsp;&nbsp;${lecture.credit}&nbsp;&nbsp;&nbsp;&nbsp;${lecture.professor}<br>`)
      );
      html += "<br><br>";
    });

    Swal.fire({
      title: "시간표",
      html: html,
      confirmButtonText: "확인",
    });
  };

  return (
    <div
      className="flex p-8 gap-8 overflow-x-scroll overflow-y-hidden z-10 scrollbar-hide"
      style={{ height: "calc(100vh - 65px)" }}
    >
      {lectures.length !== 0 && <LecturesList items={lectures} />}
      <NewLecture id={lectures.length + 1} onAddLecture={addLectureHandler} />
      {lectures.length !== 0 && (
        <button
          className="btn btn-secondary"
          onClick={generateTimetableHandler}
        >
          시간표 생성
        </button>
      )}
    </div>
  );
};

export default Main;
