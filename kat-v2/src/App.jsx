import React, { useState, useEffect } from "react";
import axios from "axios";

import NavigationBar from "./components/ui/NavigationBar";
import LecturesList from "./components/Lectures/LecturesList";
import NewLecture from "./components/NewLecture/NewLecture";

const App = () => {
  const [lectures, setLectures] = useState([]);

  const callApi = async () => {
    axios.get("/api").then((res) => {
      setLectures(res.data);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  const addLectureHandler = (lecture) => {
    setLectures((prevLectures) => [...prevLectures, lecture]);
    console.log(lectures);
  };

  return (
    <>
      <NavigationBar />
      <div
        className="flex p-8 gap-8 overflow-x-scroll overflow-y-hidden z-10 scrollbar-hide"
        style={{ height: "calc(100vh - 65px)" }}
      >
        <LecturesList items={lectures} />
        <NewLecture id={lectures.length + 1} onAddLecture={addLectureHandler} />
      </div>
    </>
  );
};

export default App;
