import React, { Component } from "react";
import { connect } from "react-redux";
import { searchPhoto } from "../services/actions";

import "../style/Search.css";

const mapDispatchToProps = { searchPhoto };

const Search = ({ searchPhoto }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍メンバー名またはテーマ名で検索する"
        onChange={e => searchPhoto(e.target.value)}
      ></input>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
