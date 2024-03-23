import React from 'react'
import DefaultCategories from '../components/DefaultCategories'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const SelectCategories = ({addedCategories,setAddedCategories}) => {
    const navigate = useNavigate();
    function clickHandler(){
        navigate('/selectAccounts');
    }
  return (
    <div style={{display:"flex",flexDirection:"column",position:"relative",height:"97vh"}}>
        <h2>Categories</h2>
        <p>Default Categories</p>
        <DefaultCategories addedCategories={addedCategories} setAddedCategories={setAddedCategories} />
        <br/>
        <Button style={{position:"absolute", width:"80px",padding:"10px",bottom:"8px", right:"10px",backgroundColor:"lightseagreen" }} variant='contained' endIcon={<ArrowForwardIcon/>} onClick={clickHandler}>Next</Button>
    </div>
  )
}

export default SelectCategories