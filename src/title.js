import { paraObj, textObj } from "./elements.js";

const title_string = ({ full_title }) => `Gala Cuisine at ${full_title}`;
const title_text = ({ venue, config }) =>
  textObj({ text: title_string(venue), color: venue.title_color, font: config.title_font });
export const Title = (context) => {
  return paraObj({
    children: [title_text(context)],
    alignment: "center",
    heading: "Title",
  });
};
