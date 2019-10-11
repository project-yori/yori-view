export const parseKatakanaToHiragana = oriStr => {
  return oriStr
    .split("")
    .map(letter => {
      const code10 = letter.charCodeAt(0);
      return code10 > 12448 && code10 < 12543 // Unicode range for Katakana
        ? String.fromCharCode(code10 - 96) // Difference between Hiragana and Katakana in decimal for same letter
        : letter;
    })
    .join("");
};
