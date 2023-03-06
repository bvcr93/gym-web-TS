import Link from "./Link";
import logo from "../assets/logo.png";
import { links } from "../types/types";
import useMediaQuery from "../hooks/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import ActionButton from "./ActionButton";
import { useAppContext } from "../context/AppContext";
import CloseIcon from '@mui/icons-material/Close';



const Nav = () => {
  const {selectedPage, setSelectedPage, isTopOfPage} = useAppContext()

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [nav, setNav] = useState(false);
  const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
  return (
    <nav>
      <div className={` ${navBackground} w-full py-6 flex items-center justify-between fixed top-0 z-30`}>
        <div className={` flex items-center justify-between mx-auto w-5/6 `}>
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
      {/* MOBILE MENU MODAL */} 
      {!isAboveMediumScreens && nav && (
        <div className="fixed  right-0 bottom-0 z-40 h-full  w-[300px] bg-primary-100 drop-shadow-xl">
        
            <div className="flex justify-end px-12 py-8 " onClick={() => setNav(!nav)}>
            <CloseIcon sx= {{fontSize:"25px"}} className= "cursor-pointer"/>

            </div>
            <div className="flex flex-col ml-[33%] space-y-8 text-xl  ">
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
        </div>
      )}
    </nav>
  );
};

export default Nav;
