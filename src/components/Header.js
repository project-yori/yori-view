import React, { Component } from 'react'
import { FolderOpen, Settings } from '@material-ui/icons';

import '../style/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className='button-wrapper'>
          <button><FolderOpen /></button>
        </div>
        <div className='header-wrapper'>
          <h2>ALBUM</h2>
        </div>
        <div className='button-wrapper'>
          <button><Settings /></button>
        </div>
      </header>
    )
  }
}
