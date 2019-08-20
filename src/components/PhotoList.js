import React, { Component } from 'react';
import { connect } from 'react-redux';

import PhotoItem from './PhotoItem';

import { getPhotos } from '../services/actions';
import { STORE_TYPES } from '../services/types';
import '../style/PhotoList.css';

const mapDispatchToProps = {
  getPhotos
};

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.TOP.PHOTOS]: state[STORE_TYPES.STATE.TOP.META][STORE_TYPES.STATE.TOP.PHOTOS]
  }
};

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showActionSheet: false,
    };
  }

  componentDidMount(){
    this.props.getPhotos();
  }

  countNum = photoInts => {
    const thisInt = photoInts.pop();
    const photoItem = {
      photoMember: thisInt.photo_member,
      photoCostume: thisInt.photo_costume,
      photoType: thisInt.photo_type,
      photoNumber: 1
    };
    photoInts.forEach((photoInt, i) => {
      if(
        photoInt.photo_member === photoItem.photoMember &&
        photoInt.photo_costume === photoItem.photoCostume &&
        photoInt.photo_type === photoItem.photoType
      ) {
        photoInts.splice(i, 1);
        photoItem.photoNumber++
      }        
    });        
    return photoInts.length !== 0 
      ? [...this.countNum(photoInts), photoItem]
      : [photoItem]
    ;
  }

  renderPhotoList = () => {
    const photoInts = [...this.props.photos];
    let photoItems = [];
    if(photoInts.length!==0) {
      photoItems = this.countNum(photoInts);
    }
    const nodes = photoItems.map((photoItem, i) => {
      return (
        <PhotoItem
          photo={photoItem}
          key={`photo-item-${i}`}
        />
      )
    });
    return nodes;
  };
  
  render() {
    return (
        <div className='photo-list-wrapper'>
          {this.renderPhotoList()}
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
