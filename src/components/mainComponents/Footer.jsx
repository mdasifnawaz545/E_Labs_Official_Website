import React from "react";
import FooterCard from "../subComponents/FooterCard";
import ContactUs from "../subComponents/ContactUs";
import Social from "../subComponents/Social";

function Footer() {
  return (
    <div className="backdrop-blur-lg dark:backdrop-blur-lg dark:bg-[#ffd4b3] rounded-t-md bottom-0 w-full min-h-64 gap-10 max-[467px]:gap-10 flex flex-col flex-wrap items-center justify-center border-x border-t border-textColor1 mb-4">
      <div className="flex flex-wrap w-full items-center justify-evenly">
        <figure>
          <img
            src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1719200986/Trasnparent12_1_d7siyr.png"
            alt=""
            width={256}
            className="scale-75"
          />
        </figure>
        <div className="flex flex-wrap items-start justify-evenly gap-8 mx-8 w-full">
          <Social />
          <ContactUs />
          <FooterCard
            heading={`Address`}
            array={[
              {
                desc: `KIIT UNIVERSITY, Campus 12 
Old Electronics Building,
Patia, Bhubaneswar,
Odisha India 751024`,
                url: `https://maps.app.goo.gl/h36RsZRuY5ng6a9o9`,
              },
            ]}
          />
        </div>
      </div>
      <div className=" select-none flex gap-1 flex-col font-extralight items-center justify-center text-textColor2 dark:text-black  tracking-widest text-xs md:text-sm mb-2 mx-6">
        <p>&copy;2025. All Rights are Reserved by E LABS</p>
        <p>Made with 🧡 By Web Development Team</p>
      </div>
    </div>
  );
}

export default Footer;
