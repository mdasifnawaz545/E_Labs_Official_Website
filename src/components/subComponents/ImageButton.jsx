import React from "react";

function ImageButton({ imageSource, func, userClass }) {
  return (
    <button
      onClick={() => {
        func && func();
      }}
      className={`border-[1.5px] font-bold backdrop-blur-lg hover:shadow-sm hover:shadow-textColor1 hover:scale-105 cursor-pointer border-textColor1 duration-100 rounded-md p-1.5 px-2 text-textColor1 ${userClass}`}
    >
      <img src={imageSource} width={24} alt="" />
    </button>
  );
}

export default ImageButton;
