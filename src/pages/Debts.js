import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogTitle, Fab, LinearProgress, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { PiMoneyFill } from "react-icons/pi";

const Debts = ({debtName,debtDescription,debtAmount,debtDaysLeft}) => {
  const navigate = useNavigate();
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [amount,setAmount] = useState(0);
  const [paidValue, setPaidValue] = useState(0)
  const [progressValue, setProgressValue] = useState(0);
  function clickHandler(){
    navigate('/AddDebt')
  }
  function handleDialogBox(){
    setOpenDialogBox(true)
  }
  function amountHandler(event){
    setAmount(parseFloat(event.target.value))
  }
  function handleClose(){
    setOpenDialogBox(false)
    setPaidValue((prevValue) => prevValue+amount)
    setAmount(0)   
  }
  useEffect(() =>{
    setProgressValue(Math.min(((paidValue/debtAmount)*100),100))
  },[paidValue,debtAmount])
  return (
    <div style={{position:"relative",height:"97vh"}}>
    { debtAmount ?
      <div style={{display:"flex",flexDirection:"column",backgroundColor:"lightblue",marginRight:"10px",padding:"10px"}}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div>
            <div>{debtName}</div>
            <div>{debtDescription}</div>
          </div>
          <div>
            <div>₹ {debtAmount-paidValue}</div>
          </div>
        </div>
        <div><LinearProgress variant='determinate' value={progressValue}/></div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div>{debtDaysLeft} Days Left</div>
          {progressValue<100 ?
            <div><Button startIcon={<PiMoneyFill/>} onClick={handleDialogBox}>Pay debt</Button></div>:<div>Debt paid</div>
          }
        </div>
        {openDialogBox && 
      <div>
      <Dialog fullWidth onClose={handleClose} open>
          <DialogTitle>Pay debt</DialogTitle>
          <TextField type='number' style={{marginLeft:"25px",width:"550px"}} placeholder='Enter amount' onChange={amountHandler}></TextField>
          <Button onClick={handleClose}>Update</Button>
        </Dialog>  
      </div>
      }
      </div>
      :<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"85vh",fontSize:"20px"}}>
          <div>There are no debts at this time</div>
          <div style={{fontSize:"18px"}}>Add your debts to see them</div>
        </div> }
      <Fab style={{position:"absolute",bottom:"10px",right:"15px",backgroundColor:"lightseagreen"}} onClick={clickHandler}><AddIcon/></Fab>
    </div>
  )
}

export default Debts