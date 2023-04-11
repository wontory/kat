import React, { useState } from "react";
import Swal from "sweetalert2";

import NavigationBar from "./components/UI/NavigationBar";
import LecturesList from "./components/Lectures/LecturesList";
import NewLecture from "./components/NewLecture/NewLecture";
import generate from "./lib/generate";

const App = () => {
  const [lectures, setLectures] = useState([]);
  const [timetables, setTimetables] = useState([]);

  const showManualHandler = () => {
    Swal.fire({
      title: "KAT 사용법",
      width: "100%",
      html: `<p>1. <a href="https://kutis.kyonggi.ac.kr/webkutis/view/indexWeb.jsp" target="_blank">KUTIS</a> 또는 <a href="http://sugang.kyonggi.ac.kr/" target="_blank">경기대학교 수강신청 시스템</a>에서 개설된 강좌를 확인합니다.</p>
      <p>2. 과목을 추가하고 수강할 과목의 정보를 입력합니다.</p>
      <p>3. 시간표 생성에 고려할 분반의 정보를 입력합니다.</p>
      <p style="font-size: 13px">* 분반: 같은 과목명을 갖고 있으나 교수나 요일, 시간 정보가 다른 강좌</p>
      <p>4. 과목 입력이 모두 끝나면 시간표 생성을 눌러 가능한 시간표 조합을 확인합니다.</p>`,
      showCloseButton: true,
      confirmButtonText: "닫기",
    });
  };

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
    <>
      <NavigationBar
        onShowManual={showManualHandler}
        onGenerate={generateTimetableHandler}
      />
      <div
        className="flex p-8 gap-8 overflow-x-scroll overflow-y-hidden z-10 scrollbar-hide"
        style={{ height: "calc(100vh - 65px)" }}
      >
        {lectures.length !== 0 && <LecturesList items={lectures} />}
        <NewLecture id={lectures.length + 1} onAddLecture={addLectureHandler} />
      </div>
    </>
  );
};

export default App;
