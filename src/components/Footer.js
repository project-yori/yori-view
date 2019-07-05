import React, { Component } from 'react'
import { Face, CameraFront, Search } from '@material-ui/icons';

import '../style/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='button-wrapper'>
          <button className='member'>
            <Face />
            メンバー</button>
        </div>
        <div className='button-wrapper'>
          <button className='costume'><CameraFront />テーマ</button>
        </div>
        <div className='button-wrapper'>
          <button className='search'><Search />検索</button>
        </div>
      </footer>
    )
  }
}
