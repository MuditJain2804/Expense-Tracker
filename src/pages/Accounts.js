import {  Stack } from '@mui/material'
import React from 'react'
import PaymentsIcon from '@mui/icons-material/Payments';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useNavigate } from 'react-router-dom';

const Accounts = ({name,addedAccounts,cashIncome,cashExpense,bankIncome,bankExpense}) => {
  const navigate = useNavigate();
  function clickHandler(account){
    const path = "/" + account + "TransactionHistory";
    navigate(path)
  }
  return (
    <div>
    <Stack direction='row' spacing={3}>
      {addedAccounts.map((account) => 
      <div style={{display:"flex",flexDirection:"column",padding:"10px",gap:"10px",backgroundColor:"lightblue",width:"400px"}} onClick={() => clickHandler(account)}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div>
            <div>{name}</div>
            <div style={{fontSize:"12px"}}>{account}</div>
          </div>
          <div>
            {account === 'Cash' ? <PaymentsIcon/> : <CreditCardIcon/>}
          </div>
        </div>
        <div style={{fontSize:"30px"}}>₹{account === 'Cash' ? cashIncome-cashExpense : bankIncome-bankExpense} </div>
        <div style={{gap:"5px"}}>
        <div>Total</div>
        <div style={{display:"flex",gap:"100px"}}>
          <div>
            <div>Income</div>
            <div  style={{fontSize:"25px"}}>₹{account === 'Cash' ? cashIncome : bankIncome}</div>
          </div>
          <div>
            <div>Expense</div>
            <div style={{fontSize:"25px"}}>₹{account === 'Cash' ? cashExpense : bankExpense}</div>
          </div>
        </div>
        </div>
      </div>
      )}
    </Stack>
    </div>
  )
}

export default Accounts