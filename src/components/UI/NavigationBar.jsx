import React from "react";
import { Link } from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs";

import logo from "../../assets/images/logo_transparent.png";

const NavigationBar = (props) => {
  return (
    <div
      className="navbar fixed top-0 bg-base-100 px-8 z-20"
      style={{ borderBottom: "1px solid #eeeeee" }}
    >
      <div className="flex-1">
        <Link
          to={"/"}
          className="btn btn-ghost normal-case text-xl gap-1"
          href="/"
        >
          <img src={logo} alt="logo" style={{ height: "17px" }} />
          KAT
        </Link>
      </div>
      <div className="flex-none">
        <Link
          to={"/manual"}
          className="btn btn-circle btn-ghost"
          onClick={props.onShowManual}
        >
          <BsFillInfoCircleFill className="h-6 w-6" viewBox="0 0 16 16" />
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
