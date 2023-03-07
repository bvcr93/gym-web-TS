import { useAppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { SelectedPage } from "../types/enums";
import HText from "./HText";
import Benefit from "./Benefit";

import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid"

 interface BenefitType {
    icon: JSX.Element;
    title: string;
    desc: string;
  }

const Benefits = () => {
    const benefits: Array<BenefitType> = [
        {
          icon: <HomeModernIcon className="h-6 w-6" />,
          title: "State of the Art Facilities",
          desc:
            "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
        },
        {
          icon: <UserGroupIcon className="h-6 w-6" />,
          title: "100's of Diverse Classes",
          desc:
            "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
        },
        {
          icon: <AcademicCapIcon className="h-6 w-6" />,
          title: "Expert and Pro Trainers",
          desc:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
        },
      ];
  const { setSelectedPage } = useAppContext();
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div // highlighting the links on which page we are
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="">
          <div className="md:my-5 md:w-3/5">
            <HText>MORE THAN JUST A GYM</HText>
            <p className="my-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              optio? Assumenda quod nemo voluptatum illum quas? Nemo maxime
              minima velit?
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:flex items-center justify-between mt-5">
 {benefits.map((be:BenefitType) => (
   <Benefit  {...be} icon = {be.icon}/>
 ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
