import { SORT_TYPES } from "../types";
import { members } from "../../constants/member";

export const sort = (list, sortType) => {
  console.log(list);

  switch (sortType) {
    case SORT_TYPES.CREATE_TIME:
      return list.sort(sortByCreateTime);
    case SORT_TYPES.MEMBER:
      return list.sort(sortByMember);
    case SORT_TYPES.COSTUME:
      // TODO: waiting for costume release date data
      return list;
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

const sortByCostume = (itemA, itemB) => {};
