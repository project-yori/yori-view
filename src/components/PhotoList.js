import React, { Component } from 'react'

import Header from './Header';
import PhotoItem from './PhotoItem';
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

  renderPhotoList = () => {
    const node = this.state.photoList.map((photo, i) => {
      return (
        <PhotoItem photo={photo} key={`photo-item-${i}`}/>
      )
    })
    return node;
  }

  render() {
    return (
      <div className='photo-list-view'>
        <Header />
        <div className='photo-list-wrapper'>
          {this.renderPhotoList()}
        </div>
        <CreateButton />
        <Footer />
      </div>
    )
  }
}
