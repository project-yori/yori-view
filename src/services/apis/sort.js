import { SORT_TYPES } from "../types";

export const sort = (list, sortType) => {
  switch (sortType) {
    case SORT_TYPES.CREATE_TIME:
      return list.sort(sortByCreateTime);
    case SORT_TYPES.MEMBER:
      return list.sort(sortByMember);
    case SORT_TYPES.COSTUME:
      return list.sort(sortByCostume);
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

const sortByMember = (itemA, itemB) => {};

const sortByCostume = (itemA, itemB) => {};
