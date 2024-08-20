import EventHeading from "../subComponents/EventHeading";
import Instructors from "../subComponents/Instructors";
import Map from "../subComponents/Map";
import "../../styles/EventPageStyles.css";

function EventPage() {
  return (
    <div className="container">
      <main>
        <EventHeading />
        <Instructors />
        <Map />
      </main>
    </div>
  );
}
export default EventPage;
