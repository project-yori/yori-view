import React from "react";
import { connect } from "react-redux";
import { searchPhoto } from "../services/actions";
import { STORE_TYPES } from "../services/types";

import "../style/Search.css";

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.TOP.KEYWORD_SEARCH]:
      state[STORE_TYPES.STATE.TOP.META][STORE_TYPES.STATE.TOP.KEYWORD_SEARCH]
  };
};

const mapDispatchToProps = { searchPhoto };

const Search = ({ searchPhoto, keywordSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍メンバー名またはテーマ名で検索する"
        value={keywordSearch}
        onChange={e => searchPhoto(e.target.value)}
      ></input>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
