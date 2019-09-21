import React, { Component } from "react";
import { Face, CameraFront, AccessTime } from "@material-ui/icons";

import "../style/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="button-wrapper">
          <button className="member">
            <Face />
            メンバー順
          </button>
        </div>
        <div className="button-wrapper">
          <button className="costume">
            <CameraFront />
            テーマ順
          </button>
        </div>
        <div className="button-wrapper">
          <button className="search">
            <AccessTime />
            登録順
          </button>
        </div>
      </footer>
    );
  }
}
