import React, { Component } from "react";
import { Add } from "@material-ui/icons";

import "../../style/create/CreateButton.css";

export default class CreateButton extends Component {
  render() {
    return (
      <div className="create">
        <Add />
      </div>
    );
  }
}
