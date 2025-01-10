import React from "react";

function FeedbackCard({
  name,
  feedback,
  imgSource = "https://res.cloudinary.com/dpqdgcipi/image/upload/v1720237114/1676480037898_jypfgp.jpg",
}) {
  return (
    <div className="flex flex-col w-72 h-52 items-center justify-between p-4 rounded-br-3xl border-2 border-textColor1">
      <p className="text-textColor2 text-[18px]">{feedback}</p>
      <div className="w-full flex items-center justify-end gap-2">
        <figure>
          <img className="rounded-full" src={imgSource} alt="" width={24} />
        </figure>
        <p className="text-end text-textColor1">{name}</p>
      </div>
    </div>
  );
}

export default FeedbackCard;
