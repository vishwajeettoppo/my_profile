import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-outfit">My portfolio</h4>
      <h2 className="text-center text-5xl">My latest works</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center drop-shadow-md rounded-lg relative cursor-pointer group "
          >
            <Image
              src={project.bgImage}
              alt=""
              className=" h-full w-full object-cover rounded-lg"
            />
            {/* {console.log(project.bgImage)} */}
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-15 aspect-square flex items-center justify-center group-hover:bg-gray-400 transition">
                <Image src={assets.send} alt="" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-300 duration-300"
      >
        Show more
        <Image src={assets.right_arrow} alt="" className="w-4" />
      </a>
    </div>
  );
};

export default Work;
