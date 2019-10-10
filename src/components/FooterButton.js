import React from "react";
import { connect } from "react-redux";
import { changeSortType } from "../services/actions";

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
        {children}
      </button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterButton);
