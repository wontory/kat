import React, { useState } from "react";

import NavigationBar from "./components/UI/NavigationBar";
import Main from "./pages/Main";
import Manual from "./pages/Manual";
import Result from "./pages/Result";

const App = () => {
  const [page, setPage] = useState("main");
  const [timetables, setTimetables] = useState([]);

  const showMainHandler = () => {
    setPage("main");
  };

  const showManualHandler = () => {
    setPage("manual");
  };

  const showResultHandler = (timetables) => {
    setTimetables(timetables);
    setPage("result");
  };

  return (
    <>
      <NavigationBar
        onShowMain={showMainHandler}
        onShowManual={showManualHandler}
      />
      {page === "main" && <Main onShowResult={showResultHandler} />}
      {page === "manual" && <Manual />}
      {page === "result" && <Result timetables={timetables} />}
    </>
  );
};

export default App;
