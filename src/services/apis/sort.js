import { SORT_TYPES } from "../types";
import { members } from "../../constants/member";
import { photoClass } from "../../constants/photoClass";

export const sort = (list, sortType) => {
  switch (sortType) {
    case SORT_TYPES.CREATE_TIME:
      return list.sort(sortByCreateTime);
    case SORT_TYPES.CREATE_TIME_REVERSE:
      return list.sort(sortByCreateTime).reverse();
    case SORT_TYPES.MEMBER:
      return list.sort(sortByMember);
    case SORT_TYPES.MEMBER_REVERSE:
      return list.sort(sortByMember).reverse();
    case SORT_TYPES.COSTUME:
      return list.sort(sortByCostume);
    case SORT_TYPES.COSTUME_REVERSE:
      return list.sort(sortByCostume).reverse();
    default:
      break;
  }
};

const sortByCreateTime = (itemA, itemB) => {
  return (
    Math.max(itemB.photoCreateTime, itemB.photoUpdateTime) -
    Math.max(itemA.photoCreateTime, itemA.photoUpdateTime)
  );
};

const sortByMember = (itemA, itemB) => {
  const itemAMember = members.keyakizaka.find(member => {
    return member.member_name_en === itemA.photoMember;
  });
  const itemBMember = members.keyakizaka.find(member => {
    return member.member_name_en === itemB.photoMember;
  });
  if (itemAMember.member_name_gana[0] > itemBMember.member_name_gana[0])
    return 1;
  if (itemAMember.member_name_gana[0] < itemBMember.member_name_gana[0])
    return -1;
  return 0;
};

const sortByCostume = (itemA, itemB) => {
  const itemAPhoto = photoClass.find(photo => {
    return photo.photo_id === itemA.photoCostume;
  });
  const itemBPhoto = photoClass.find(photo => {
    return photo.photo_id === itemB.photoCostume;
  });
  if (itemAPhoto.photo_release_index > itemBPhoto.photo_release_index) return 1;
  if (itemAPhoto.photo_release_index < itemBPhoto.photo_release_index)
    return -1;

  // If same costume, sort by member
  const itemAMember = members.keyakizaka.find(member => {
    return member.member_name_en === itemA.photoMember;
  });
  const itemBMember = members.keyakizaka.find(member => {
    return member.member_name_en === itemB.photoMember;
  });
  if (itemAMember.member_name_gana[0] > itemBMember.member_name_gana[0])
    return 1;
  if (itemAMember.member_name_gana[0] < itemBMember.member_name_gana[0])
    return -1;
  return 0;
};
