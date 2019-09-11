import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Header from './Header';
import PhotoList from './PhotoList';
import PhotoModal from "./PhotoModal";
import CreateFloatPlusButton from './create/CreateFloatPlusButton';
import ActionSheet from './ActionSheet';
import Footer from './Footer';

export default class PhotoListView extends Component {
  render() {
    return (
      <div className='photo-list-view'>
        <Header>YORI</Header>
        <PhotoList />
        <PhotoModal />
        <Link to="/create/group">
          <CreateFloatPlusButton />
        </Link>
        <Footer />
      </div>
    )
  }
}
