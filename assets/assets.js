import logo from "./logo.png";
import gradientBg from "./gradient-bg.jpg";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import mongodb from "./mongodb.png";
import figma from "./figma.png";
import github from "./github.png";
import code from "./code.png";
import university from "./university.png";
import projects from "./projects.png";
import design from "./design.png";
import ui from "./ui.png";
import web from "./web.png";
import android from "./android.png";
import right_arrow from "./right_arrow.png";
import work1 from "./work1.jpg";
import work2 from "./work2.jpg";
import work3 from "./work3.jpg";
import work4 from "./work4.jpg";
import send from "./send.png";
import mail from "./mail.png";

export const assets = {
  logo,
  gradientBg,
  vscode,
  firebase,
  mongodb,
  figma,
  github,
  code,
  projects,
  university,
  design,
  ui,
  web,
  android,
  right_arrow,
  work1,
  work2,
  work3,
  work4,
  send,
  mail,
};

export const infoList = [
  {
    icon: code,
    title: "Languages",
    description: "HTML, CSS, Javascript React Js, Next Js",
  },
  {
    icon: university,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: projects,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.github,
];

export const serviceData = [
  {
    icon: assets.web,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.android,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.design,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const workData = [
  {
    title: "SelfEd",
    description: "Mobile Application",
    bgImage: assets.work1,
    link: "https://selfed01--im10tarfp6.expo.app/",
  },
  {
    title: "FoodEats",
    description: "Web Application",
    bgImage: assets.work2,
    link:"https://online-food-order-opal.vercel.app/"
  },
  {
    title: "Blogify",
    description: "Web Application",
    bgImage: assets.work3,
    link:"https://github.com/vishwajeettoppo/Blog.git",
  },
  {
    title: "Footwears",
    description: "Web Design",
    bgImage: assets.work4,
    link:"https://footwear-store-orcin.vercel.app/",
  },
];
