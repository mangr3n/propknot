import { paraObj, cell, cellRight, text, textObj, rowSplit, tableObj, noBorders, cellObj } from "./elements.js";

const title = ({ package: event_package }) => {
  return paraObj({ text: event_package.description, heading: "Heading3", alignment: "center" });
};

const even = (v) => v % 2 == 0;

const descContent = (detailEntry) => {
  const { bold, normal } = detailEntry;
  const children = [];
  if (bold !== undefined) {
    children.push(textObj({ text: bold + ": ", bold: true }));
  }
  children.push(text(normal + "\n"));
  console.log("descContent", children);
  return children;
};

const details_table = ({ package: event_package }) => {
  const details = event_package.details;
  const rows = [];
  let idx = 0;
  for (let idx = 0; idx < details.length; idx = idx + 2) {
    rows.push(rowSplit(cell(...descContent(details[idx])), cell(...descContent(details[idx + 1]))));
  }
  return tableObj({
    borders: noBorders,
    rows,
  });
};
export const Package = (context) => {
  const { package: event_package } = context;
  const result = [title(context), details_table(context)];
  console.log("Package", { result });
  return result;
};
