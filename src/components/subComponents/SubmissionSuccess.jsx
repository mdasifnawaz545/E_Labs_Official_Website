import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function SubmissionSuccess() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/events");
  };

  return (
    <div className="flex flex-col items-center justify-center m-6  text-white">
      <h1 className="text-3xl font-bold mb-8">Registration Successful!</h1>
      <p className="mb-8">
        Thank you for registering. We look forward to seeing you at the event.
      </p>
      <Button buttonName="Go to Events" onClick={handleRedirect} />
    </div>
  );
}

export default SubmissionSuccess;
