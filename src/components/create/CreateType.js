import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Close } from "@material-ui/icons";

import {
  createPhotosAddMember,
  createPhotosCostume,
  createPhotoTypeSelMemType
} from "../../services/actions";
import { ACTION_TYPES, STORE_TYPES } from "../../services/types";

import { members } from "../../constants/member";
import { photoClass } from "../../constants/photoClass";

import "../../style/create/CreateType.css";

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.CREATE.GROUP]: state.create.group,
    [STORE_TYPES.STATE.CREATE.COSTUME]: state.create.costume,
    [STORE_TYPES.STATE.CREATE.MEMBER]: state.create.member,
    [STORE_TYPES.STATE.CREATE.CURR_SELECTED_MEM_TYPE]:
      state.create.curr_selected_member_type
  };
};

const mapDispatchToProps = {
  createPhotosAddMember,
  createPhotosCostume,
  createPhotoTypeSelMemType
};

export class CreateType extends Component {
  static propTypes = {
    prop: PropTypes
  };

  renderCosTitle = () => {
    let title = "PHOTO_COSTUME";
    photoClass.forEach(photo => {
      if (photo.photo_id === this.props.costume) title = photo.photo_name;
    });
    return <h3>{title}</h3>;
  };

  renderMemListUl = () => {
    let memSelected = [];
    members.keyakizaka.forEach(member => {
      if (
        this.props.member.find(item => {
          return item.photo_member === member.member_name_en;
        }) !== undefined
      )
        memSelected.push(member);
    });
    const liNodes = memSelected.map((member, i) => {
      return (
        <li key={`member-item-${i}`}>
          {this.renderTypeNumSelectorItem(member)}
        </li>
      );
    });
    return (
      <div className="create-type-member-list-container">
        <ul>
          <li>
            <div className="create-type-member-list-header">
              <span />
              <div>
                <span>ヨリ</span>
                <span>チュウ</span>
                <span>ヒキ</span>
              </div>
            </div>
          </li>
          {liNodes}
        </ul>
      </div>
    );
  };

  renderTypeNumSelectorItem = member => {
    // const isSelectedType = this.props.curr_selected_member_type.member==
    return (
      <div className="photo-type-number-selector-container">
        <div className="photo-type-number-display">
          <span>{member.member_name}</span>
          {/* <div className="photo-type-number-btn-container">
            <button className="photo-type-number-btn yori">0</button>
            <button className="photo-type-number-btn chu">0</button>
            <button className="photo-type-number-btn hiki">0</button>
          </div> */}
          {this.renderTypeSelectBtn(member.member_name_en)}
        </div>
        <div
          className={
            this.props.curr_selected_member_type.member ===
            member.member_name_en
              ? "photo-type-number-selector active"
              : "photo-type-number-selector"
          }
        >
          <div />
          <button 
            className="photo-type-number-selector-closeBtn"
            onClick={() => this.props.createPhotoTypeSelMemType(undefined, undefined)}
          >
            <Close />
          </button>
        </div>
      </div>
    );
  };

  typesInThisPhoto = photoClass.find(photo => {
    return photo.photo_id === this.props.costume;
  }).photo_type;

  renderTypeSelectBtn = member => {
    const btnNodes = this.typesInThisPhoto.map((type, i) => {
      let className = `photo-type-number-btn ${type}`;
      if (
        this.props.curr_selected_member_type.type === type &&
        this.props.curr_selected_member_type.member === member
      )
        className += " active";
      return (
        <button 
          key={`photo-type-number-btn-${i}`} 
          className={className}
          onClick={() => this.props.createPhotoTypeSelMemType(member, type)}
        >
          0
        </button>
      );
    });
    return <div className="photo-type-number-btn-container">{btnNodes}</div>;
  };

  render() {
    const nextStepBtnDisabled = true;

    // Auto show first member's type-number selector
    if (this.props.curr_selected_member_type.member === null){
      this.props.createPhotoTypeSelMemType(
        this.props.member[0].photo_member,
        "yori"
      );
    }

    return (
      <div className="create-type-container">
        {this.renderCosTitle()}
        {this.renderMemListUl()}
        <div className="main-button-container">
          <Link to="/create/member">
            <button className="main-button">もどる</button>
          </Link>
          <Link to="/create/type">
            <button
              disabled={nextStepBtnDisabled}
              className={
                nextStepBtnDisabled
                  ? "main-button disabled"
                  : "main-button next"
              }
            >
              登録
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateType);
