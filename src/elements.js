import DX from "docx";
const { ExternalHyperlink, TextRun, Paragraph, TableCell, TableRow, Table, Document } = DX;

export const link = (text, link) =>
  new ExternalHyperlink({
    children: [textLink(text)],
    link,
  });

// Text
export const textLink = (text) => textObj({ text, style: "Hyperlink" });
export const text = (text) => textObj({ text });
export const textObj = (obj) => new TextRun(obj);

// Paragraphs
export const para = (...children) => paraObj({ children });
export const paraText = (t) => paraObj({ children: [text(t)] });
export const paraRight = (...children) => paraObj({ alignment: "right", children });
export const paraObj = (obj) => {
  // console.log("paraObj args", obj);
  return new Paragraph(obj);
};

// Table Cells
export const cell = (...children) => cellObj({ children: [para(...children)] });
export const cellRight = (...children) => cellObj({ children: [paraRight(...children)] });
export const cellObj = (obj) => {
  // console.log("cellObj args", obj);
  return new TableCell(obj);
};

export const rowSplit = (left, right) => rowObj({ children: [left, right] });
export const rowObj = (obj) => {
  // console.log("rowObj args", obj);
  return new TableRow(obj);
};
export const noBorders = {
  right: "none",
  top: "none",
  left: "none",
  bottom: "none",
  insideVertical: "none",
  insideHorizontal: "none",
};
export const bottomBorder = {
  ...noBorders,
  bottom: "single",
};
export const tableObj = (obj) => {
  console.log("tableObj/args", obj);
  return new Table(obj);
};

export const document = (...children) =>
  new Document({
    sections: [{ children }],
  });
