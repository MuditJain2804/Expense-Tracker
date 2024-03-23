import React from 'react'
import DefaultAccounts from '../components/DefaultAccounts'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const SelectAccounts = ({addedAccounts, setAddedAccounts}) => {
  const navigate = useNavigate();
  function clickHandler(){
    navigate('/home')
  }
  return (
    <div style={{display:"flex",flexDirection:"column",position:"relative",height:"97vh"}}>
        <h2>Accounts</h2>
        <p>Default Accounts</p>
        <DefaultAccounts addedAccounts={addedAccounts} setAddedAccounts={setAddedAccounts}/>
        <br/>
        <Button style={{position:"absolute", width:"80px",padding:"10px",bottom:"8px", right:"10px",backgroundColor:"lightseagreen" }} variant='contained' onClick={clickHandler}>Done</Button>
    </div>
  )
}

export default SelectAccounts