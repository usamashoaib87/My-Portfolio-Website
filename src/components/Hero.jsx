import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const slideInFromLeft = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const textLineVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 90,
      },
    },
  };
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="w-5 h-5 rounded-full bg-[#915EFF]"
          />
          <motion.div
            variants={{
              hidden: { scaleY: 0, opacity: 0 },
              visible: { scaleY: 1, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-1 sm:h-80 h-40 violet-gradient origin-top"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="overflow-hidden"
        >
          <motion.h1
            variants={slideInFromLeft}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm{" "}
            <motion.span variants={slideInFromLeft} className="text-[#915EFF]">
              M Usama
            </motion.span>
          </motion.h1>

          <motion.div
            variants={containerVariants}
            className={`${styles.heroSubText} text-white-100`}
          >
            <motion.div variants={textLineVariants} className="inline-block">
              I Develop User Interfaces,{" "}
            </motion.div>
            <br className="sm:block hidden" />
            <motion.div variants={textLineVariants} className="inline-block">
              Websites and Webapps{" "}
            </motion.div>
            <br className="sm:block hidden" />
            <motion.div variants={textLineVariants} className="inline-block">
              Using ReactJS
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
