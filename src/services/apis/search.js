import { members } from "../../constants/member";
import { photoClass } from "../../constants/photoClass";

export const search = (photoInts, keyword) => {
  const keywordRegexp = new RegExp(keyword);
  return photoInts.filter(photoInt => {
    return (
      keywordRegexp.exec(photoInt.photo_member) !== null || // En
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
        photoClass.find(photoCl => photoCl.photo_id === photoInt.photo_costume) //Costume
          .photo_name
      ) !== null
    );
  });
};
