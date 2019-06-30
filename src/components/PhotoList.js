import React, { Component } from 'react'

import Header from './Header';
import Footer from './Footer';

import '../style/PhotoList.css';

export default class PhotoList extends Component {
  render() {
    return (
      <div className='photo-list-view'>
        <Header />
        <div className='photo-list'></div>
        <Footer />
      </div>
    )
  }
}
