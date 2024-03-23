import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
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
import AddedCategories from './AddedCategories';


const DefaultCategories = ({addedCategories,setAddedCategories}) => {
    const [defaultCategories,setDefaultCategories] = useState(['Groceries','Dining','Transportation','Medical',
    'Education','Travel','Entertainment','Clothing','Utilities','Other']);

    function handleAddedCategory(categoryType){
        setAddedCategories([...addedCategories,categoryType]);
        setDefaultCategories(defaultCategories.filter((category) => category !== categoryType))
    }
    
    const categoryIcons = {
        'Groceries' :<LocalGroceryStoreIcon style={{color:"lightseagreen"}}/>,
        'Dining':<RestaurantMenuIcon style={{color:"lightseagreen"}}/>,
        'Transportation':<CommuteIcon style={{color:"lightseagreen"}}/>,
        'Medical':<LocalHospitalIcon style={{color:"lightseagreen"}}/>,
        'Education':<SchoolIcon style={{color:"lightseagreen"}}/>,
        'Travel':<FlightIcon style={{color:"lightseagreen"}}/>,
        'Entertainment':<MovieIcon style={{color:"lightseagreen"}}/>,
        'Clothing':<CheckroomIcon style={{color:"lightseagreen"}}/>,
        'Utilities':<PropaneTankIcon style={{color:"lightseagreen"}}/>,
        'Other':<MiscellaneousServicesIcon style={{color:"lightseagreen"}}/>
    } 
  return (
    <div>
        <Stack direction='row' spacing={2}>
            {defaultCategories.map((category) => 
            <Button style={{ color:"black" ,border:"1px solid black"}} variant='outlined' onClick={() => handleAddedCategory(category)} startIcon={categoryIcons[category]}>{category}</Button>)}
        </Stack>
        <br/>
        <AddedCategories addedCategories={addedCategories} />
    </div>
  )
}

export default DefaultCategories