import React, { useState }  from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers';

const AddDebt = ({setDebtName,setDebtDescription,setDebtAmount,setDebtDaysLeft}) => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    function clickHandler(){
        navigate('/home')
    }
    function submitHandler(event){
        event.preventDefault();
        navigate('/home')
    }
    function nameHandler(event){
        setDebtName(event.target.value)
    }
    function descriptionHandler(event){
        setDebtDescription(event.target.value)
    }
    function amountHandler(event){
        setDebtAmount(event.target.value)
    }
    function handleStartDateChange(date){
        setStartDate(date)
        calculateDaysLeft(date, endDate)
    }
    function handleEndDateChange(date){
        setEndDate(date)
        calculateDaysLeft(startDate, date)
    }
    function calculateDaysLeft(start, end){
        if(start && end ) {
            const differenceInDays = end.diff(start, 'day');
            setDebtDaysLeft(differenceInDays)
        }
    }
  return (
    <div style={{position:"relative",height:"97vh"}}>
        <div style={{display:"flex", gap:"15px"}}>
            <div onClick={clickHandler}><ArrowBackIcon/></div>
            <div style={{fontSize:"20px"}}>Add debt</div>
        </div>
        <Box component='form' onSubmit={submitHandler}>
        <div style={{display:"flex",flexDirection:"column",gap:"15px",marginTop:"20px"}}>
            <TextField style={{backgroundColor:"lightblue"}} fullWidth required placeholder='Name' onChange={nameHandler}></TextField>
            <TextField style={{backgroundColor:"lightblue"}} fullWidth required placeholder='Description' onChange={descriptionHandler}></TextField>
            <TextField style={{backgroundColor:"lightblue"}} type='number' fullWidth required placeholder='Amount' onChange={amountHandler}></TextField>
            <div style={{display:"flex", gap:"500px"}}>
                <div>
                    <div>Start date</div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker sx={{backgroundColor:"lightblue"}} onChange={handleStartDateChange} format='DD/MM/YYYY' maxDate={dayjs()} />
                    </LocalizationProvider>
                </div>
                <div>
                    <div>End Date</div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker sx={{backgroundColor:"lightblue"}} onChange={handleEndDateChange} format='DD/MM/YYYY' minDate={dayjs()} />
                    </LocalizationProvider>
                </div>
            </div>
        </div>
           
            <Button style={{position:"absolute",bottom:"10px",backgroundColor:"lightseagreen"}} type='submit' fullWidth variant='contained' >Add</Button>
        </Box>
        
    </div>
  )
}

export default AddDebt