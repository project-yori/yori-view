import React, { Component } from 'react'

import '../style/ActionSheet.css';

export default class ActionSheet extends Component {
  render() {
    return (
        <div 
          className={this.props.isShow ? 'action-sheet show' : 'action-sheet'}
        >
          <button>アルバム作成</button>
          <button>写真登録</button>
          <button>まとめ登録</button>
          <button
            onClick={() => this.props.showActionSheet()}
          >取消</button>
        </div>
    )
  }
}
