import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../../constants/Projects";
import {
  Avatar,
  Image,
  ScrollShadow,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

const Project = ({ project = projects[0] }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="container mx-auto px-5 dark">
      <div className="mt-10 mb-20 rounded-xl border-textColor1 border-2 p-5 flex flex-col gap-10 overflow-x-hidden">
        <div className="flex lg:flex-row items-center justify-evenly gap-14 lg:gap-10 flex-col mt-6">
          <div className="w-full lg:w-[30%] flex items-center justify-center flex-col">
            <div className="flex w-full items-center justify-center">
              <Image
                className="aspect-square w-[100%] min-w-[150px] max-w-[200px] object-cover hover:shadow-lg transition-all ease-in-out duration-200 hover:scale-95"
                src={project.logo}
                alt="project_logo"
                isBlurred
                radius="lg"
              />
            </div>
            <div className="flex flex-wrap justify-center items-center mt-4 w-full gap-8">
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
        <div className="px-[5%] w-full overflow-visible">
          <ScrollShadow
            className="flex flex-row items-center w-full justify-start snap-x overflow-x-auto mb-6 gap-8 py-5 select-none"
            orientation="horizontal"
            size={25}
          >
            {project.screenshots.map((item, index) => (
              <>
                <img
                  src={item}
                  alt={`project_screenshot_${index}`}
                  key={index}
                  className="max-h-[175px] hover:shadow-lg hover:shadow-textColor1 hover:scale-95 snap-center transition-all ease-in-out duration-200 object-cover rounded-xl cursor-pointer border-2 border-textColor1"
                  onClick={onOpen}
                />
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalBody>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam pulvinar risus non risus hendrerit
                            venenatis. Pellentesque sit amet hendrerit risus,
                            sed porttitor quam.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam pulvinar risus non risus hendrerit
                            venenatis. Pellentesque sit amet hendrerit risus,
                            sed porttitor quam.
                          </p>
                          <p>
                            Magna exercitation reprehenderit magna aute tempor
                            cupidatat consequat elit dolor adipisicing. Mollit
                            dolor eiusmod sunt ex incididunt cillum quis. Velit
                            duis sit officia eiusmod Lorem aliqua enim laboris
                            do dolor eiusmod. Et mollit incididunt nisi
                            consectetur esse laborum eiusmod pariatur proident
                            Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                          </p>
                        </ModalBody>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </>
            ))}
          </ScrollShadow>
        </div>
      </div>
    </div>
  );
};

export default Project;
