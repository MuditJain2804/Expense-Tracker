import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import PaymentsIcon from '@mui/icons-material/Payments';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddedAccounts from './AddedAccounts';

const DefaultAccounts = ({addedAccounts, setAddedAccounts}) => {
    const[defaultAccounts, setDefaultAccounts] = useState(['Cash','Bank']);
    function handleAddAccount(accountType){
        setAddedAccounts([...addedAccounts,accountType])
        setDefaultAccounts(defaultAccounts.filter((account) => account !== accountType))
    }
  return (
    <div>
        <Stack direction='row' spacing={2}>
            {defaultAccounts.map((account,index) => (
                <Button style={{ color:"black" ,border:"1px solid black"}} variant='outlined' startIcon={account === 'Cash' ? <PaymentsIcon style={{color:"lightseagreen"}}/> : <CreditCardIcon style={{color:"lightseagreen"}}/>} onClick={() => handleAddAccount(account)}>{account}</Button> 
            ))}
        </Stack>
        
        <AddedAccounts addedAccounts={addedAccounts}/>
    </div>
  )
}

export default DefaultAccounts