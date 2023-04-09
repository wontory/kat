import React, { useState } from "react";
import Swal from "sweetalert2";

import NavigationBar from "./components/UI/NavigationBar";
import LecturesList from "./components/Lectures/LecturesList";
import NewLecture from "./components/NewLecture/NewLecture";
import generate from "./lib/generate";

const App = () => {
  const [lectures, setLectures] = useState([]);
  const [timetables, setTimetables] = useState([]);

  const addLectureHandler = (lecture) => {
    setLectures((prevLectures) => [...prevLectures, lecture]);
  };

  // [for test] 테스트 코드입니다.
  const generateTimetableHandler = () => {
    setTimetables(generate(lectures, 0));

    let text = "";

    timetables.forEach((timetable) => {
      timetable.forEach(
        (lecture) =>
          (text += `${lecture.name}&nbsp;&nbsp;&nbsp;&nbsp;${lecture.day} ${lecture.time}&nbsp;&nbsp;&nbsp;&nbsp;${lecture.credit}&nbsp;&nbsp;&nbsp;&nbsp;${lecture.professor}<br>`)
      );
      text += "<br><br>";
    });

    Swal.fire({
      title: "시간표",
      html: text,
      confirmButtonText: "확인",
    });
  };

  return (
    <>
      <NavigationBar />
      <div
        className="flex p-8 gap-8 overflow-x-scroll overflow-y-hidden z-10 scrollbar-hide"
        style={{ height: "calc(100vh - 65px)" }}
      >
        {lectures.length !== 0 && <LecturesList items={lectures} />}
        <NewLecture
          id={lectures.length + 1}
          onAddLecture={addLectureHandler}
          onGenerate={generateTimetableHandler}
        />
      </div>
    </>
  );
};

export default App;
