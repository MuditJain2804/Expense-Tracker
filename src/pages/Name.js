import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
   
const Name = ({name, setName}) => {
    const navigate = useNavigate();
    function submitHandler(){
        navigate('/selectCategories');
    }
    function changeHandler(event){
      setName(event.target.value)
    }
  return (
    <div style={{display:"flex",flexDirection:"column",position:"relative",height:"97vh"}}>
        <h2>Hi, Welcome to Expense Tracker</h2>
        <Box component='form' onSubmit={submitHandler}>
          <TextField fullWidth required style={{backgroundColor:"lightblue",borderRadius:"5px",}} placeholder='Enter Name' onChange={changeHandler}></TextField>
          <Button type='submit' style={{position:"absolute", width:"80px",padding:"10px",bottom:"8px", right:"10px",backgroundColor:"lightseagreen" }} variant='contained' endIcon={<ArrowForwardIcon/>}>Next</Button>
        </Box>
        
    </div>
  )
}

export default Name