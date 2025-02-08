import React from "react";
import { FaRegUser } from "react-icons/fa";

function FeedbackCard({
  name,
  feedback,
  imgSource = "https://res.cloudinary.com/dpqdgcipi/image/upload/v1720237114/1676480037898_jypfgp.jpg",
}) {
  return (
    <div className="flex flex-col items-center justify-between p-4 gap-4 rounded-br-3xl border-2 border-textColor1 ">
      <p className="text-textColor2 dark:text-black text-[18px]">{feedback}</p>
      <div className="w-full flex items-center justify-end gap-2">
        <figure className="rounded-full dark:text-black">
          {/* <img className="rounded-full aspect-square object-cover" src={imgSource} alt="" width={24} height={24} /> */}
          <FaRegUser />
        </figure>
        <p className="text-end text-textColor1">{name}</p>
      </div>
    </div>
  );
}

export default FeedbackCard;
