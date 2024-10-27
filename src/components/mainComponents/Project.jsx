import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../../constants/Projects";
import { Avatar, Image, ScrollShadow } from "@nextui-org/react";
import ProjectCard from "../subComponents/ProjectCard";

const Project = () => {
  let [project, setProjects] = useState(projects[-1]);

  if (project) {
    return (
      <div className="container mx-auto px-5 dark">
        <div className="mt-10 mb-20 rounded-xl border-textColor1 border-2 p-5 flex flex-col gap-6 lg:gap-10 overflow-x-hidden">
          <div className="flex lg:flex-row items-center justify-evenly gap-14 lg:gap-10 flex-col mt-6">
            <div className="w-full lg:w-[30%] flex items-center justify-center flex-col">
              <div className="flex w-full items-center justify-center">
                <Image
                  className="aspect-square w-[100%] min-w-[150px] max-w-[200px] object-cover hover:shadow-lg transition-all ease-in-out duration-200 hover:scale-95 hover:shadow-textColor1"
                  src={project.logo}
                  alt="project_logo"
                  isBlurred
                  radius="lg"
                />
              </div>
              <div className="flex flex-wrap justify-center items-center mt-4 w-full gap-8 light">
                <a href={project.github} target="_blank">
                  <FaGithub className="text-4xl text-textColor1 hover:text-textColor2 transition-all ease-in-out duration-200 hover:scale-105" />
                </a>
                <a href={project.url} target="_blank">
                  <FiExternalLink className="text-4xl text-textColor1 hover:text-textColor2 transition-all ease-in-out duration-200 hover:scale-105" />
                </a>
              </div>
              <div className="flex p-3 flex-row flex-wrap justify-evenly items-center rounded-xl border-2 border-textColor1 mt-5 w-fit gap-4">
                <div className="flex items-center justify-center w-[50%] max-w-[75px]">
                  <Avatar
                    className="aspect-square object-cover min-w-[75px] min-h-[75px]"
                    src={project.author.logo}
                    alt="project_author_logo"
                    radius="full"
                    showFallback
                    isBordered
                  />
                </div>
                <div className="flex items-center justify-center flex-col w-[50%]">
                  <div className="flex items-center justify-start w-full">
                    <h1 className="text-textColor1 text-md tracking-tight leading-snug font-light pb-2 border-b border-textColor1 w-full">
                      {project.author.name}
                    </h1>
                  </div>
                  <div className="flex items-center justify-start w-full">
                    <h1 className="text-textColor1 text-md font-light leading-snug tracking-tight pt-2 w-full">
                      {project.author.domain}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[70%] items-center justify-center flex-col flex gap-5">
              <div className="flex items-center justify-center w-full">
                <h1 className="text-textColor1 text-4xl tracking-tight font-bold text-center w-full">
                  {project.name}
                </h1>
              </div>
              <div className="flex items-center justify-start w-full">
                <p className="tracking-tight w-full text-textColor2">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex px-[2%] lg:px-[5%] w-full overflow-x-visible">
            <ScrollShadow
              className="flex items-center w-full justify-evenly snap-x mb-6 gap-8 py-5 select-none"
              orientation="horizontal"
              size={25}
            >
              {project.screenshots.map((item, index) => (
                <div className="shrink-0">
                  <Image
                    src={item}
                    alt={`project_screenshot_${index}`}
                    key={index}
                    radius="lg"
                    className="flex shrink-0 max-h-[175px] max-w-[800px] hover:shadow-lg hover:shadow-textColor1 hover:scale-95 snap-center transition-all ease-in-out duration-200 object-cover border-2 border-textColor1"
                  />
                </div>
              ))}
            </ScrollShadow>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-5 dark">
      <div className="flex w-full items-center justify-center">
        <h1 className="text-textColor1 text-5xl tracking-tight font-bold text-center w-full">
          Projects
        </h1>
      </div>
      <div className="mt-10 mb-20 rounded-xl border-textColor1 border-2 p-16 flex flex-row flex-wrap items-center justify-center gap-14 overflow-x-hidden w-full">
        {projects.map((project, index) => (
          <div
            onClick={() => setProjects(projects[index])}
            className="flex w-[30%] max-w-[300px] min-w-[250px]"
          >
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setProjects(projects[index])}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
