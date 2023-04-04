import React, { useState } from "react";

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
          prof_name: "윤익준",
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
          prof_name: "박차경",
        },
        {
          id: "d2",
          day: "화",
          time: "678",
          prof_name: "박차경",
        },
        {
          id: "d3",
          day: "금",
          time: "123",
          prof_name: "허난",
        },
        {
          id: "d4",
          day: "금",
          time: "678",
          prof_name: "허난",
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
          prof_name: "배상원",
        },
        {
          id: "d2",
          day: "화",
          time: "123",
          prof_name: "배상원",
        },
        {
          id: "d3",
          day: "수",
          time: "123",
          prof_name: "배상원",
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
          prof_name: "안진호",
        },
        {
          id: "d2",
          day: "수",
          time: "678",
          prof_name: "안진호",
        },
      ],
    },
  ];

  const [lectures, setLectures] = useState(DUMMY_LECTURES);

  const addLectureHandler = (lecture) => {
    setLectures((prevLectures) => [...prevLectures, lecture]);
  };

  return (
    <div>
      <LecturesList items={lectures} />
      <NewLecture id={lectures.length + 1} onAddLecture={addLectureHandler} />
    </div>
  );
};

export default App;
