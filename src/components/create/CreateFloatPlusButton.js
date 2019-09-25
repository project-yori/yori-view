import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Add } from "@material-ui/icons";

import "../../style/create/CreateButton.css";

export default class CreateButton extends Component {
  render() {
    return (
      <div className="create">
        <Link to="/create/group">
          <Add>{this.props.children}</Add>
        </Link>
      </div>
    );
  }
}
