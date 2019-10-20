import React from "react";
import { connect } from "react-redux";
import { STORE_TYPES } from "../services/types";
import { searchPhoto } from "../services/actions";

const mapStateToProps = (state, ownProps) => {
  return {
    numPhotosSearchResult: ownProps.numPhotosSearchResult,
    numTypesSearchResult: ownProps.numTypesSearchResult,
    [STORE_TYPES.STATE.TOP.KEYWORD_SEARCH]:
      state[STORE_TYPES.STATE.TOP.META][STORE_TYPES.STATE.TOP.KEYWORD_SEARCH]
  };
};

const mapDispatchToProps = { searchPhoto };

const SearchIndicator = ({
  searchPhoto,
  keywordSearch,
  numPhotosSearchResult,
  numTypesSearchResult
}) => {
  const searchIndicatorTxt = `"${keywordSearch}" - ${numTypesSearchResult}種類 ${numPhotosSearchResult}枚`;

  return (
    <div
      className={
        keywordSearch !== ""
          ? "search-indicator-container"
          : "search-indicator-container hide"
      }
    >
      <h4 className="search-indicator-txt">{searchIndicatorTxt}</h4>
      <button
        className="search-indicator-cancel-btn"
        onClick={() => searchPhoto("")}
      >
        キャンセル
      </button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndicator);
