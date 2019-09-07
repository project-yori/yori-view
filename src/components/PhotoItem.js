import React from "react";
import { connect } from "react-redux";

import { type } from "../constants/type";
import { members } from "../constants/member";
import { photoClass } from "../constants/photoClass";

import { displayPhotoModal } from "../services/actions";

import "../style/PhotoItem.css";

const mapStateToProps = (state, ownProps) => {
  const { photo } = ownProps;
  return {
    photo
  };
};

const mapDispatchToProps = {
  displayPhotoModal
};

const getTextClass = text => {
  if (text && text.length > 9) {
    return "extra-small-text";
  } else if (text && text.length > 6) {
    return "small-text";
  }
  return "";
};

const handleClickPhotoItemWrapper = (
  member,
  costume,
  type,
  displayPhotoModal
) => {
  displayPhotoModal(member, costume, type);
};

const PhotoItem = ({ photo, displayPhotoModal }) => {
  const memberName = members.keyakizaka.find(item => {
    return item.member_name_en === photo.photoMember;
  }).member_name;

  const costume = photoClass.find(item => {
    return item.photo_id === photo.photoCostume;
  }).photo_name;

  return (
    <div
      className="photo-item-wrapper"
      onClick={() =>
        handleClickPhotoItemWrapper(
          photo.photoMember,
          photo.photoCostume,
          photo.photoType,
          displayPhotoModal
        )
      }
    >
      <div className="photo-image">{memberName[0]}</div>
      <div className="photo-data">
        <div className="photo-data-meta">
          <h2 className={"photo-name " + getTextClass(memberName)}>
            {memberName}
          </h2>
          <h2 className="photo-type">{type[photo.photoType].kanji}</h2>
          <h3 className="photo-costume">{costume}</h3>
        </div>
        <div className="photo-data-number">
          <h3>{photo.photoNumber}</h3>
        </div>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoItem);
