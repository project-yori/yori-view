import React, { Component } from "react";
import { connect } from "react-redux";

import PhotoItem from "./PhotoItem";

import { sort } from "../services/apis/sort";
import { getPhotos } from "../services/actions";
import { STORE_TYPES } from "../services/types";
import "../style/PhotoList.css";

const mapDispatchToProps = {
  getPhotos
};

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.TOP.PHOTOS]:
      state[STORE_TYPES.STATE.TOP.META][STORE_TYPES.STATE.TOP.PHOTOS],
    [STORE_TYPES.STATE.TOP.SORT_TYPE]:
      state[STORE_TYPES.STATE.TOP.META][STORE_TYPES.STATE.TOP.SORT_TYPE]
  };
};

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showActionSheet: false
    };
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  countSameClassPhotoNum = photoInts => {
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
      ? [...this.countSameClassPhotoNum(restPhotoInts), photoItem]
      : [photoItem];
  };

  renderPhotoList = () => {
    const photoInts = [...this.props.photos];
    let photoItems = [];
    if (photoInts.length !== 0) {
      photoItems = this.countSameClassPhotoNum(photoInts);
    }
    sort(photoItems, this.props.sortType);
    console.log(photoItems);

    const nodes = photoItems.map((photoItem, i) => {
      return <PhotoItem photo={photoItem} key={`photo-item-${i}`} />;
    });

    return nodes;
  };

  render() {
    return <div className="photo-list-wrapper">{this.renderPhotoList()}</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoList);
