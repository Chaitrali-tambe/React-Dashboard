import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../redux/reducer/DataReducer';
import styled from 'styled-components';

const DataGridContainer = styled.div`
  height:400px;
  width: 90%;
  background-color: #fbd5bf;
  header-background: #fbd5bf;
`;

const UserDataGrid = () => {
  const dispatch = useDispatch();
  const {loading, data, error} = useSelector((state)=> state.data)

  
  useEffect(()=>{
      dispatch(fetchUserData())
  }, [dispatch]);
  console.log("DATA ",data)
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const columns = [
    // {field: 'id', headerName: 'ID', width:150},
    // {field: 'firstName', headerName: 'Name', width:150},
    // {field: 'age', headerName: 'Age', width:150},
    {field: 'id', headerName: 'ID', width:150},
    {field: 'firstname',
      headerName: 'First Name',
      width:150,
      
    },
    {field: 'username', headerName: 'Username', width:150},
    {field: 'password', headerName: 'Password', width:150},
    {field: 'phone', headerName: 'Phone No.', width:150},
    {field: 'email', headerName: 'Email Id', width:250},
    
  ];



  return (
    <DataGridContainer>
      <DataGrid rows={data} columns={columns} rowsPerPageOptions={[5]} autoPageSize={true} 
      />

    </DataGridContainer>
  )
}

export default UserDataGrid