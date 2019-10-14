import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  SwipeableList,
  SwipeableListItem
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";

import PhotoItem from "./PhotoItem";
import SearchIndicator from "./SearchIndicator";

import { sort } from "../services/apis/sort";
import { search } from "../services/apis/search";
import { convertString } from "../services/apis/convertString";
import { getPhotos, editPhotoNumber } from "../services/actions";
import { STORE_TYPES } from "../services/types";
import { STRING } from "../constants/strings";
import "../style/PhotoList.css";
import { members } from "../constants/member";
import { photoClass } from "../constants/photoClass";
import { type } from "../constants/type";

const mapDispatchToProps = {
  getPhotos,
  editPhotoNumber
};

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.TOP.PHOTOS]:
      state[STORE_TYPES.STATE.TOP.META][STORE_TYPES.STATE.TOP.PHOTOS],
    [STORE_TYPES.STATE.TOP.SORT_TYPE]:
      state[STORE_TYPES.STATE.TOP.META][STORE_TYPES.STATE.TOP.SORT_TYPE],
    [STORE_TYPES.STATE.TOP.KEYWORD_SEARCH]:
      state[STORE_TYPES.STATE.TOP.META][STORE_TYPES.STATE.TOP.KEYWORD_SEARCH]
  };
};

const PhotoList = ({
  getPhotos,
  editPhotoNumber,
  photos,
  sortType,
  keywordSearch
}) => {
  useEffect(() => getPhotos(), []);

  const countSameClassPhotoNum = photoInts => {
    const thisInt = photoInts.pop();
    const photoItem = {
      photoMember: thisInt.photo_member,
      photoCostume: thisInt.photo_costume,
      photoType: thisInt.photo_type,
      photoNumber: 1,
      photoCreateTime: thisInt.photo_create_time,
      photoUpdateTime: thisInt.hasOwnProperty("photo_update_time")
        ? thisInt.photo_update_time
        : 0
    };
    const restPhotoInts = [];
    photoInts.forEach(photoInt => {
      if (
        photoInt.photo_member !== photoItem.photoMember ||
        photoInt.photo_costume !== photoItem.photoCostume ||
        photoInt.photo_type !== photoItem.photoType
      ) {
        restPhotoInts.push(photoInt);
      } else {
        photoItem.photoNumber++;
        photoItem.photoCreateTime = Math.max(
          photoInt.photo_create_time,
          photoItem.photoCreateTime
        );
        if (photoInt.photo_update_time > photoItem.photoUpdateTime)
          photoItem.photoUpdateTime = photoInt.photo_update_time;
      }
    });
    return restPhotoInts.length !== 0
      ? [...countSameClassPhotoNum(restPhotoInts), photoItem]
      : [photoItem];
  };

  const [numPhotosSearchResult, setNumPhotosSearchResult] = useState(0);
  const [numTypesSearchResult, setNumTypesSearchResult] = useState(0);

  const renderPhotoList = () => {
    const photoInts =
      keywordSearch === "" ? [...photos] : search([...photos], keywordSearch);
    let photoItems = [];
    if (photoInts.length !== 0) {
      photoItems = countSameClassPhotoNum([...photoInts]);
    }
    sort(photoItems, sortType);

    if (numPhotosSearchResult !== photoInts.length)
      setNumPhotosSearchResult(photoInts.length);
    if (numTypesSearchResult !== photoItems.length)
      setNumTypesSearchResult(photoItems.length);

    const noPhotoItemsTxt = keywordSearch === "" ? "" : STRING.NO_SEARCH_RESULT;

    return photoItems.length === 0 ? (
      <div className="no-photo-item-msg-wrapper">
        <h3 className="no-photo-item-msg-txt">{noPhotoItemsTxt}</h3>
      </div>
    ) : (
      photoItems.map((photoItem, i) => {
        return (
          <SwipeableListItem
            key={`photo-item-${i}`}
            swipeLeft={{
              content: (
                <div className="photo-item-swipe-del-div">
                  <span></span>
                  <h3>削除</h3>
                </div>
              ),
              action: () => {
                const confirmDelete = window.confirm(
                  convertString(STRING.DELETE_PHOTO_COMFIRM_DIALOG, {
                    member: members.keyakizaka.find(
                      member => member.member_name_en === photoItem.photoMember
                    ).member_name,
                    costume: photoClass.find(
                      photoCl => photoCl.photo_id === photoItem.photoCostume
                    ).photo_name,
                    type: type[photoItem.photoType].kanji,
                    number: photoItem.photoNumber
                  })
                );
                if (confirmDelete === true) {
                  editPhotoNumber({
                    photo_member: photoItem.photoMember,
                    photo_costume: photoItem.photoCostume,
                    photo_type: photoItem.photoType,
                    photo_number: 0
                  });
                }
              }
            }}
          >
            <PhotoItem photo={photoItem} />
          </SwipeableListItem>
        );
      })
    );
  };

  return (
    <div className="photo-list-wrapper">
      <SearchIndicator
        numPhotosSearchResult={numPhotosSearchResult}
        numTypesSearchResult={numTypesSearchResult}
      />
      <SwipeableList>{renderPhotoList()}</SwipeableList>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoList);
