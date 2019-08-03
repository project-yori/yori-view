import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createPhotosGroup, createPhotosCostume } from "../../services/actions";
import { STORE_TYPES } from "../../services/types";
import { costumes } from '../../constants/costumes';

import "../../style/create/CreateGroup.css";

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.CREATE.GROUP]:
      state[STORE_TYPES.STATE.CREATE.META][STORE_TYPES.STATE.CREATE.GROUP],
    [STORE_TYPES.STATE.CREATE.COSTUME]:
      state[STORE_TYPES.STATE.CREATE.META][STORE_TYPES.STATE.CREATE.COSTUME]
  };
};

const mapDispatchToProps = {
  createPhotosGroup,
  createPhotosCostume
};

class Create_Group extends Component {
  handleSelectGroup = group => {
    this.props.createPhotosGroup(group);
  };

  handleSelectCos = event => {
    this.props.createPhotosCostume(event.target.value);
  };

  renderCosDropDown = () => {

    const nodes = costumes.map((item, i) => (
      <option key={`create-cos-select-${i}`} value={item.cos_id}>
        {item.cos_name}
      </option>
    ));

    return (
      <select value={this.props.costume || ""} onChange={this.handleSelectCos}>
        <option value="" selected disabled>
          選択
        </option>
        {nodes}
      </select>
    );
  };

  render() {
    const nextStepBtnDisabled =
      this.props.group === null || this.props.costume === null;
    return (
      <div className="create-group-container">
        <div className="create-group-opt-container">
          <div className="group">
            <h2>グループ選択</h2>
            <ul>
              <li
                id="nogizaka"
                className={
                  this.props.group === "nogizaka"
                    ? "select-button active"
                    : "select-button"
                }
              >
                <button onClick={() => this.handleSelectGroup("nogizaka")}>
                  乃
                </button>
                <h6>乃木坂46</h6>
              </li>
              <li
                id="keyakizaka"
                className={
                  this.props.group === "keyakizaka"
                    ? "select-button active"
                    : "select-button"
                }
              >
                <button onClick={() => this.handleSelectGroup("keyakizaka")}>
                  欅
                </button>
                <h6>欅坂46</h6>
              </li>
              <li
                id="hinatazaka"
                className={
                  this.props.group === "hinatazaka"
                    ? "select-button active"
                    : "select-button"
                }
              >
                <button onClick={() => this.handleSelectGroup("hinatazaka")}>
                  日
                </button>
                <h6>日向坂46</h6>
              </li>
            </ul>
          </div>
          <div className="costume">
            <h2>衣装選択</h2>
            {this.renderCosDropDown()}
          </div>
        </div>
        <div className="main-button-container">
          <Link to="/">
            <button className="main-button">もどる</button>
          </Link>
          <Link to="/create/member">
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
)(Create_Group);
