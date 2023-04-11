import React from "react";

import { BsFillInfoCircleFill } from "react-icons/bs";

const NavigationBar = (props) => {
  return (
    <div
      className="navbar fixed top-0 bg-base-100 px-8 z-20"
      style={{ borderBottom: "1px solid #eeeeee" }}
    >
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/KAT-V2">
          KAT
        </a>
      </div>
      <div className="navbar-end gap-2">
        <button
          className="btn btn-circle btn-ghost"
          onClick={props.onShowManual}
        >
          <BsFillInfoCircleFill className="h-6 w-6" viewBox="0 0 16 16" />
        </button>
        <button className="btn btn-secondary" onClick={props.onGenerate}>
          시간표 생성
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;