import React, { Component } from "react";
import { connect } from "react-redux";
import { changeSortType } from "../services/actions";
import { SORT_TYPES } from "../services/types";
import { Face, CameraFront, AccessTime } from "@material-ui/icons";

import "../style/Footer.css";
import { sort } from "../services/apis/sort";

const mapStateToProps = state => {
  const { sortType } = state.top;
  return {
    sortType
  };
};

const mapDispatchToProps = {
  changeSortType
};

class Footer extends Component {
  handleClickSort = sortType => {
    const newSortType =
      sortType === this.props.sortType ? sortType + "Reverse" : sortType;
    this.props.changeSortType(newSortType);
  };
  render() {
    return (
      <footer>
        <div className="button-wrapper">
          <button
            className="member"
            onClick={() => this.handleClickSort("member")}
          >
            <Face />
            メンバー順
          </button>
        </div>
        <div className="button-wrapper">
          <button
            className="costume"
            onClick={() => this.handleClickSort("costume")}
          >
            <CameraFront />
            テーマ順
          </button>
        </div>
        <div className="button-wrapper">
          <button
            className="createTime"
            onClick={() => this.handleClickSort("createTime")}
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
  mapStateToProps,
  mapDispatchToProps
)(Footer);
