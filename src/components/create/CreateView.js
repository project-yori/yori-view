import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import Header from '../Header';
import CreateGroup from './CreateGroup';
import CreateMember from './CreateMember';
import CreateType from './CreateType';

export default class CreateView extends Component {
  render() {
    return (
      <div className='create-view'>
        <Header>まとめて登録</Header>
        <Route path='/create/group' component={CreateGroup} />
        <Route path='/create/member' component={CreateMember} />
        <Route path='/create/type' component={CreateType} />
      </div>
    )
  }
}
