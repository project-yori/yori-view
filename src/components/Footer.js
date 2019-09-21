import React, { Component } from "react";
import { connect } from "react-redux";
import { changeSortType } from "../services/actions";
import { SORT_TYPES } from "../services/types";
import { Face, CameraFront, AccessTime } from "@material-ui/icons";

import "../style/Footer.css";

const mapDispatchToProps = {
  changeSortType
};

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="button-wrapper">
          <button
            className="member"
            onClick={() => this.props.changeSortType(SORT_TYPES.MEMBER)}
          >
            <Face />
            メンバー順
          </button>
        </div>
        <div className="button-wrapper">
          <button
            className="costume"
            onClick={() => this.props.changeSortType(SORT_TYPES.COSTUME)}
          >
            <CameraFront />
            テーマ順
          </button>
        </div>
        <div className="button-wrapper">
          <button
            className="search"
            onClick={() => this.props.changeSortType(SORT_TYPES.CREATE_TIME)}
          >
            <AccessTime />
            登録順
          </button>
        </div>
      </footer>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Footer);
