import React from "react";
import Link from "./Link";
import logo from "../assets/logo.png";
import { links } from "../types/types";
import { SelectedPage } from "../types/enums";
type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
  };
  

const Nav = ({page, selectedPage, setSelectedPage} : Props) => {
  return (
    <nav>
      <div className=" w-full py-6 flex items-center justify-between fixed top-0 z-30">
        <div className="flex items-center justify-between mx-auto w-5/6 ">
          <div className="flex items-center justify-between w-full gap-16">
            <img src={logo} alt="" />
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-8 ">
              {links.map((link) => (
  <Link
    key={link.page}
    page={link.page}

    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
  >
    {link.page}
  </Link>
))}

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
