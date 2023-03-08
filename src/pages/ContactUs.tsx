import { useForm } from "react-hook-form";
import { useAppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import contactImg from "../assets/ContactUsPageGraphic.png";
import { SelectedPage } from "../types/enums";
import HText from "../components/HText";
type Props = {};

const ContactUs = (props: Props) => {
  const { setSelectedPage } = useAppContext();

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 scroll-pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span>TO GET IN SHAPE
          </HText>
          <p className="my-5">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
            facilis!
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
      </motion.div>
    </section>
  );
};

export default ContactUs;
