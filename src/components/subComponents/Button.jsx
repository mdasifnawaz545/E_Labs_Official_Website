import React from "react";

function Button({ userClass = "", buttonName = "BUTTON" }) {
  return (
    <button
      className={`border-[1.5px] font-bold backdrop-blur-lg hover:shadow-sm hover:shadow-textColor1 hover:scale-105  ${userClass} border-textColor1 duration-100 rounded-md p-1.5 px-2 text-textColor1 text-[16px]`}
    >
      {buttonName}
    </button>
  );
}

export default Button;
