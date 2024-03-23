import React from 'react'
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
import { IconButton, LinearProgress } from '@mui/material';

const Budget = ({budgetCategory,budget,spentCategory,spentAmount}) => {
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
    'Other':<MiscellaneousServicesIcon/>
} 
  const spentMap = {};
  spentCategory.forEach((category, index) => {
    spentMap[category] = (spentMap[category] || 0) + spentAmount[index];
  });
return (
  <div>
    {budgetCategory.map((category, index) => {
      const spent = spentMap[category] || 0; 
      const remaining = budget[index] - spent;
      
      return (
        (budget[index] !== null && budget[index] !== undefined) && (
          <div style={{marginRight:"20px"}} key={category}>
            <div style={{}}><IconButton>{categoryIcons[category]}</IconButton>{category}</div>
            <div>Limit: ₹{budget[index]}</div>
            <div>Spent: ₹{spent}</div>
            <div>Remaining: ₹{remaining <= 0 ? 0 : remaining}</div>
            <LinearProgress variant='determinate' value={Math.min((spent / budget[index]) * 100,100) } />
            <div style={{ width: "100%", height: "1px", color: "black", border: "1px solid black", marginTop: "15px" }}></div>
          </div>
        )
      );
    })}
  </div>
);
};
export default Budget