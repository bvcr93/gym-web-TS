import React from "react";
import logo from "../assets/logo.png";

type Props = {};

const Nav = (props: Props) => {
  return (
    <nav>
      <div className=" w-full py-6 flex items-center justify-between fixed top-0 z-30">
        <div className="flex items-center justify-between mx-auto w-5/6 ">
          <div className="flex items-center justify-between w-full gap-16">
            <img src={logo} alt="" />
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-8 ">
                <p>home</p>
                <p>benefits</p>
                <p>our classes</p>
                <p>contact us</p>
              </div>
              <div className="flex gap-8">
                <div>sign</div>
                <div>become a member</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
