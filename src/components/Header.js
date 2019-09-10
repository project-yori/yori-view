import React, { Component } from 'react'
import { FolderOpen, Settings } from '@material-ui/icons';

import '../style/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className='button-wrapper'>
          <span></span>
        </div>
        <div className='header-wrapper'>
          <h2>{this.props.children}</h2>
        </div>
        <div className='button-wrapper'>
          <span></span>
        </div>
      </header>
    )
  }
}
