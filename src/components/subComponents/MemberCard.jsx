import React from "react";

function MemberCard({
  imgSource = "https://media.istockphoto.com/id/1973365581/vector/sample-ink-rubber-stamp.jpg?s=612x612&w=0&k=20&c=_m6hNbFtLdulg3LK5LRjJiH6boCb_gcxPvRLytIz0Ws=",
  name = "Name",
  position = "Position",
}) {
  return (
    <div className="flex flex-wrap-reverse justify-center items-center">
      <div
        className={`w-80 flex flex-col justify-center gap-3 items-center h-[28rem] border-2 border-textColor1 rounded-md backdrop-blur-lg pt-2`}
      >
        <div>
          <figure className="border-neutral-300 border-2 rounded-md overflow-hidden object-cover">
            <img src={imgSource} alt="" width={225} height={200} />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-bold text-textColor1">
            {name.toUpperCase()}
          </p>
          <p className="text-textColor2 font-thin">{position.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
