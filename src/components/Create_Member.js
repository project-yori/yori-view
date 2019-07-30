import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { STORE_TYPES } from '../services/types';

import '../style/Create_Member.css';

const mapDispatchToProps = {

};

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.CREATE.GROUP]: state.create.group,
    [STORE_TYPES.STATE.CREATE.COSTUME]: state.create.costume,
  };
};

const disabled = true;

const Create_Member = ({ costume }) => (
      <div className='create-member-container'>
        <h3>{costume || 'PHOTO_COSTUME'}</h3>
        <div className='main-button-container'>
          <Link to='/create/group'>
            <button className='main-button'>もどる</button>
          </Link>
          <Link to='/create/type'>
            <button 
              disabled={disabled} 
              className={disabled ? 'main-button disabled' : 'main-button next'}
            >次へ</button>
          </Link>
        </div>
      </div>    
  // }
)

export default connect(mapStateToProps, mapDispatchToProps)(Create_Member);

