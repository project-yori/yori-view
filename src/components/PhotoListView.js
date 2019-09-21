import React, { Component } from "react";

import Header from "./Header";
import PhotoList from "./PhotoList";
import PhotoModal from "./PhotoModal";
import CreateFloatPlusButton from "./create/CreateFloatPlusButton";
import Footer from "./Footer";

export default class PhotoListView extends Component {
  render() {
    return (
      <div className="photo-list-view">
        <Header>YORI</Header>
        <PhotoList />
        <PhotoModal />
        <CreateFloatPlusButton />
        <Footer />
      </div>
    );
  }
}
