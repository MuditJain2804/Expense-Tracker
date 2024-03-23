import React,{ useState} from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Button, TextField,Box } from '@mui/material';

const SetBudget = ({onValueChange}) => {
    const [budget, setBudget] = useState()
    const navigate = useNavigate();
    function clickHandler(){
        navigate('/home')
    }
    function submitHandler(){
        navigate('/home')
    }
    function changeHandler(event){
        setBudget(parseFloat(event.target.value))
    }
    function handleClick(){
        onValueChange(budget)
    }
  return (
    <div style={{position:"relative",height:"97vh"}}>
        <div style={{display:"flex", gap:"15px"}}>
            <div onClick={clickHandler}><ArrowBackIcon/></div>
            <div style={{fontSize:"20px"}}>Set Budget</div>
        </div>
        <div>
            <Box component='form' onSubmit={submitHandler}>
                <TextField style={{backgroundColor:"lightblue",marginTop:"15px"}} onChange={changeHandler} type='number' required fullWidth placeholder='Enter Amount'></TextField>
                <Button style={{position:"absolute",bottom:"10px",right:"0px",backgroundColor:"lightseagreen"}} onClick={handleClick} type='submit' fullWidth variant='contained'>Add</Button>
            </Box>
        </div>
    </div>
  )
}

export default SetBudget