"use client";
import React, { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

// Set the workerSrc to the correct URL for pdf.worker.js
pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

function Viewer({ url }) {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(url).promise;
        setPdfDoc(pdf);
        setLoading(false);
        renderPage(pageNum, pdf); // Pass the pdf object to renderPage
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    loadPdf();
  }, [url]); // Added url to dependency array

  useEffect(() => {
    if (pdfDoc) {
      renderPage(pageNum, pdfDoc);
    }
  }, [pageNum, pdfDoc]); // Ensure renderPage is called when pageNum or pdfDoc changes

  const renderPage = async (num, pdf) => {
    if (!pdf) return;

    try {
      const page = await pdf.getPage(num);
      const viewport = page.getViewport({ scale: 0.8 });

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Clear the canvas before rendering new content
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
    } catch (error) {
      console.error("Error rendering page:", error);
    }
  };

  const handleNextPage = () => {
    if (pdfDoc && pageNum < pdfDoc.numPages) {
      setPageNum((prevPageNum) => prevPageNum + 1);
    }
  };

  const handlePrevPage = () => {
    if (pdfDoc && pageNum > 1) {
      setPageNum((prevPageNum) => prevPageNum - 1);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <div>
        <div className="flex w-full justify-evenly">
          <button
            onClick={handlePrevPage}
            disabled={loading || pageNum === 1}
            className="p-1 m-1 text-orange-500 font-bold text-xl"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={loading || !pdfDoc || pageNum >= pdfDoc.numPages}
            className="p-1 m-1 text-orange-500 font-bold text-xl"
          >
            Next
          </button>
        </div>
      </div>
      <div className="bg-gray-400 rounded-lg w-[80%]">
        <canvas ref={canvasRef} id="the-canvas" />
      </div>
    </div>
  );
}

export default Viewer;
