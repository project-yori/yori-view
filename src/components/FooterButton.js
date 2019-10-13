import React from "react";
import { connect } from "react-redux";
import { changeSortType } from "../services/actions";
import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";

const mapStateToProps = state => {
  const { sortType } = state.top;
  return {
    sortType
  };
};

const mapDispatchToProps = {
  changeSortType
};

const FooterButton = ({ children, sortType, changeSortType, thisSortType }) => {
  const handleClickSort = thisSortType => {
    const newSortType =
      thisSortType === sortType ? thisSortType + "Reverse" : thisSortType;
    changeSortType(newSortType);
  };
  const sortTypeIcon = children[0];
  const sortTypeTxt = children[1];
  const sortOrderIcon =
    RegExp(thisSortType).exec(sortType) === null ? null : /Reverse/.exec(
        sortType
      ) !== null ? (
      <KeyboardArrowDown />
    ) : (
      <KeyboardArrowUp />
    );
  return (
    <div className="button-wrapper">
      <button
        className={
          sortType.includes(thisSortType)
            ? `${thisSortType} selected`
            : thisSortType
        }
        onClick={() => handleClickSort(thisSortType)}
      >
        {sortTypeIcon}
        <div className="button-text-container">
          {sortTypeTxt}
          {sortOrderIcon}
        </div>
      </button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterButton);
