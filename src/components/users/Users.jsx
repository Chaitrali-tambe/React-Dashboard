import React from 'react';
import UserDataGrid from '../datagrids/UserDataGrid';
import './Users.css';
import styled from 'styled-components';

const Users = () => {
  return (
    <div className={'user-div'}>
      <UserDataGrid/>
    </div>
  )
}

export default Users