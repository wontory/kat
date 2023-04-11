import React, { useState } from "react";

import NavigationBar from "./components/UI/NavigationBar";
import Main from "./pages/Main";
import Manual from "./pages/Manual";

const App = () => {
  const [page, setPage] = useState("main");

  const showMainHandler = () => {
    setPage("main");
  };

  const showManualHandler = () => {
    setPage("manual");
  };

  return (
    <>
      <NavigationBar
        onShowMain={showMainHandler}
        onShowManual={showManualHandler}
      />
      {page === "main" && <Main />}
      {page === "manual" && <Manual />}
    </>
  );
};

export default App;
