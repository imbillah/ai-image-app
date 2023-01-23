import { surpriseMePrompts } from "../constant";

export const generatePrompts = (prompt) => {
  const randomNum = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[randomNum];

  if (randomPrompt === prompt) return generatePrompts(prompt);
  return randomPrompt;
  console.log("Triggered");
};
