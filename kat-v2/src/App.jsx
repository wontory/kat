import React, { useState } from "react";

import LecturesList from "./components/Lectures/LecturesList";
import NewLecture from "./components/NewLecture/NewLecture";
import NavigationBar from "./components/ui/NavigationBar";

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
          profName: "윤익준",
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
          profName: "박차경",
        },
        {
          id: "d2",
          day: "화",
          time: "678",
          profName: "박차경",
        },
        {
          id: "d3",
          day: "금",
          time: "123",
          profName: "허난",
        },
        {
          id: "d4",
          day: "금",
          time: "678",
          profName: "허난",
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
          profName: "배상원",
        },
        {
          id: "d2",
          day: "화",
          time: "123",
          profName: "배상원",
        },
        {
          id: "d3",
          day: "수",
          time: "123",
          profName: "배상원",
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
          profName: "안진호",
        },
        {
          id: "d2",
          day: "수",
          time: "678",
          profName: "안진호",
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
    <div>
      <NavigationBar />
      <div className="flex gap-8 m-8 overflow-x-scroll">
        <LecturesList items={lectures} />
        <NewLecture id={lectures.length + 1} onAddLecture={addLectureHandler} />
      </div>
    </div>
  );
};

export default App;
