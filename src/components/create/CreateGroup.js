import React, { Component } from "react";
import { connect } from "react-redux";

import {
  createPhotosGroup,
  createPhotosCostume,
  createPhotosDelMember
} from "../../services/actions";
import { STORE_TYPES } from "../../services/types";
import { photoClass } from "../../constants/photoClass";

import CreateCircleSelectButton from "./CreateCircleSelectButton";
import CreateFooterButton from "./CreateFooterButton";
import "../../style/create/CreateGroup.css";

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.CREATE.GROUP]:
      state[STORE_TYPES.STATE.CREATE.META][STORE_TYPES.STATE.CREATE.GROUP],
    [STORE_TYPES.STATE.CREATE.COSTUME]:
      state[STORE_TYPES.STATE.CREATE.META][STORE_TYPES.STATE.CREATE.COSTUME],
    [STORE_TYPES.STATE.CREATE.MEMBER]:
      state[STORE_TYPES.STATE.CREATE.META][STORE_TYPES.STATE.CREATE.MEMBER]
  };
};

const mapDispatchToProps = {
  createPhotosGroup,
  createPhotosCostume,
  createPhotosDelMember
};

class CreateGroup extends Component {
  handleSelectGroup = group => {
    this.props.createPhotosGroup(group);
  };

  handleSelectCos = event => {
    // Clear member in store
    Object.entries({ ...this.props.member }).forEach(([key, value]) => {
      this.props.createPhotosDelMember(key);
    });
    this.props.createPhotosCostume(event.target.value);
  };

  renderCosDropDown = () => {
    const nodes = photoClass.map((item, i) => (
      <option key={`create-cos-select-${i}`} value={item.photo_id}>
        {item.photo_name}
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
    return (
      <div className="create-group-container">
        <div className="create-group-opt-container">
          <div className="group">
            <h2>グループ選択</h2>
            <ul>
              <CreateCircleSelectButton
                key={"group-0"}
                id="nogizaka"
                enable={this.props.group === "nogizaka"}
                clickAction={() => this.handleSelectGroup("nogizaka")}
              >
                {"乃木坂46"}
              </CreateCircleSelectButton>
              <CreateCircleSelectButton
                key={"group-1"}
                id="keyakizaka"
                enable={this.props.group === "keyakizaka"}
                clickAction={() => this.handleSelectGroup("keyakizaka")}
              >
                {"欅坂46"}
              </CreateCircleSelectButton>
              <CreateCircleSelectButton
                key={"group-2"}
                id="hinatazaka"
                enable={this.props.group === "hinatazaka"}
                clickAction={() => this.handleSelectGroup("hinatazaka")}
              >
                {"日向坂46"}
              </CreateCircleSelectButton>
            </ul>
          </div>
          <div className="costume">
            <h2>衣装選択</h2>
            {this.renderCosDropDown()}
          </div>
        </div>
        <CreateFooterButton
          prevPage="/"
          nextPage="/create/member"
          enableNext={this.props.group !== null && this.props.costume !== null}
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
)(CreateGroup);
