import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../redux/reducer/ProductSlice";
import styled from 'styled-components';
import "../product/Product.css";
import { cardHeaderClasses } from "@mui/material";

const ProductDataGridContainer = styled.div`
  height:400px;
  width: 90%;
  background-color: #fbd5bf;
  header-background: #fbd5bf;
`;


const ProductDataGrid = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  console.log("DATA", data)
  const new_data = data.map(item=>{
    return(
      {...item, prodRatingCount: item.rating.count, prodRatingRate: item.rating.rate}
    )
  })

  console.log("NEW DATA ",new_data)
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  const columns = [
    // {field: 'id', headerName: 'ID', width:150},
    // {field: 'firstName', headerName: 'Name', width:150},
    // {field: 'age', headerName: 'Age', width:150},
    {field: 'id', headerName: 'ID', headerClassName:'header-style', width:50,},
    {field: 'title', headerName: 'Product Name', headerClassName:'header-style', width:250},
    {field: 'image', headerName: 'Image', headerClassName:'header-style',  width:70, renderCell: (params)=>{
        console.log("PARAMS ",params);
        return (
          <div className="datagrid-img-div">
            <img src={params.formattedValue} alt='' style={{width: '30px'}} />
          </div>
        )}
    },
    {field: 'category', headerName: 'Category', headerClassName:'header-style',  width:150},
    {field: 'prodRatingRate', headerName: 'Rating', headerClassName:'header-style',  width:120},
    {field: 'prodRatingCount', headerName: 'Rating Count', headerClassName:'header-style',  width:120},
    {field: 'price', headerName: 'Price (in Rs.)', headerClassName:'header-style',  width:150},
    {field: 'description', headerName: 'Description', headerClassName:'header-style',  width:250},
    
    
  ];

  return( 
  <ProductDataGridContainer>
    <DataGrid rows={new_data} columns={columns} rowsPerPageOptions={[5]} autoPageSize={true} />
  </ProductDataGridContainer>
  );
};

export default ProductDataGrid;
