const KATAKANA_START = 12448;
const KATAKANA_END = 12543;
const DIFF_KATAKANA_HIRAGANA = 96;

export const parseKatakanaToHiragana = oriStr => {
  return oriStr
    .split("")
    .map(letter => {
      const code10 = letter.charCodeAt(0);
      return code10 > KATAKANA_START && code10 < KATAKANA_END
        ? String.fromCharCode(code10 - DIFF_KATAKANA_HIRAGANA)
        : letter;
    })
    .join("");
};
