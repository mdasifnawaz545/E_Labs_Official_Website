import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const Project = () => {
  return (
    <div className="container mx-auto px-5 lg:px-0">
      <div className="mt-10 mb-20 rounded-xl border-textColor1 border-2 p-6">
        <div className="flex lg:flex-row items-center justify-evenly gap-14 lg:gap-10 flex-col">
          <div className="w-full lg:w-[30%] flex items-center justify-center flex-col">
            <div className="flex w-full items-center justify-center">
              <img
                className="aspect-square w-[75%] min-w-[150px] max-w-[200px] object-cover rounded-xl hover:shadow-lg hover:shadow-textColor1 transition-all ease-in-out duration-200"
                src="https://placehold.co/600x400"
                alt="project_logo"
              />
            </div>
            <div className="flex flex-wrap justify-center items-center mt-6 w-full gap-8">
              <a href="https://github.com">
                <FaGithub className="text-4xl text-textColor1 hover:text-textColor2 transition-all ease-in-out duration-200 hover:scale-105" />
              </a>
              <a href="https://github.com">
                <FiExternalLink className="text-4xl text-textColor1 hover:text-textColor2 transition-all ease-in-out duration-200 hover:scale-105" />
              </a>
            </div>
            <div className="flex p-4 flex-row flex-wrap justify-evenly items-center rounded-xl border-2 border-textColor1 mt-6 w-fit gap-4">
              <div className="flex items-center justify-center w-[50%] max-w-[85px]">
                <img
                  className="aspect-square object-cover rounded-full"
                  src="https://placehold.co/600x400"
                  alt="project_author_logo"
                />
              </div>
              <div className="flex items-center justify-center flex-col w-[50%]">
                <div className="flex items-center justify-start w-full">
                  <h1 className="text-textColor1 text-md tracking-tight leading-snug font-light pb-2 border-b border-textColor1 w-full">
                    MEMBER NAME
                  </h1>
                </div>
                <div className="flex items-center justify-start w-full">
                  <h1 className="text-textColor1 text-md font-light leading-snug tracking-tight pt-2 w-full">
                    DOMAIN AND DETAILS
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[70%] items-center justify-center flex-col flex gap-5">
            <div className="flex items-center justify-center w-full">
              <h1 className="text-textColor1 text-4xl tracking-tight font-bold text-center w-full">
                PROJECT NAME
              </h1>
            </div>
            <div className="flex items-center justify-start w-full">
              <p className="tracking-tight w-full text-textColor2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
