import Link from "./Link";
import logo from "../assets/logo.png";
import { links } from "../types/types";
import { SelectedPage } from "../types/enums";
import useMediaQuery from "../hooks/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import ActionButton from "./ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Nav = ({ selectedPage, setSelectedPage }: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [nav, setNav] = useState(false);
  
  return (
    <nav>
      <div className=" w-full py-6 flex items-center justify-between fixed top-0 z-30">
        <div className="flex items-center justify-between mx-auto w-5/6 ">
          <div className="flex items-center justify-between w-full gap-16">
            <img src={logo} alt="" />
            {isAboveMediumScreens ? (
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
                <div className="flex gap-8 items-center">
                  <div>Sign up</div>
                  <ActionButton setSelectedPage= {setSelectedPage}>Become a member</ActionButton>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setNav(!nav)}
                className="rounded-full bg-secondary-500 p-2"
              >
                <MenuIcon sx={{ color: "white" }} />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
