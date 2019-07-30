import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPhotosGroup, createPhotosCostume } from '../services/actions';

import '../style/Create_Group.css';

const mapDispatchToProps = {
  createPhotosGroup,
  createPhotosCostume,
};

class Create_Group extends Component {
  constructor(props){
    super(props);
    this.state = {
      groupSelected: undefined,
      cosSelected: undefined,
    };
  }

  // Todo: all state handler in actions
  selectGroup = (group) => {
    this.setState({groupSelected: group});
    this.props.createPhotosGroup(group);
  }

  handleSelectCos = (event) => {
    this.setState({cosSelected: event.target.value});
    this.props.createPhotosCostume(event.target.value);
  }
  

  renderCosDropDown = () => {
    const dummyData = [
      '2019.July-Ⅱ（浴衣）（5種類）',
      '2019.July-Ⅲ（サファリルック）（3種類）',
      '2019.July-Ⅳ（アニマルT）（3種類）',
      '全ツ2019福岡Tシャツ（3種類）',
      '2019.July-Ⅴ（ギンガムチェック）（3種類）',
    ];

    // Todo: value in options
    const nodes = dummyData.map((item, i) => 
      <option key={`create-cos-select-${i}`} value={item}>
        {item}
      </option>
    );

    return (
      <select value={this.state.cosSelected} onChange={this.handleSelectCos}>
        <option value='' selected disabled>選択</option>
        {nodes}
      </select>
    );
  };
  
  render() {
    const disabled = this.state.cosSelected===undefined || this.state.groupSelected===undefined;
    return (
      <div className='create-group-container'>
        <div className='create-group-opt-container'>
          <div className='group'>
            <h2>グループ選択</h2>
            <ul>
              <li 
                id='nogizaka'
                className={this.state.groupSelected==='nogizaka' ? 'select-button active' : 'select-button'}
              >
                <button onClick={() => this.selectGroup('nogizaka')}>乃</button>
                <h6>乃木坂46</h6>
              </li>
              <li 
                id='keyakizaka'
                className={this.state.groupSelected==='keyakizaka' ? 'select-button active' : 'select-button'}
              >
                <button onClick={() => this.selectGroup('keyakizaka')}>欅</button>
                <h6>欅坂46</h6>
              </li>
              <li 
                id='hinatazaka'
                className={this.state.groupSelected==='hinatazaka' ? 'select-button active' : 'select-button'}
              >
                <button onClick={() => this.selectGroup('hinatazaka')}>日</button>
                <h6>日向坂46</h6>
              </li>
            </ul>
          </div>
          <div className='costume'>
            <h2>衣装選択</h2>
            {this.renderCosDropDown()}
          </div>
        </div>
        <div className='main-button-container'>
          <Link to='/'>
            <button className='main-button'>もどる</button>
          </Link>
          <Link to='/create/member'>
            <button 
              disabled={disabled} 
              className={disabled ? 'main-button disabled' : 'main-button next'}
            >次へ</button>
          </Link>
        </div>          
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Create_Group);
