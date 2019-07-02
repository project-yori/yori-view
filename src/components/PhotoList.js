import React, { Component } from 'react'

import Header from './Header';
import Footer from './Footer';
import CreateButton from './CreateButton';

import getDummyPhoto from '../logic/getPhoto';

import '../style/PhotoList.css';

export default class PhotoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      photoList: [],
    };
  }
  componentWillMount(){
    let dummy = [];
    for(let i = 1; i < 12; i++){
      dummy.unshift(getDummyPhoto(`dummyPhoto${i}`));
    }
    this.setState({photoList: dummy});
  }

  getTextClass(text) {
    if (text && text.length > 9) {
      return 'extra-small-text';
    } else if (text && text.length > 6) {
      return 'small-text';
    }
    return '';
  }

  renderPhotoList = () => {
    const node = this.state.photoList.map((photo, i) => {
      return (
        <div key={`photo-${i}`} className='photo-wrapper'>
          <div className='photo-avatar'>{photo.photo_member[0]}</div>
          <div className='photo-data'>
            <div className='photo-data-name'>
            <h2 className={'name ' + (this.getTextClass(photo.photo_member))}>{photo.photo_member}</h2>
            <h2 className='type'>{photo.photo_type}</h2>
            <h3 className='costume'>{photo.photo_costume}</h3>
            </div>
            <div className='photo-data-number'>
              <h3>{photo.photo_number}</h3>
            </div>
          </div>
        </div>
      )
    })
    return node;
  }

  render() {
    return (
      <div className='photo-list-view'>
        <Header />
        <div className='photo-list'>
          {this.renderPhotoList()}
        </div>
        <CreateButton />
        <Footer />
      </div>
    )
  }
}
