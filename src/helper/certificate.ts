import PDFDocument from "pdfkit";
import { center } from "../models";
export const buildPDF = async (
  dataCallback: any,
  endCallback: any,
  data: any
) => {
  const doc = new PDFDocument({
    bufferPages: true,
    font: "Times-Roman",
    margin: 50,
  });

  doc.on("data", dataCallback);
  doc.on("end", endCallback);
  // Certificate Header
  doc.image("src/public/logo/reb-logo.jpg", 250, 40, {
    width: 150,
    height: 100,
  });
  // Certificate Sub header
  doc
    .fontSize(20)
    .font("Times-Bold")
    .text(`Certificate of Course Completion`, 50, 150, {
      align: "center",
    })
    .moveDown(1);
  doc
    .fontSize(15)
    .font("Times-Italic")
    .text(
      `The ${data[0].dp_name} Development Impact Evaluation (DIME) department congratulates`,
      {
        align: "center",
      }
    )
    .moveDown();
  doc.end();
};
