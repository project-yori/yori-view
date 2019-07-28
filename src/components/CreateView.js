import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import Header from './Header';
import Create_Group from './Create_Group';
import Create_Member from './Create_Member';
import Create_Type from './Create_Type';

export default class CreateView extends Component {
  render() {
    return (
      <div className='create-view'>
        <Header>まとめて登録</Header>
        <Route path='/create/group' component={Create_Group} />
        <Route path='/create/member' component={Create_Member} />
        <Route path='/create/type' component={Create_Type} />
      </div>
    )
  }
}
