import React from 'react';
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
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const Categories = ({addedCategories,onKeyChange}) => {
  const navigate = useNavigate();
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
function clickHandler(Categories){
  navigate('/SetBudget')
  onKeyChange(Categories)
}
  return (
    <div>
      <Stack direction='row' display='grid' gridTemplateColumns='repeat(3,1fr)' rowGap={3} columnGap={3}>
      {addedCategories.map((Categories) => 
        <div style={{display:"flex",alignItems:"center",gap:"20px",backgroundColor:"lightblue", height:"100px",fontSize:"20px",padding:"10px"}} onClick={() => clickHandler(Categories)}>
          {categoryIcons[Categories]}
          {Categories}
        </div>
        )}
      </Stack>
    </div>
  )
}

export default Categories