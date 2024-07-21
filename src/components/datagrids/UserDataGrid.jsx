import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../redux/reducer/UserSlice';
import styled from 'styled-components';

const UserDataGridContainer = styled.div`
  height:400px;
  width: 88%;
  background-color: #fbd5bf;
  header-background: #fbd5bf;
`;

const UserDataGrid = () => {
  const dispatch = useDispatch();
  const {loading, data, error} = useSelector((state)=> state.users)

  
  useEffect(()=>{
      dispatch(fetchUserData())
  }, [dispatch]);

  const new_data = data.map(item=>{
    return(
      {...item, firstName: item.name.firstname, lastName: item.name.lastname}
    )
  }
  )
  console.log("DATA ",new_data)
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const columns = [
    {field: 'id', headerName: 'ID', headerClassName:'header-style',  width:150},
    {field: 'firstName',headerName: 'First Name', headerClassName:'header-style',  width:170},
    {field: 'lastName',headerName: 'Last Name', headerClassName:'header-style',  width:170},
    {field: 'username', headerName: 'Username', headerClassName:'header-style',  width:150},
    {field: 'password', headerName: 'Password', headerClassName:'header-style',  width:150},
    {field: 'phone', headerName: 'Phone No.', headerClassName:'header-style',  width:150},
    {field: 'email', headerName: 'Email Id', headerClassName:'header-style',  width:205},
    
  ];



  return (
    <UserDataGridContainer>
      <DataGrid rows={new_data} columns={columns} rowsPerPageOptions={[5]} autoPageSize={true} 
      />

    </UserDataGridContainer>
  )
}

export default UserDataGrid