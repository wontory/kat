import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/UI/NavigationBar";
import Main from "./pages/Main";
import Manual from "./pages/Manual";
import Result from "./pages/Result";

const App = () => {
  const [timetables, setTimetables] = useState([]);

  const setTimetablesHandler = (timetables) => {
    setTimetables(timetables);
  };

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={<Main onSetTimetables={setTimetablesHandler} />}
        />
        <Route path="/manual" element={<Manual />} />
        <Route path="/result" element={<Result timetables={timetables} />} />
      </Routes>
    </>
  );
};

export default App;
