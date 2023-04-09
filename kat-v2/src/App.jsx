import React, { useState } from "react";

import NavigationBar from "./components/UI/NavigationBar";
import LecturesList from "./components/Lectures/LecturesList";
import NewLecture from "./components/NewLecture/NewLecture";
import generate from "./lib/generate";

const App = () => {
  const [lectures, setLectures] = useState([]);

  const addLectureHandler = (lecture) => {
    setLectures((prevLectures) => [...prevLectures, lecture]);
  };

  const generateTimetableHandler = () => {
    console.log(generate(lectures, 0));
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
