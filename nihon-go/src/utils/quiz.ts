export const quizQuestions = {
  "心 (こころ)": [
    ["lungs", "kidney", "children", "heart (as in feelings)"],
    "heart (as in feelings)",
  ],
  "家族 (かぞく)": [["sister", "brother", "family", "chicken"], "family"],
  "心臓 (しんぞう)": [["lungs", "heart", "mouth", "neck"], "heart"],
};

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const generate = (count = 3) => {
  let quizList = Object.keys(quizQuestions);

  return new Array(count).fill().map((_) => random(quizList));
};
