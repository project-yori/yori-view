import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../style/ActionSheet.css";

export default class ActionSheet extends Component {
  render() {
    return (
      <div className={this.props.isShow ? "action-sheet show" : "action-sheet"}>
        <button>アルバム作成</button>
        <button>写真登録</button>
        <Link to="/create/group">
          <button>まとめて登録</button>
        </Link>
        <button className="cancel" onClick={() => this.props.showActionSheet()}>
          取消
        </button>
      </div>
    );
  }
}
