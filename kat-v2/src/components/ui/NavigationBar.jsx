import React from "react";

import { BsFillInfoCircleFill } from "react-icons/bs";

const NavigationBar = () => {
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
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <BsFillInfoCircleFill className="h-6 w-6" viewBox="0 0 16 16" />
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
