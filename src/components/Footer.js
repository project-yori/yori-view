import React from "react";
import { connect } from "react-redux";
import { changeSortType } from "../services/actions";
import { Face, CameraFront, AccessTime } from "@material-ui/icons";

import "../style/Footer.css";

const mapStateToProps = state => {
  const { sortType } = state.top;
  return {
    sortType
  };
};

const mapDispatchToProps = {
  changeSortType
};

const Footer = ({ sortType, changeSortType }) => {
  const handleClickSort = clickedSortType => {
    const newSortType =
      clickedSortType === sortType
        ? clickedSortType + "Reverse"
        : clickedSortType;
    changeSortType(newSortType);
  };

  return (
    <footer>
      <div className="button-wrapper">
        <button className="member" onClick={() => handleClickSort("member")}>
          <Face />
          メンバー順
        </button>
      </div>
      <div className="button-wrapper">
        <button className="costume" onClick={() => handleClickSort("costume")}>
          <CameraFront />
          テーマ順
        </button>
      </div>
      <div className="button-wrapper">
        <button
          className="createTime"
          onClick={() => handleClickSort("createTime")}
        >
          <AccessTime />
          登録順
        </button>
      </div>
    </footer>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
