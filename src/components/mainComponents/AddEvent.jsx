import React from "react";
import {
  Input,
  Textarea,
  TimeInput,
  Image,
  DateInput,
} from "@nextui-org/react";
import { FaCamera } from "react-icons/fa";
import { FileUploader } from "../subComponents/FileUploader";

const AddEvent = () => {
  return (
    <div className="container mx-auto px-5 dark">
      <div className="flex w-full items-center justify-center mt-8">
        <h1 className="text-textColor1 text-5xl tracking-tight font-bold text-center w-full">
          Add Event Details
        </h1>
      </div>
      <div className="mt-10 mb-20 rounded-xl border-textColor1 border-2 p-16 flex flex-col items-center justify-center gap-14 overflow-x-hidden w-full">
        <div className="w-full flex flex-row flex-wrap items-center justify-evenly gap-10">
          <div className="flex max-w-[400px] w-full flex-col gap-6 items-center justify-center">
            <Input
              label="Event Name"
              variant="bordered"
              isClearable
              color="warning"
              isRequired
              classNames={{ label: "text-md" }}
            ></Input>
            <Textarea
              label="Event Description"
              variant="bordered"
              color="warning"
              minRows={1}
              classNames={{ label: "text-md" }}
            ></Textarea>
            <Textarea
              label="Event Organizers/Instructors"
              variant="bordered"
              color="warning"
              minRows={1}
              isRequired
              classNames={{ label: "text-md" }}
            ></Textarea>
            <Input
              label="Event Location"
              variant="bordered"
              isClearable
              color="warning"
              isRequired
              classNames={{ label: "text-md" }}
            ></Input>
            <DateInput
              label="Event Date"
              variant="bordered"
              color="warning"
              isRequired
              classNames={{ input: "text-md", label: "text-md" }}
            ></DateInput>
            <TimeInput
              label="Event Time"
              variant="bordered"
              color="warning"
              isRequired
              classNames={{ input: "text-md", label: "text-md" }}
            ></TimeInput>
          </div>

          <div className="flex max-w-[280px] w-full flex-col gap-6 items-center justify-center">
            <Image
              className="aspect-square object-cover border-2 min-w-[70px] border-textColor1"
              src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              alt="project_logo"
              radius="lg"
            />
            <FileUploader
              label={"Upload Image"}
              startContent={<FaCamera className="text-neutral-900 text-xl" />}
              accept={"image/*"}
            />
          </div>
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default AddEvent;
