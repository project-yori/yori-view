/**
 * BACK and NEXT buttons at bottom of CreateView
 * PROPS:
 *   prevPage:string : route path of component mounted by tapping BACK button
 *   nextPage:string : route path of component mounted by tapping NEXT button
 *   enableNext:bool : condition to enable NEXT button
 *   clickAction:func : function triggered by tapping NEXT button
 */

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import '../../style/create/CreateFooterButton.css';

export default class CreateFooterButton extends Component {
  constructor(props){
    super(props);
    this.state = {
    
    };
  };
  
  render () {
    return (
      <div className='create-footer-button-container'>
        <Link to={this.props.prevPage}>
          <button className='create-footer-button'>{this.props.children[0]}</button>          
        </Link>
        <Link to={this.props.nextPage}>
          <button
            disabled={!this.props.enableNext}
            className={this.props.enableNext ?
              'create-footer-button next' :
              'create-footer-button disabled'
            }
            onClick={() => this.props.clickAction()}
          >
            {this.props.children[1]}
          </button>
        </Link>
      </div>
    );
  };
};

CreateFooterButton.defaultProps = {
  prevPage: '/',
  nextPage: '/',
  enableNext: false,  
  clickAction: () => { return }
}

CreateFooterButton.propTypes = {
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  enableNext: PropTypes.bool,
  clickAction: PropTypes.func
};