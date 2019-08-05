import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Close } from "@material-ui/icons";
import { Slide } from "@material-ui/core";

import {
  createPhotosAddMember,
  createPhotosCostume,
  createPhotoTypeSelMemType,
  createPhotoTypeNum
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
  createPhotoTypeNum
};

export class CreateType extends Component {
  static propTypes = {
    prop: PropTypes
  };
  constructor(props) {
    super(props);
    this.state = {
      curr_selected_member: null,
      curr_selected_type: null
    };
  }

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
      if (this.props.member.hasOwnProperty(member.member_name_en))
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
    return (
      <div className="photo-type-number-selector-container">
        <div className="photo-type-number-display">
          <span>{member.member_name}</span>
          {this.renderTypeSelectBtn(member.member_name_en)}
        </div>
        <div
          className={
            this.state.curr_selected_member === member.member_name_en
              ? "photo-type-number-selector active"
              : "photo-type-number-selector"
          }
        >
          <div className="photo-type-number-selector-range">
            <button
              onClick={() => {
                const newNumber = this.props.member[member.member_name_en].photoTypeNumber[this.state.curr_selected_type]-1;
                if(newNumber>=0) this.props.createPhotoTypeNum(member.member_name_en, this.state.curr_selected_type, newNumber);
              }}
            >-1</button>
            <input
              type="range"
              min="0"
              max="20"
              step="1"
              value={this.props.member[member.member_name_en].photoTypeNumber[this.state.curr_selected_type]}
              onChange={event => {
                this.props.createPhotoTypeNum(member.member_name_en, this.state.curr_selected_type, event.target.value)
              }}
            />
            <button
              onClick={() => {
                const newNumber = this.props.member[member.member_name_en].photoTypeNumber[this.state.curr_selected_type]+1;
                if(newNumber<=20) this.props.createPhotoTypeNum(member.member_name_en, this.state.curr_selected_type, newNumber);
              }}
            >+1</button>
          </div>
          <button
            className="photo-type-number-selector-closeBtn"
            onClick={() =>
              this.setState({
                curr_selected_member: null,
                curr_selected_type: null
              })
            }
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
        this.state.curr_selected_type === type &&
        this.state.curr_selected_member === member
      )
        className += " active";
      return (
        <button
          key={`photo-type-number-btn-${i}`}
          className={className}
          onClick={() => {
            this.setState({
              curr_selected_member: member,
              curr_selected_type: type
            });
          }}
        >
          {this.props.member[member].photoTypeNumber[type]}
        </button>
      );
    });
    return <div className="photo-type-number-btn-container">{btnNodes}</div>;
  };

  componentWillMount() {
    // Auto show first member's type-number selector
    const firstMember = members.keyakizaka.find(member => {
      return this.props.member.hasOwnProperty(member.member_name_en);
    });
    console.log("firstMember", firstMember);
    this.setState({
      curr_selected_member: firstMember.member_name_en,
      curr_selected_type: "yori"
    });
  };
  
  isNextStepBtnDisabled = () => {    
    const zeroPhotoSubmitted = Object.entries(this.props.member).find(([key, member])=>{
      return Object.entries(member.photoTypeNumber).find(([key, number])=>{
        return number!==0
      })
    })===undefined;
    
    return zeroPhotoSubmitted;
  }

  render() {

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
              disabled={this.isNextStepBtnDisabled()}
              className={
                this.isNextStepBtnDisabled()
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
