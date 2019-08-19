import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Close } from "@material-ui/icons";

import { STORE_TYPES } from "../../services/types";
import { photoClass } from "../../constants/photoClass";

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.CREATE.COSTUME]: state.create.costume,
    [STORE_TYPES.STATE.CREATE.MEMBER]: state.create.member
  };
};

class CreateTypeNumberSelectorItem extends Component {
  typesInThisPhoto = photoClass.find(photo => {
    return photo.photo_id === this.props.costume;
  }).photo_type;

  renderTypeSelectBtn = memberName => {
    const btnNodes = this.typesInThisPhoto.map((type, i) => {
      let className = `photo-type-number-btn ${type}`;
      if (this.props.isCurrSelected() === type) className += " active";
      return (
        <button
          key={`photo-type-number-btn-${i}`}
          className={className}
          onClick={() => this.props.clickTypeAction(memberName, type)}
        >
          {this.props.member[memberName].photoTypeNumber[type]}
        </button>
      );
    });
    return <div className="photo-type-number-btn-container">{btnNodes}</div>;
  };

  render() {
    const member = this.props.thisMember;
    return (
      <div className="photo-type-number-selector-container">
        <div className="photo-type-number-display">
          <span>{member.member_name}</span>
          {this.renderTypeSelectBtn(member.member_name_en)}
        </div>
        <div
          className={
            this.props.isCurrSelected() !== false
              ? "photo-type-number-selector active"
              : "photo-type-number-selector"
          }
        >
          <div className="photo-type-number-selector-range">
            <button onClick={() => this.props.clickNumPlusMinusAction(-1)}>
              -1
            </button>
            <input
              type="range"
              min="0"
              max="20"
              step="1"
              value={
                this.props.member[member.member_name_en].photoTypeNumber[
                  this.props.isCurrSelected()
                ]
              }
              onChange={event => this.props.changeSelectorValue(event)}
            />
            <button onClick={() => this.props.clickNumPlusMinusAction(1)}>
              +1
            </button>
          </div>
          <button
            className="photo-type-number-selector-closeBtn"
            onClick={() => this.props.clickTypeAction(null, null)}
          >
            <Close />
          </button>
        </div>
      </div>
    );
  }
}

CreateTypeNumberSelectorItem.defaultProps = {
  thisMember: {},
  isCurrSelected: false,
  clickTypeAction: () => { return },
  clickNumPlusMinusAction: () => { return },
  changeSelectorValue: () => { return },
};

CreateTypeNumberSelectorItem.propTypes = {
  thisMember: PropTypes.object,
  isCurrSelected: PropTypes.bool,
  clickTypeAction: PropTypes.func,
  clickNumPlusMinusAction: PropTypes.func,
  changeSelectorValue: PropTypes.func
};

export default connect(
  mapStateToProps,
  null
)(CreateTypeNumberSelectorItem);
