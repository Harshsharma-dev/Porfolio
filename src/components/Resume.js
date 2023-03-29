import React from "react";
import "./Resume.css";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Document, Page, pdfjs } from "react-pdf";
import resumePdf from "./Harsh_Sharma_CV.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  return (
    <div className="resume">
      <div className="resume__container">
        <Document file="/harsh_sharma_cv.pdf">
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;
