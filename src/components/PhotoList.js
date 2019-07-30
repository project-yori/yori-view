import React, { Component } from 'react';
import { connect } from 'react-redux';

import PhotoItem from './PhotoItem';

import { STORE_TYPES } from '../services/types';
import '../style/PhotoList.css';

const mapDispatchToProps = {

};

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.TOP.PHOTOS]: state.top.photos
  }
};

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showActionSheet: false,
    };
  }

  renderPhotoList = () => {
    const node = this.props.photos.map((photo, i) => {
      return <PhotoItem photo={photo} key={`photo-item-${i}`} />;
    });
    return node;
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
