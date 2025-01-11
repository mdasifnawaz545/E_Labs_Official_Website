import { useSelector } from "react-redux";
import EventSlider from "./EventSlider";

const EventSliderContainer = () => {
  let EventSliders = useSelector((state) => state.sliders);
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {EventSliders.map((slider, index) => (
        <EventSlider
          key={index}
          images={slider.images}
          eventName={slider.eventName}
        />
      ))}
    </div>
  );
};

export default EventSliderContainer;
