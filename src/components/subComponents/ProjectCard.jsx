import { Image, Avatar } from "@nextui-org/react";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex items-center justify-center flex-col border-2 border-textColor1 rounded-xl cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 overflow-hidden hover:shadow-lg hover:shadow-textColor1">
      <Image
        className="aspect-video w-[100%] object-cover"
        src={project.screenshots[0]}
        alt="project_banner"
        radius="none"
      />
      <div className="flex w-full mt-2">
        <div className="flex px-3 pb-3 pt-2 flex-row flex-wrap justify-evenly items-center gap-4 max-h-[150px]">
          <div className="flex items-center justify-center w-[25%] max-w-[75px]">
            <Image
              className="aspect-square object-cover border-2 min-w-[70px] border-textColor1"
              src={project.logo}
              alt="project_logo"
              radius="full"
            />
          </div>
          <div className="flex items-center justify-center flex-col w-[65%]">
            <div className="flex items-center justify-start w-full">
              <h1 className="text-textColor1 text-lg leading-snug font-semibold pb-2 border-b border-textColor1 w-full">
                {project.name}
              </h1>
            </div>
            <div className="flex items-center justify-start w-full">
              <h1 className="text-textColor2 text-clip text-md font-normal leading-snug tracking-tight pt-2 w-full">
                {project.about}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
