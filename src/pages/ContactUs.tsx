import { useForm } from "react-hook-form";
import { useAppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import contactImg from "../assets/ContactUsPageGraphic.png";
import { SelectedPage } from "../types/enums";
import HText from "../components/HText";
type Props = {};

const ContactUs = (props: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const { setSelectedPage } = useAppContext();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
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
            <span className="text-primary-500">JOIN NOW {""}</span>TO GET IN SHAPE
          </HText>
          <p className="my-5">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
            facilis!
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/darelbavcar1@gmail.com"
            >
              <input
                type="text"
                className="w-full mt-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="name..."
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "this field is required"}
                </p>
              )}
              <input
                type="text"
                className="w-full mt-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="email..."
                {...register("email", { required: true, maxLength: 100 })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "this field is required"}
                </p>
              )}
              <textarea
                rows={4}
                cols= {50}
                className="w-full mt-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="message..."
                {...register("name", { required: true, maxLength: 1000 })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "this field is required"}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full mb-16"
                alt="contact-us-page-graphic"
                src={contactImg}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
