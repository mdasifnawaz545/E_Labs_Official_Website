import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Viewer from "../subComponents/Viewer";

function PdfView() {
  let stdmt = useSelector((state) => state.studyMaterials);
  const { sec, pdf } = useParams();
  const [pdfU, setPdf] = useState("");
  useEffect(() => {
    // console.log(stdmt, pdf, sec);

    stdmt.forEach((element) => {
      if (element.sec == sec) {
        setPdf(element.resUrls[pdf]);
        console.log(element.resUrls[pdf].url);
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
          <p>{pdfU.name}</p>
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
        <div className="w-full h-full flex items-center justify-center">
          {pdfU && <Viewer url={pdfU.url} />}
        </div>
      </div>
    </div>
  );
}

export default PdfView;
