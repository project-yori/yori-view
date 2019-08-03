import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  createPhotosAddMember,
  createPhotosCostume
} from "../../services/actions";
import { ACTION_TYPES, STORE_TYPES } from "../../services/types";

import { members } from "../../constants/members";
import { costumes } from "../../constants/costumes";

import "../../style/create/CreateType.css";

export class CreateType extends Component {
  static propTypes = {
    prop: PropTypes
  };

  renderCosTitle = () => {
    let title = "PHOTO_COSTUME";
    costumes.forEach(cos => {
      if (cos.cos_id === this.props.costume) title = cos.cos_name;
    });
    return <h3>{title}</h3>;
  };

  renderMemListUl = () => {
    let memSelected = [];
    members.keyakizaka.forEach((member) => {
      if(this.props.member.includes(member.member_name_en)) memSelected.push(member);
    });
    const liNodes = memSelected.map((member, i) => {
      console.log(member);
      
      return (
        <li key={`member-item-${i}`}>
          {this.renderTypeNumSelectorItem(member)}
        </li>
      );
    });
    return (
      <div className='create-type-member-list-container'>
        <ul>
          <li>
              <div className='create-type-member-list-header'>
                <span></span>
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
    )
  };

  renderTypeNumSelectorItem = (member) => {
    return (
      <div className='photo-type-number-selector-container'>
        <div className='photo-type-number-display'>
          <span>{member.member_name}</span>
          <div className='photo-type-number-btn-container'>
            <button className='photo-type-number-btn yori'>0</button>
            <button className='photo-type-number-btn chu'>0</button>
            <button className='photo-type-number-btn hiki'>0</button>
          </div>

        </div>
        <div className='photo-type-number-selector'>

        </div>
      </div>
    );
  };
  

  render() {
    const nextStepBtnDisabled = true;

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

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.CREATE.GROUP]: state.create.group,
    [STORE_TYPES.STATE.CREATE.COSTUME]: state.create.costume,
    [STORE_TYPES.STATE.CREATE.MEMBER]: state.create.member
  };
};

const mapDispatchToProps = {
  createPhotosAddMember,
  createPhotosCostume
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateType);
