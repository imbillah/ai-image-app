import { surpriseMePrompts } from "../constant";
import FileSaver from "file-saver";
export const generatePrompts = (prompt) => {
  const randomNum = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[randomNum];

  if (randomPrompt === prompt) return generatePrompts(prompt);
  return randomPrompt;
  console.log("Triggered");
};

export const downloadImage = async (_id, image) => {
  console.log("Triggered");
  FileSaver.saveAs(image, `download-${_id}.jpg`);
};
