import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../types/enums";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  children: ReactNode
};

const Link = ({children, page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)} //when clicking on sidebar the view will scroll to selected page
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} 
 transition duration-500 hover:text-primary-300`}
    >
     {children}
    </AnchorLink>
  );
};

export default Link;
