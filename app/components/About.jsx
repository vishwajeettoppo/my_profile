import Image from "next/image";
import React from "react";
import myimage from "@/assets/myimage4.jpg";
import { infoList, toolsData } from "@/assets/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h4 className="text-center mb-2 text-lg font-outfit">Introduction</h4>
      <h2 className="text-center text-5xl">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 h-100 sm:w-80 rounded-3xl max-w-none border-3 border-black">
          <Image
            src={myimage}
            alt=""
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl text-justify">
          "I am a dedicated software developer with a strong foundation in full-stack web development, specializing in both frontend and backend technologies. Proficient in frameworks like React.js and Next.js, I enjoy creating seamless, user-friendly applications that solve real-world problems."
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl gap-6">
            {infoList?.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border border-gray-400 rounded-xl p-6 cursor-pointer hover:shadow-md hover:bg-gray-100 hover:-translate-y-1 duration-400 hover:shadow-black dark:border-white dark:group-hover:text-black"
              >
                <Image
                  src={icon}
                  alt=""
                  width={30}
                  className="dark:invert group dark:group-hover:text-white"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white/80 group">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm  dark:text-white/80 ">
                  {description}
                </p>
              </li>
            ))}
          </ul>
          <h4 className="mt-10">Tools I use</h4>
          <ul className="flex gap-3 items-center sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-300"
              >
                <Image src={tool} alt="" className="w-8" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
