import * as fs from "fs";
import * as F from "nanoutils";
import docx from "docx";
import { generateProposals, test } from "./content.js";
import { loadData } from "./utils.js";

const { Document, Packer, Paragraph } = docx;

const venue = "Foxchase";
const consultant = "Carolyn";
const event_package = "Gold";
const event_style = "Buffet";
const sizes = [100, 125, 150];

const context = {
  config: loadData("config"),
  consultant: loadData("consultants")[consultant],
  venue: loadData("venues")[venue],
  pricing: loadData("pricing"),
  package: loadData("packages")[event_package],
  sizes,
  event_style,
};

generateProposals(context);

// test(context);
