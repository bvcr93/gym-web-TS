import React from "react";
import { useAppContext } from "../context/AppContext";
import ActionButton from "./ActionButton";
import HomePageText from "../assets/HomePageText.png";
import grafic from "../assets/graphic.png";
import redbull from "../assets/redbull.png";
import fortune from "../assets/fortune.png";
import forbes from "../assets/forbes.png";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../types/enums";

type Props = {};

const Home = (props: Props) => {
  const { selectedPage, setSelectedPage } = useAppContext();
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}

      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              exercitationem facere quibusdam ad quis cupiditate ipsam
              necessitatibus dolorum autem officiis?
            </p>
          </div>
          {/* actions */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* image */}
        <div>
          <img src={grafic} alt="" />
        </div>
      </div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div>
            <div>
                <div>
                    <img src={redbull} alt="" />
                    <img src={forbes} alt="" />
                    <img src={fortune} alt="" />
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Home;
