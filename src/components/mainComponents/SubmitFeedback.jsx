import React from "react";
import { Input, Textarea, Slider } from "@nextui-org/react";

const SubmitFeedback = () => {
  const [rating, setRating] = React.useState(null);

  return (
    <div className="container mx-auto px-5 dark">
      <div className="flex w-full items-center justify-center mt-8">
        <h1 className="text-textColor1 text-5xl tracking-tight font-bold text-center w-full">
          Submit Feedback
        </h1>
      </div>
      <div className="mt-10 mb-20 rounded-xl border-textColor1 border-2 p-16 flex flex-col items-center justify-center gap-14 overflow-x-hidden w-full">
        <div className="flex max-w-[800px] w-full flex-col gap-8 items-start justify-center py-4">
          <Slider
            size="md"
            color="warning"
            label="Rating"
            showSteps={true}
            maxValue={10}
            minValue={1}
            onChangeEnd={(value) => setRating(value)}
            marks={[
              {
                value: 1,
                label: "1",
              },
              {
                value: 10,
                label: "10",
              },
            ]}
            classNames={{
              label: "text-md text-[#f5a524]",
              value: "text-md text-[#f5a524]",
              mark: "text-md text-[#f5a524]",
            }}
          />
          <Input
            label="Feedback Title"
            variant="bordered"
            isClearable
            color="warning"
            isRequired
            classNames={{ label: "text-md" }}
          ></Input>
          <Textarea
            label="Feedback Description"
            variant="bordered"
            color="warning"
            minRows={6}
            classNames={{ label: "text-md" }}
          ></Textarea>
        </div>
      </div>
    </div>
  );
};

export default SubmitFeedback;
