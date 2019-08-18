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
            disabled={!this.props.unlockNext}
            className={this.props.unlockNext ?
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
  clickAction: () => { return }
}

CreateFooterButton.propTypes = {
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  unlockNext: PropTypes.bool,
  clickAction: PropTypes.func
};