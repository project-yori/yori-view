import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Add } from "@material-ui/icons";
import { STORE_TYPES } from "../../services/types";

import "../../style/create/CreateButton.css";

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.TOP.KEYWORD_SEARCH]:
      state[STORE_TYPES.STATE.TOP.META][STORE_TYPES.STATE.TOP.KEYWORD_SEARCH]
  };
};

const CreateButton = ({ keywordSearch }) => {
  return (
    <div className={keywordSearch === "" ? "create" : "create hide"}>
      <Link to="/create/group">
        <Add></Add>
      </Link>
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(CreateButton);
