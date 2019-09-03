import React from "react";
import { connect } from "react-redux";

import { hidePhotoModal } from "../services/actions";
import { members } from "../constants/member";
import { photoClass } from "../constants/photoClass";
import { type } from "../constants/type";
import "../style/PhotoModal.css";

const mapStateToProps = state => {
  const { photos, photoModal } = state.top;
  return {
    photos,
    photoModal
  };
};

const mapDispatchToProps = {
  hidePhotoModal
};

const renderPhotoModalContents = (photoModal, photos) => {
  if (photoModal === null) return null;

  const memberName = members.keyakizaka.find(member => {
    return member.member_name_en === photoModal.photo_member;
  }).member_name;
  const costumeName = photoClass.find(photo => {
    return photo.photo_id === photoModal.photo_costume;
  }).photo_name;

  const photoNumber = photos.reduce((acc, curr) => {
    if (
      curr.photo_member === photoModal.photo_member &&
      curr.photo_costume === photoModal.photo_costume &&
      curr.photo_type === photoModal.photo_type
    )
      return acc + 1;
    else return acc;
  }, 0);

  return (
    <div className="photo-modal-container">
      <h2>{memberName}</h2>
      <h3>{costumeName}</h3>
      <h3>{type[photoModal.photo_type].kanji}</h3>
      <h3>{`${photoNumber} 枚`}</h3>
    </div>
  );
};

const PhotoModal = ({ photos, photoModal, hidePhotoModal }) => {
  return (
    <div
      className={
        photoModal === null
          ? "photo-modal-dimmed-view"
          : "photo-modal-dimmed-view show"
      }
      onClick={() => hidePhotoModal()}
    >
      {renderPhotoModalContents(photoModal, photos)}
    </div>
  );
};

PhotoModal.defaultProps = {
  photoModal: null
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoModal);
