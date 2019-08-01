import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { STORE_TYPES } from "../services/types";

import "../style/Create_Member.css";
import { costumes } from "../constants/costumes";
import { cos_mem_map } from "../constants/cos_mem_map";
import { members } from "../constants/members";

const createPhotosCostume = () => dispatch => {
  dispatch({
    type: "CREATE_PHOTO_COSTUME",
    data: "2019_july_3_safari"
  });
};

const mapDispatchToProps = {
  createPhotosCostume
};

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.CREATE.GROUP]: state.create.group,
    [STORE_TYPES.STATE.CREATE.COSTUME]: state.create.costume
  };
};

const nextStepBtnDisabled = true;

class Create_Member extends Component {
  // constructor(props){
  //   super(props);
  // };

  renderCosTitle = () => {
    let title = "PHOTO_COSTUME";
    costumes.forEach(cos => {
      if (cos.cos_id === this.props.costume) title = cos.cos_name;
    });
    return <h3>{title}</h3>;
  };

  renderMembers = () => {
    let memberInThisCos = [];
    members.keyakizaka.forEach(member => {
      if (cos_mem_map[member.member_name_en].includes(this.props.costume)) {
        memberInThisCos.push(member);
      }
    });

    const nodes = memberInThisCos.map(member => {
      return (
        <li className="select-button">
          <button>{member.member_name[0]}</button>
          <h6>{member.member_name}</h6>
        </li>
      );
    });

    return <ul>{nodes}</ul>;
  };

  render() {
    // this.props.createPhotosCostume();
    return (
      <div className="create-member-container">
        {this.renderCosTitle()}
        {this.renderMembers()}
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
)(Create_Member);
