import React, { useState } from "react";

import LecturesList from "../components/Lectures/LecturesList";
import NewLecture from "../components/NewLecture/NewLecture";
import generate from "../lib/generate";

const Main = (props) => {
  const [lectures, setLectures] = useState([]);

  const addLectureHandler = (lecture) => {
    setLectures((prevLectures) => [...prevLectures, lecture]);
  };

  const generateTimetablesHandler = () => {
    const generatedTimetables = generate(lectures, 0);
    props.onShowResult(generatedTimetables);
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
          onClick={generateTimetablesHandler}
        >
          시간표 생성
        </button>
      )}
    </div>
  );
};

export default Main;
