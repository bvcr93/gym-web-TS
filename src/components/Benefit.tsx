import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useAppContext } from "../context/AppContext";
import { SelectedPage } from "../types/enums";

type Props = {
 
  title: string;
  desc: string;
  icon: JSX.Element
  
};

const Benefit = ({ desc, title,icon }: Props) => {
  const { setSelectedPage } = useAppContext();
  return (
    <div className="mt-5-rounded-md border-2 border-gray-100 px-5 py-16 text-center ">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">

      {icon}
        </div>

      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="py-3">{desc}</p>
      <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
    </div>
  );
};

export default Benefit;
