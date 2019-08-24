import React, { Component } from "react";
import { connect } from "react-redux";

import {
  createPhotosAddMember,
  createPhotosCostume,
  createPhotoTypeNum,
  createPhotoInstance,
  createClear
} from "../../services/actions";
import { STORE_TYPES } from "../../services/types";

import { members } from "../../constants/member";
import { photoClass } from "../../constants/photoClass";
import { createPhoto } from "../../services/apis/createPhoto";

import CreateFooterButton from "./CreateFooterButton";
import CreateTypeNumberSelectorItem from "./CreateTypeNumberSelectorItem";

import "../../style/create/CreateType.css";

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.CREATE.GROUP]: state.create.group,
    [STORE_TYPES.STATE.CREATE.COSTUME]: state.create.costume,
    [STORE_TYPES.STATE.CREATE.MEMBER]: state.create.member
  };
};

const mapDispatchToProps = {
  createPhotosAddMember,
  createPhotosCostume,
  createPhotoTypeNum,
  createPhotoInstance,
  createClear
};

export class CreateType extends Component {
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

  handleClickTypeInSelectorItem = (member, type) => {
    this.setState({
      curr_selected_member: member,
      curr_selected_type: type
    });
  };

  handleClickNumPlusMinusButton = option => {
    const newNumber =
      this.props.member[this.state.curr_selected_member].photoTypeNumber[
        this.state.curr_selected_type
      ] + option;
    if (
      (option === 1 && newNumber <= 20) ||
      (option === -1 && newNumber >= 0)
    ) {
      this.props.createPhotoTypeNum(
        this.state.curr_selected_member,
        this.state.curr_selected_type,
        newNumber
      );
    }
  };

  handleChangeSelectorValue = event => {
    this.props.createPhotoTypeNum(
      this.state.curr_selected_member,
      this.state.curr_selected_type,
      parseInt(event.target.value)
    );
  };

  renderTypeNumSelectorItem = member => {
    return (
      <CreateTypeNumberSelectorItem
        thisMember={member}
        isCurrSelected={() => {
          return this.state.curr_selected_member === member.member_name_en
            ? this.state.curr_selected_type
            : false;
        }}
        clickTypeAction={(member, type) =>
          this.handleClickTypeInSelectorItem(member, type)
        }
        clickNumPlusMinusAction={this.handleClickNumPlusMinusButton}
        changeSelectorValue={this.handleChangeSelectorValue}
      />
    );
  };

  componentWillMount() {
    // Auto show first member's type-number selector
    const firstMember = members.keyakizaka.find(member => {
      return this.props.member.hasOwnProperty(member.member_name_en);
    });
    this.setState({
      curr_selected_member: firstMember.member_name_en,
      curr_selected_type: "yori"
    });
  }

  isNextStepBtnDisabled = () => {
    const zeroPhotoSubmitted =
      Object.entries(this.props.member).find(([key, member]) => {
        return Object.entries(member.photoTypeNumber).find(([key, number]) => {
          return number !== 0;
        });
      }) === undefined;

    return zeroPhotoSubmitted;
  };

  handleClickNextBtn = () => {
    const { group, costume, member } = this.props;
    const payload = createPhoto(group, costume, member);
    console.log(payload);
    this.props.createPhotoInstance(payload);
    this.props.createClear();
  };

  render() {
    return (
      <div className="create-type-container">
        {this.renderCosTitle()}
        {this.renderMemListUl()}
        <CreateFooterButton
          prevPage="/create/member"
          nextPage="/"
          enableNext={!this.isNextStepBtnDisabled()}
          clickAction={this.handleClickNextBtn}
        >
          {"もどる"}
          {"登録"}
        </CreateFooterButton>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateType);
