import React, { Component } from 'react'

import '../style/Top.css';

export default class Top extends Component {

  renderFooter = () => {
    return(
      <footer>
        <h6>© 2019 Project-yori</h6>
      </footer>
    )
  }
  render() {
    return (
      <div className='top'>
        <h1>YORI◢</h1>
        <div className='buttons'>
          <div className='button-wrapper'>
            <button className='create'>新規作成</button>
          </div>
          <div className='button-wrapper'>
            <button className='folder'>フォルダ</button>
          </div>
          <div className='button-wrapper' >
            <button className='mydata'>マイデーター</button>
          </div>
          <div className='button-wrapper' >
            <button className='settings'>設定</button>
          </div>
        </div>
        {this.renderFooter()}
      </div>            
    )
  }
}
