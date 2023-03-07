import React from "react";
import { useAppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { SelectedPage } from "../types/enums";
import HText from "./HText";
import Class from "./Class";
import { classes } from "../types/classTypes";

type Props = {};

const OurClasses = (props: Props) => {
  const { setSelectedPage } = useAppContext();
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <HText>OUR CLASSES</HText>
            <p className="w-1/3 leading-7 py-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam, nam at ab totam distinctio asperiores. Repudiandae
              harum dolorum temporibus! Numquam?
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((cl) => (
              <Class key={cl.name} {...cl} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;

