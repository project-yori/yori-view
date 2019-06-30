import React, { Component } from 'react'

import '../style/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='button-wrapper'>
          <button className='member'>メンバー</button>
        </div>
        <div className='button-wrapper'>
          <button className='theme'>テーマ</button>
        </div>
        <div className='button-wrapper'>
          <button className='search'>検索</button>
        </div>
      </footer>
    )
  }
}
