import { hiraganaToRomaji } from "../constant/hiragana";

function random(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const generate = (count = 50) => {
  let hiraganaList = Object.keys(hiraganaToRomaji);

  return Array.from({ length: count }, () => random(hiraganaList));
};
