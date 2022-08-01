import { tableObj, rowSplit, rowObj, cell, cellRight, cellObj, paraText, text, link, textObj } from "./elements.js";
import { format } from "date-fns";
const emails = ({ consultant, venue }) => {
  return [
    link(consultant.email, `mailto:${consultant.email}`),
    text(" | "),
    link(venue.email, `mailto:${venue.email}`),
  ];
};

const fullWidth = { width: { size: 100, type: "pct" } };
const bottomBorder = {
  borders: {
    top: "none",
    // bottom: "none",
    left: "none",
    right: "none",
    insideHorizontal: "none",
    insideVertical: "none",
  },
};

const guestRange = (context) => {
  const minCount = Math.min(...context.sizes);
  const maxCount = Math.max(...context.sizes);
  return textObj({ allCaps: true, text: `Proposal for ${minCount}-${maxCount} Guests - ${context.event_style}` });
};

const dateOfProposal = () => {
  const now = Date.now();
  const dateStr = format(new Date(), "iiii, MMMM d, yyyy");
  return `TODAY'S DATE: ${dateStr}`;
};

export const Header = (context) => {
  const { consultant, venue } = context;
  const result = tableObj({
    ...fullWidth,
    ...bottomBorder,
    rows: [
      rowSplit(cell(text(consultant.name)), cellRight(text(`${venue.short_title} Office: ${venue.office_phone}`))),
      rowSplit(cell(text(consultant.title)), cellRight(...emails(context))),
      rowSplit(
        cell(text(`Direct Line: ${consultant.phone}`)),
        cellRight(link(venue.website, `https://${venue.website}`))
      ),
      rowSplit(cell(text(" ")), cellRight(text(" "))),
      rowSplit(cell(guestRange(context)), cellRight(text(dateOfProposal()))),
      rowSplit(cell(text(" ")), cellRight(text(" "))),
    ],
  });
  // console.log("Header", consultant, venue, result);
  return result;
};
