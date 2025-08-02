import { quizQuestions } from "../constant/quiz";

export const generate = (count = 30) => {
  const result = [];
  const usedIndices = new Set();

  while (result.length < count) {
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      result.push(quizQuestions[randomIndex]);
    }
  }

  return result;
};
