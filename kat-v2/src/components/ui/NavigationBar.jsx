import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";

import logo from "../../assets/logo_transparent.png";

const NavigationBar = (props) => {
  return (
    <div
      className="navbar fixed top-0 bg-base-100 px-8 z-20"
      style={{ borderBottom: "1px solid #eeeeee" }}
    >
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl gap-1" href="/KAT-V2">
          <img src={logo} alt="logo" style={{ height: "17px" }} />
          KAT
        </a>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-circle btn-ghost"
          onClick={props.onShowManual}
        >
          <BsFillInfoCircleFill className="h-6 w-6" viewBox="0 0 16 16" />
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
