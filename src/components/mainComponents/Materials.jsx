import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Materials() {
  let stdmt = useSelector((state) => state.studyMaterials);
  const { sec } = useParams();
  const [domain, setDomain] = useState("");
  useEffect(() => {
    stdmt.forEach((element) => {
      //   console.log(element.sec, sec);
      if (element.sec == sec) {
        setDomain(element);
        // console.log(domain.resUrls);
      }
    });
  }, [sec]);

  return (
    <div className="w-full h-full flex items-center justify-center pb-[460px] sm:pb-0">
      <div className="rounded-[32px] m-[4%] bg-[#0B1215] w-[80%] h-fit">
        <div
          className="text-center font-bold leading-normal pb-[1%] pt-[3%] text-[180%] text-[#F7941D]"
          style={{
            color: "var(--Primary-Color, #F7941D)",
            fontFamily: '"Gotham Black"',
          }}
        >
          <p>{domain.domain}</p>
        </div>
        <div className="w-full flex items-center justify-center pb-[3%]">
          <div
            className="w-[1060px] h-[4px] bg-gradient-to-b from-[#F7941D] to-[#915711]"
            style={{
              background:
                "linear-gradient(180deg, #F7941D -348.21%, #915711 0.22%)",
            }}
          ></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-[10%] pb-[48px] sm:p-4 mb-[3%] mx-[3%]">
          {domain.resUrls &&
            domain.resUrls.map((element, index) => (
              <a href={`/courses/${sec}/${index}`} key={element.name}>
                <div
                  className="flex flex-col items-center pt-0 pb-[21px] px-[20%] rounded-[15px] border-[4px] border-[#F7941D] bg-[#0B1215]"
                  style={{
                    borderColor: "var(--Border-Gradient, #F7941D)",
                    backgroundColor: "var(--Background-Color, #0B1215)",
                  }}
                  key={element.name}
                >
                  <p
                    className="text-center pt-[50%] pb-[10%] font-bold text-[120%] leading-normal text-[#FFFAFA]"
                    style={{
                      color: "var(--Accent, #FFFAFA)",
                      fontFamily: "Gotham",
                    }}
                  >
                    {element.name}
                  </p>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Materials;
