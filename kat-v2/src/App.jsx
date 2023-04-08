import React, { useState } from "react";

import NavigationBar from "./components/ui/NavigationBar";
import LecturesList from "./components/Lectures/LecturesList";
import NewLecture from "./components/NewLecture/NewLecture";

const App = () => {
  const DUMMY_LECTURES = [
    {
      id: "l1",
      name: "블록체인DApp설계",
      credit: 3,
      divisions: [
        {
          id: "d1",
          day: "월",
          time: "123",
          professor: "윤익준",
        },
      ],
    },
    {
      id: "l2",
      name: "기초선형대수학",
      credit: 3,
      divisions: [
        {
          id: "d1",
          day: "화",
          time: "123",
          professor: "박차경",
        },
        {
          id: "d2",
          day: "화",
          time: "678",
          professor: "박차경",
        },
        {
          id: "d3",
          day: "금",
          time: "123",
          professor: "허난",
        },
        {
          id: "d4",
          day: "금",
          time: "678",
          professor: "허난",
        },
      ],
    },
    {
      id: "l3",
      name: "알고리듬",
      credit: 3,
      divisions: [
        {
          id: "d1",
          day: "월",
          time: "678",
          professor: "배상원",
        },
        {
          id: "d2",
          day: "화",
          time: "123",
          professor: "배상원",
        },
        {
          id: "d3",
          day: "수",
          time: "123",
          professor: "배상원",
        },
      ],
    },
    {
      id: "l4",
      name: "컴퓨터구조",
      credit: 3,
      divisions: [
        {
          id: "d1",
          day: "화",
          time: "123",
          professor: "안진호",
        },
        {
          id: "d2",
          day: "수",
          time: "678",
          professor: "안진호",
        },
      ],
    },
  ];

  const [lectures, setLectures] = useState(DUMMY_LECTURES);

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
