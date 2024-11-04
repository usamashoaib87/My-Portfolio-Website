import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    perspective={500}
  >
    <motion.div
      variants={{
        hidden: { 
          y: 50,
          opacity: 0,
        },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            type: "tween",
            ease: "circOut",
            duration: 0.5,
            delay: index * 0.2,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <motion.div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        whileHover={{ 
          scale: 1.05,
          transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.3
          }
        }}
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </motion.div>
    </motion.div>
  </Tilt>
);

const SkillSection = ({ title, description, index }) => (
  <motion.div
    variants={{
      hidden: { x: -50, opacity: 0 },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: index * 0.2,
        },
      },
    }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="flex gap-4 items-start"
  >
    <motion.div
      whileHover={{ scale: 1.2, rotate: 180 }}
      transition={{ duration: 0.3 }}
      className="w-2 h-2 rounded-full bg-secondary mt-4"
    />
    <div>
      <motion.span
        whileHover={{ color: "#915eff" }}
        transition={{ duration: 0.3 }}
        className="font-bold block mb-2"
      >
        {title}
      </motion.span>
      <motion.p
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
        className="text-secondary text-[17px] leading-[30px]"
      >
        {description}
      </motion.p>
    </div>
  </motion.div>
);

const About = () => {
  const skills = [
    {
      title: "Frontend Core:",
      description: "Advanced proficiency in JavaScript, TypeScript, and jQuery, enabling the creation of dynamic and interactive user interfaces"
    },
    {
      title: "Modern Frameworks:",
      description: "Extensive experience with React.js, Context API, and Material UI, delivering scalable and maintainable component-based architectures"
    },
    {
      title: "Styling Technologies:",
      description: "Expert in TailwindCSS, Bootstrap, and SCSS, creating responsive and visually appealing designs with clean, efficient code"
    },
    {
      title: "Development Tools:",
      description: "Proficient with Vite/Webpack for optimal build configurations, NPM for package management, and Postman for API testing and development"
    },
    {
      title: "Animation & UX:",
      description: "Skilled in Framer Motion for creating fluid animations and engaging user experiences"
    },
    {
      title: "Version Control:",
      description: "Strong command of Git and GitHub for efficient code management and collaboration"
    },
    {
      title: "Backend Integration:",
      description: "Experience with RESTful APIs and SQL databases, ensuring seamless data flow between frontend and backend systems"
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 space-y-6"
      >
        <motion.p
          className="text-secondary text-[17px] leading-[30px]"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          I&apos;m a skilled Frontend Developer specializing in building
          exceptional digital experiences. With deep expertise in TypeScript and
          JavaScript, I excel at crafting robust web applications using React.js
          and modern development tools. My technical arsenal includes:
        </motion.p>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <SkillSection
              key={skill.title}
              title={skill.title}
              description={skill.description}
              index={index}
            />
          ))}
        </div>

        <motion.p
          className="text-secondary text-[17px] leading-[30px]"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          I&apos;m passionate about translating business requirements into elegant
          solutions, collaborating closely with clients to create efficient,
          scalable, and user-friendly applications that solve real-world problems.
          My commitment to clean code, performance optimization, and staying
          current with industry best practices allows me to deliver outstanding
          results consistently.
        </motion.p>
      </motion.div>

      <div className="mt-20 flex flex-wrap items-center justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");