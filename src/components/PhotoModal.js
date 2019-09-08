import React from "react";
import { connect } from "react-redux";
import { ExposurePlus1, ExposureNeg1 } from "@material-ui/icons";

import { hidePhotoModal, editPhotoNumber } from "../services/actions";
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
  hidePhotoModal,
  editPhotoNumber
};

const renderPhotoModalContents = (photoModal, photos, editPhotoNumber, hidePhotoModal) => {
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
      <div className="photo-modal-number-container">
        <button
          className="photo-modal-number-button"
          onClick={() =>
            handleClickPhotoNumberButton(
              { ...photoModal, photo_number: photoNumber - 1 },
              editPhotoNumber,
              hidePhotoModal
            )
          }
        >
          <ExposureNeg1 />
        </button>
        <h3>{`${photoNumber} 枚`}</h3>
        <button
          className="photo-modal-number-button"
          onClick={() =>
            handleClickPhotoNumberButton(
              { ...photoModal, photo_number: photoNumber + 1 },
              editPhotoNumber,
              hidePhotoModal
            )
          }
        >
          <ExposurePlus1 />
        </button>
      </div>
    </div>
  );
};

const handleClickPhotoNumberButton = (photo, editPhotoNumber, hidePhotoModal) => {
  editPhotoNumber(photo);
  if (photo.photo_number === 0) hidePhotoModal();  
};

const PhotoModal = ({ photos, photoModal, hidePhotoModal, editPhotoNumber }) => {
  return (
    <div
      className={
        photoModal === null
          ? "photo-modal-dimmed-view"
          : "photo-modal-dimmed-view show"
      }
      onClick={event => {
        if (/photo-modal-dimmed-view/.exec(event.target.className) !== null)
          hidePhotoModal();
      }}
    >
      {renderPhotoModalContents(photoModal, photos, editPhotoNumber, hidePhotoModal)}
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
