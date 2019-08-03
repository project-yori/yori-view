import React, { Component } from 'react'

import Header from './Header';
import PhotoList from './PhotoList';
import CreateButton from './create/CreateButton';
import ActionSheet from './ActionSheet';
import Footer from './Footer';

export default class PhotoListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      showActionSheet: false,
    };
  }
  showActionSheet = () => {
    this.setState(prevState => ({showActionSheet: !prevState.showActionSheet}))
  };

  render() {
    return (
      <div className='photo-list-view'>
        <Header>ALBUM_NAME</Header>
        <PhotoList />
        <CreateButton showActionSheet={this.showActionSheet}/>
        <div 
          className={this.state.showActionSheet ? 'dimmed-view show' : 'dimmed-view'}
          onClick={() => this.showActionSheet()}
        />
        <ActionSheet 
          isShow={this.state.showActionSheet}
          showActionSheet={this.showActionSheet}
        />
        <Footer />
      </div>
    )
  }
}
