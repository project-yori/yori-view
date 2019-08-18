/**
 * Circle checkbox in CreateView
 * PROPS:
 *   key:string : key attr for list rendering this component
 *   id:string : html id attr for <li>
 *   enable:bool : condition to enable <button>
 *   clickAction:func : function triggered by tapping <button>
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../style/create/CreateCircleSelectButton.css';

export default class CreateCircleSelectButton extends Component {
  render () {
    return (
      <li 
        id={this.props.id}
        className={this.props.enable ? "create-circle-select-button active" :  "create-circle-select-button"}
        key={`create-circle-select-button-${this.props.key}`}
      >
        <button
          onClick={() => this.props.clickAction()}
        >
          {this.props.children[0]}
        </button>
        <h6>{this.props.children}</h6>
      </li>
    );
  };
};

CreateCircleSelectButton.defaultProps = {
  key: '',
  id: '',
  enable: false,
  clickAction: () => { return }
};

CreateCircleSelectButton.propTypes = {
  key: PropTypes.string,
  id: PropTypes.string,
  enable: PropTypes.bool,
  clickAction: PropTypes.func
};