import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { STORE_TYPES } from "../../services/types";
import {
  createPhotosCostume,
  createPhotosAddMember,
  createPhotosDelMember
} from "../../services/actions";

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
    let title = "PHOTO_COSTUME";
    photoClass.forEach(photo => {
      if (photo.photo_id === this.props.costume) title = photo.photo_name;
    });
    return <h3>{title}</h3>;
  };

  renderMemUl = members => {
    const liNodes = members.map(member => {
      return (
        <li
          className={            
            this.props.member.find(item => {return item.photo_member===member.member_name_en})!==undefined
              ? "select-button active"
              : "select-button"
          }
        >
          <button
            onClick={() => {
              const isInstore = this.props.member.find(item => {return item.photo_member===member.member_name_en})
              if (isInstore) this.props.createPhotosDelMember(member.member_name_en);
              else this.props.createPhotosAddMember(member.member_name_en);
            }}
          >
            {member.member_name[0]}
          </button>
          <h6>{member.member_name}</h6>
        </li>
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
        <div className="member-gen">
          <h3 className="member-gen-header">{genNum}期生</h3>
          {this.renderMemUl(members)}
        </div>
      );
    });
    return <div>{genDivs}</div>;
  };

  render() {
    const nextStepBtnDisabled = this.props.member.length === 0;
    return (
      <div className="create-member-container">
        {this.renderCosTitle()}
        {this.renderGenDiv()}
        <div className="main-button-container">
          <Link to="/create/group">
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
              次へ
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
)(CreateMember);
