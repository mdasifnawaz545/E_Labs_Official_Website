import React from "react";
import { useSelector } from "react-redux";

function Domain() {
  let stdmt = useSelector((state) => state.studyMaterials);

  return (
    <div className="w-full font-verna mt-12 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-textColor1 mx-3 text-center">
        Introducing Our Domains
      </h1>
      <div
        className="w-[90%] h-[4px] bg-gradient-to-b from-[#F7941D] to-[#915711]"
        style={{
          background:
            "linear-gradient(180deg, #F7941D -348.21%, #915711 0.22%)",
        }}
      ></div>
      <div className="rounded-[32px] border-[3px] border-[#F7941D] mt-[4%] bg-[#0B1215] dark:bg-[#ffd4b3] w-[90%] h-full flex flex-col items-center justify-evenly">
        <div className="flex gap-7 px-4 items-center flex-wrap w-full justify-center py-10">
          {stdmt.map((element) => (
            <a
              // href={`/courses/${element.sec}`}
              href={"#"}
              className="flex hover:scale-105 transition-all ease-in-out duration-300 w-full sm:w-[45%] md:w-[30%] max-w-[350px]"
              key={element.domain}
            >
              <div
                className="flex font-verna flex-col items-center justify-center rounded-[15px] border-[4px] border-[#F7941D] bg-[#0B1215] h-52 gap-2.5 w-full p-3"
                style={{
                  borderColor: "var(--Border-Gradient, #F7941D)",
                  backgroundColor: "var(--Background-Color, #0B1215)",
                }}
              >
                <div className="flex items-end justify-center w-full">
                  <img
                    src={element.img}
                    alt={element.domain}
                    className="w-[25%]"
                  />
                </div>
                <div className="flex items-start justify-center w-full">
                  <p className="text-center h-[50%] font-bold text-[120%] leading-normal text-[#FFFAFA]">
                    {element.domain}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        {/* <div
          className="text-center font-bold leading-normal pb-[1%] pt-[3%] text-[180%] text-[#F7941D]"
          style={{
            color: "var(--Primary-Color, #F7941D)",
            fontFamily: '"Gotham Black"',
          }}
        >
          <p>STUDY MATERIAL</p>
        </div> */}
        {/* <div className="w-full flex items-center justify-center pb-[3%]">
          <div
            className="w-[1060px] h-[4px] bg-gradient-to-b from-[#F7941D] to-[#915711]"
            style={{
              background:
                "linear-gradient(180deg, #F7941D -348.21%, #915711 0.22%)",
            }}
          ></div>
        </div> */}
      </div>
    </div>
  );
}

export default Domain;
