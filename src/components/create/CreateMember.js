import React, { Component } from "react";
import { connect } from "react-redux";

import { STORE_TYPES } from "../../services/types";
import {
  createPhotosCostume,
  createPhotosAddMember,
  createPhotosDelMember
} from "../../services/actions";
import CreateFooterButton from "./CreateFooterButton";
import CreateCircleSelectButton from "./CreateCircleSelectButton";

import "../../style/create/CreateMember.css";
import { cos_mem_map } from "../../constants/cos_mem_map";
import { members } from "../../constants/member";
import { photoClass } from "../../constants/photoClass";

const mapDispatchToProps = {
  createPhotosCostume,
  createPhotosAddMember,
  createPhotosDelMember
};

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.CREATE.GROUP]: state.create.group,
    [STORE_TYPES.STATE.CREATE.COSTUME]: state.create.costume,
    [STORE_TYPES.STATE.CREATE.MEMBER]: state.create.member
  };
};

class CreateMember extends Component {
  renderCosTitle = () => {
    const photoSelected = photoClass.find(photo => {
      return photo.photo_id === this.props.costume;
    });
    const title =
      photoSelected === undefined ? "PHOTO_COSTUME" : photoSelected.photo_name;
    return <h3>{title}</h3>;
  };

  handleClickMember = member => {
    const isInstore = this.props.member.hasOwnProperty(member.member_name_en);
    if (isInstore) this.props.createPhotosDelMember(member.member_name_en);
    else this.props.createPhotosAddMember(member.member_name_en);
  };

  renderMemUl = members => {
    const liNodes = members.map((member, i) => {
      return (
        <CreateCircleSelectButton
          id="member"
          key={`member-${i}`}
          enable={this.props.member.hasOwnProperty(member.member_name_en)}
          clickAction={() => this.handleClickMember(member)}
        >
          {member.member_name}
        </CreateCircleSelectButton>
      );
    });
    return <ul>{liNodes}</ul>;
  };

  renderGenDiv = () => {
    let memberInThisCos = {};
    members.keyakizaka.forEach(member => {
      if (cos_mem_map[member.member_name_en].includes(this.props.costume)) {
        const thisGen = `gen${member.member_gen}`;
        if (memberInThisCos.hasOwnProperty(thisGen))
          memberInThisCos[thisGen].push(member);
        else memberInThisCos[thisGen] = [member];
      }
    });

    const genDivs = Object.entries(memberInThisCos).map(([gen, members]) => {
      const genNum = /[0-9]/.exec(gen);
      return (
        <div className="member-gen" key={genNum}>
          <h3 className="member-gen-header">{genNum}期生</h3>
          {this.renderMemUl(members)}
        </div>
      );
    });
    return genDivs;
  };

  render() {
    return (
      <div className="create-member-container">
        {this.renderCosTitle()}
        {this.renderGenDiv()}
        <CreateFooterButton
          prevPage="/create/group"
          nextPage="/create/type"
          enableNext={Object.keys(this.props.member).length > 0}
        >
          {"もどる"}
          {"次へ"}
        </CreateFooterButton>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMember);
