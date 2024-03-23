import { Button, IconButton } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenuSharp';
import CommuteIcon from '@mui/icons-material/Commute';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import FlightIcon from '@mui/icons-material/Flight';
import MovieIcon from '@mui/icons-material/Movie';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { FaHandHoldingUsd } from "react-icons/fa";
import BusinessIcon from '@mui/icons-material/Business';
import { BsGraphUpArrow } from "react-icons/bs";
import HomeIcon from '@mui/icons-material/Home';
import { PiGiftLight } from "react-icons/pi";
import dayjs from 'dayjs';

const CashTransactionHistory = ({cashTransactionType,setCashTransactionType,selectedCashCategory,cashTransaction,cashTransactionName,cashTransactionDescription,cashTransactionAmount,cashTransactionDate}) => {
    const navigate = useNavigate();
    const type = ['Income','Expense'];
    const ArrayLength = (selectedCashCategory.length)
    const categoryIcons = {
        'Groceries' :<LocalGroceryStoreIcon/>,
        'Dining':<RestaurantMenuIcon/>,
        'Transportation':<CommuteIcon/>,
        'Medical':<LocalHospitalIcon/>,
        'Education':<SchoolIcon/>,
        'Travel':<FlightIcon/>,
        'Entertainment':<MovieIcon/>,
        'Clothing':<CheckroomIcon/>,
        'Utilities':<PropaneTankIcon/>,
        'Other':<MiscellaneousServicesIcon/>,
        'Salary':<FaHandHoldingUsd/>,
        'Business':<BusinessIcon/>,
        'Investment':<BsGraphUpArrow/>,
        'Rental':<HomeIcon/>,
        'Gift':<PiGiftLight/>
    } 
    const Category = selectedCashCategory.slice(0, ArrayLength);
    const Name = cashTransactionName.slice(0, ArrayLength);
    const Description = cashTransactionDescription.slice(0, ArrayLength);
    const Amount = cashTransactionAmount.slice(0, ArrayLength);
    const Date = cashTransactionDate.slice(0, ArrayLength).map(date => dayjs(date).format('DD/MM/YYYY hh:mm A'));
    function clickHandler(transaction){
        navigate('/AddCashTransaction')
        setCashTransactionType(transaction)
    }
    function backHandler(){
        navigate('/home')
    }
  return (
    <div style={{position:"relative",height:"97vh"}}>
        <div style={{display:"flex", gap:"15px"}}>
            <div onClick={backHandler}><ArrowBackIcon/></div>
            <div>Cash Transaction History</div>
        </div>
        {ArrayLength>0 ? 
        <div style={{display:"flex",flexDirection:"column",gap:"20px",alignItems:"baseline"}}>
            {Category.map((category,index) => 
            <div style={{display:"flex",justifyContent:"space-between",width:"97vw"}}>
            <div style={{display:"flex"}}>
              <IconButton>{categoryIcons[category]}</IconButton>
              <div>
              <div style={{fontSize:"20px"}}>{Name[index]}</div>
              <div style={{display:"flex",gap:"10px"}}>
              <div style={{color:"gray"}}>{Description[index]}</div>
              <div style={{color:"gray"}}>{Date[index]}</div>
              </div>
              </div>
            </div>
            {
              cashTransaction[index] === "Income" ? <div style={{color:"green"}}>₹{Amount[index]}</div> : <div style={{color:"red"}}>₹{Amount[index]}</div>
            }
            </div>  
            )}
        </div> : 
        <div>

        </div>
        }
        <div style={{position:"absolute",bottom:"0px",right:"0px"}}>
          {type.map((transaction) => 
                <Button style={{backgroundColor:"lightseagreen",marginRight:"5px"}} variant='contained' startIcon={<AddIcon/>} onClick={() => clickHandler(transaction)}>{transaction}</Button>
          )}
        </div>
    </div>
  )
}

export default CashTransactionHistory