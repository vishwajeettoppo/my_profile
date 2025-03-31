"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import bg from "../../assets/gradient-bg.jpg";
import { LucideMenu, MoonIcon, MoveRight, SunIcon } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const sideMenuRef = useRef();
  const viewMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const hideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      {/* <div className="fixed top-0 w-[100vw] h-auto -z-50 border">
        <Image src={bg} alt="" className="w-full" />
      </div> */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 dark:drop-shadow-md shadow-slate-500 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-sm shadow-sm  dark:bg-background"
            : ""
        } `}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt=""
            className="w-54 cursor-pointer mr-14 dark:invert"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 dark:bg-background ${
            !isScroll
              ? "bg-white shadow-sm bg-opacity-50 dark:bg-background dark:border-border dark:text-foreground"
              : ""
          } `}
        >
          <li>
            <a href="#home" className="font-Outfit">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <SunIcon className="w-6 text-white" />
            ) : (
              <MoonIcon className="w-6 text-black" />
            )}
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full ml-4 "
          >
            Contact <HiArrowTopRightOnSquare />
          </a>
          <button className="block md:hidden ml-3">
            <LucideMenu onClick={viewMenu} className="w-6" />
          </button>
        </div>

        {/* ----------------mobile menu----------------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-background dark:text-foreground"
        >
          <div
            onClick={hideMenu}
            className=" w-5 absolute right-6 top-10 cursor-pointer"
          >
            <MoveRight />
          </div>
          <li>
            <a onClick={hideMenu} href="#home" className="font-Outfit">
              Home
            </a>
          </li>
          <li>
            <a onClick={hideMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a onClick={hideMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={hideMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={hideMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
