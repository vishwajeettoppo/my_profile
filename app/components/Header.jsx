import { DownloadIcon, HandIcon, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import profile from "@/assets/profile.jpg";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center max-w-3xl mx-auto w-11/12 h-screen text-center justify-center gap-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={profile}
          alt=""
          className=" rounded-full w-32 h-32 object-cover"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3  "
      >
        Hi! I'm Vishwajeet Toppo <HandIcon className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] "
      >
        frontend web developer based in India
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className=" max-w-2xl mx-auto "
      >
        I am a frontend developer from India, with 4 years of experience in
        multiple companies like Microsoft, Tesla and Apple.
      </motion.p>
      <div className=" flex flex-col sm:flex-row gap-5 items-center mt-4">
        <motion.a
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          href="#contact"
          className="flex rounded-full w-38 cursor-pointer justify-evenly p-2 border border-white bg-black "
        >
          <p className=" text-white">contact me</p>
          <MoveRight className="w-5 text-white" />
        </motion.a>

        <motion.a
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          href="./sample-resume.pdf"
          className="flex rounded-full w-38 cursor-pointer justify-evenly p-2 border border-black dark:bg-foreground dark:text-foreground"
        >
          <p className=" text-black">my resume</p>
          <DownloadIcon className="w-5 text-black" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
