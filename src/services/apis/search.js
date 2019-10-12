import { members } from "../../constants/member";
import { photoClass } from "../../constants/photoClass";
import { parseKatakanaToHiragana } from "./parseGanaCode";

export const search = (photoInts, keyword) => {
  const keywordRegexp = new RegExp(
    parseKatakanaToHiragana(keyword.toLowerCase())
  );
  return photoInts.filter(photoInt => {
    return (
      keywordRegexp.exec(photoInt.photo_member.toLowerCase()) !== null || // En
      keywordRegexp.exec(
        members.keyakizaka.find(
          member => member.member_name_en === photoInt.photo_member
        ).member_name // Kanji
      ) !== null ||
      keywordRegexp.exec(
        members.keyakizaka.find(
          member => member.member_name_en === photoInt.photo_member
        ).member_name_gana // Gana
      ) !== null ||
      keywordRegexp.exec(
        parseKatakanaToHiragana(
          photoClass
            .find(photoCl => photoCl.photo_id === photoInt.photo_costume) //Costume
            .photo_name.toLowerCase()
        )
      ) !== null
    );
  });
};
