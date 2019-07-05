import React, { Component } from 'react'

import '../style/PhotoItem.css';

export default class PhotoItem extends Component {

  getTextClass = (text) => {
    if (text && text.length > 9) {
      return 'extra-small-text';
    } else if (text && text.length > 6) {
      return 'small-text';
    }
    return '';
  }

  render() {
    const photo = this.props.photo;

    return (
      <div className='photo-item-wrapper'>
        <div className='photo-image'>{photo.photo_member[0]}</div>
        <div className='photo-data'>
          <div className='photo-data-meta'>
          <h2 className={'photo-name ' + (this.getTextClass(photo.photo_member))}>{photo.photo_member}</h2>
          <h2 className='photo-type'>{photo.photo_type}</h2>
          <h3 className='photo-costume'>{photo.photo_costume}</h3>
          </div>
          <div className='photo-data-number'>
            <h3>{photo.photo_number}</h3>
          </div>
        </div>
      </div>
    )
  }
}
