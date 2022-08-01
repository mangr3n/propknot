import DX from "docx";
import * as fs from "fs";
import { Title } from "./title.js";
import { Header } from "./header.js";
import { Package } from "./package.js";
import { document, paraText } from "./elements.js";
const { Packer } = DX;

const log = (...vars) => {
  console.log("propknot/test", ...vars);
};

export const writeDoc = (filePath, children) => {
  Packer.toBuffer(document(...children)).then((buffer) => fs.writeFileSync(filePath, buffer));
};

const proposalContent = (context) => {
  return [Title(context), Header(context), ...Package(context)];
};

export const generateProposals = (context) => {
  const resultContent = proposalContent(context);
  writeDoc("./MyDoc.docx", resultContent);
};

export const test = (context) => {
  writeDoc("./TestDoc.docx", [paraText("Test")]);
};
