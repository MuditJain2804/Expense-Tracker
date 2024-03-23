import { Button, Stack } from '@mui/material'
import React from 'react'
import PaymentsIcon from '@mui/icons-material/Payments';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const AddedAccounts = ({addedAccounts}) => {
  return (
    <div>
        <p>Added accounts</p>
        <Stack direction='row' spacing={2}>
        {addedAccounts.map((account, index) => (
            <Button style={{ color:"black" ,border:"1px solid black"}} variant='outlined' key={index} startIcon={account === 'Cash' ? <PaymentsIcon style={{color:"lightseagreen"}}/> : <CreditCardIcon style={{color:"lightseagreen"}}/>}>{account}</Button>
        ))}
        </Stack>
    </div>
  )
}

export default AddedAccounts