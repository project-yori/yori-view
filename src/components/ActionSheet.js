import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../style/ActionSheet.css';

export default class ActionSheet extends Component {
  render() {
    return (
        <div 
          className={this.props.isShow ? 'action-sheet show' : 'action-sheet'}
        >
          <button>アルバム作成</button>
          <button>写真登録</button>
          <button>
            <Link to='/create/group'>まとめ登録</Link>
          </button>
          <button
            onClick={() => this.props.showActionSheet()}
          >取消</button>
        </div>
    )
  }
}
