import React, { Component } from 'react'

import { type }from '../constants/type';
import { members } from '../constants/member';
import { photoClass } from "../constants/photoClass";

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
    const memberName = members.keyakizaka.find(item => {
      return item.member_name_en === photo.photoMember
    }).member_name;
    
    const costume = photoClass.find(item => {
      return item.photo_id === photo.photoCostume
    }).photo_name;

    return (
      <div className='photo-item-wrapper' onClick={() => this.props.onClick()}>
        <div className='photo-image'>{memberName[0]}</div>
        <div className='photo-data'>
          <div className='photo-data-meta'>
          <h2 className={'photo-name ' + (this.getTextClass(memberName))}>{memberName}</h2>
          <h2 className='photo-type'>{type[photo.photoType].kanji}</h2>
          <h3 className='photo-costume'>{costume}</h3>
          </div>
          <div className='photo-data-number'>
            <h3>{photo.photoNumber}</h3>
          </div>
        </div>
      </div>
    )
  }
}
