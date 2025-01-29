import React from "react";
import Card from "../subComponents/Card";
import HPCard from "../subComponents/HPCard";

function About() {
  let desc = `E-Labs is a student-run peer-to-peer technical engagement platform designed to empower learners. We go beyond the confines of traditional academic curricula, offering a diverse range of courses and projects that cater to your unique interests and professional aspirations. Our platform provides a dynamic and collaborative learning environment where you can connect with fellow students, share knowledge, and work together on challenging projects. By actively engaging with your peers, you gain valuable real-world experience, develop essential soft skills, and bridge the critical gap between theoretical knowledge and the ever-evolving demands of the professional world. At E-Labs, we believe in the power of collaborative learning and mentorship to foster innovation, creativity, and personal growth. Join us on this exciting journey of discovery and unlock your full potential.`;
  return (

    <div className="flex flex-wrap items-center justify-evenly mt-4 min-h-screen gap-8 mx-8">
      <Card />
      <HPCard
        heading="E - Labs"
        userClass="text-6xl font-black"
        description={desc}
      />
    </div>
  );

}

export default About;
