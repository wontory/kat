import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import LecturesList from "../components/Lectures/LecturesList";
import NewLecture from "../components/NewLecture/NewLecture";
import generate from "../lib/generate";

const Main = (props) => {
  const [lectures, setLectures] = useState([]);

  const addLectureHandler = (lecture) => {
    setLectures((prevLectures) => [...prevLectures, lecture]);
  };

  const generateTimetablesHandler = () => {
    let generatedTimetables;

    Swal.fire({
      title: "시간표 생성중",
      html: "잠시만 기다려주세요.",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        generatedTimetables = generate(lectures, 0);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer)
        props.onSetTimetables(generatedTimetables);
    });
  };

  return (
    <div className="flex flex-wrap justify-center items-start p-8 gap-8 overflow-x-scroll overflow-y-hidden z-10 scrollbar-hide sm:flex-nowrap sm:justify-normal">
      {lectures.length !== 0 && <LecturesList items={lectures} />}
      <NewLecture id={lectures.length + 1} onAddLecture={addLectureHandler} />
      {lectures.length !== 0 && (
        <Link
          to={"/result"}
          className="btn btn-secondary w-80"
          onClick={generateTimetablesHandler}
        >
          시간표 생성
        </Link>
      )}
    </div>
  );
};

export default Main;
