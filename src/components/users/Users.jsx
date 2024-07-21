import React from 'react';
import UserDataGrid from '../datagrids/UserDataGrid';
import './Users.css';
import styled from 'styled-components';

const Users = () => {

  const divUser = styled.div`
    display: 'flex',
    justify-content: 'center',
    align-items: 'center',
    height: '100vh',
  `;
  


  return (
    <div className={user-div}>
      <UserDataGrid/>
    </div>
  )
}

export default Users