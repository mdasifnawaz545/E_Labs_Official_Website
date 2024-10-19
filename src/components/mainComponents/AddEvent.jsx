import React from "react";
import {
  DatePicker,
  Input,
  Textarea,
  TimeInput,
  Button,
  Image,
} from "@nextui-org/react";
import { FaCamera, FaPlus } from "react-icons/fa";

let count = 1;
// const [instructors, setInstructors] = useState(count);

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
            ></Input>
            <Textarea
              label="Event Description"
              variant="bordered"
              color="warning"
              minRows={1}
            ></Textarea>
            <Textarea
              label="Event Organizers/Instructors"
              variant="bordered"
              isClearable
              color="warning"
              minRows={1}
              isRequired
            ></Textarea>
            <Input
              label="Event Location"
              variant="bordered"
              isClearable
              color="warning"
              isRequired
            ></Input>
            <DatePicker
              label="Event Date"
              variant="bordered"
              hideTimeZone
              color="warning"
              isRequired
              className="dark"
              showMonthAndYearPickers
            ></DatePicker>
            <TimeInput
              label="Event Time"
              variant="bordered"
              color="warning"
              isRequired
            ></TimeInput>
          </div>

          <div className="flex max-w-[280px] w-full flex-col gap-6 items-center justify-center">
            <Image
              className="aspect-square object-cover border-2 min-w-[70px] border-textColor1"
              src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              alt="project_logo"
              radius="lg"
            />
            <Button
              radius="lg"
              variant="shadow"
              className="bg-textColor1 w-[250px] hover:scale-105 transition-all ease-in-out duration-200 text-neutral-900"
              size="lg"
              startContent={<FaCamera className="text-neutral-900 text-xl" />}
            >
              <h1 className="text-xl font-bold">Upload Image</h1>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            radius="lg"
            variant="shadow"
            className="bg-textColor1 w-[250px] hover:scale-105 transition-all ease-in-out duration-200 text-neutral-900"
            size="lg"
          >
            <h1 className="text-xl font-bold">SUBMIT</h1>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
