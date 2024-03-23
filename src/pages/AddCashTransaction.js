import React,{useState} from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { TextField, ToggleButton, ToggleButtonGroup, Stack,Button, Box } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { MobileDateTimePicker} from '@mui/x-date-pickers';
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

const AddCashTransaction = ({cashTransactionType,addedCategories,selectedCashCategory,setSelectedCashCategory,cashTransaction,setCashTransaction,cashTransactionName,setCashTransactionName,cashTransactionDescription,setCashTransactionDescription,cashTransactionAmount,setCashTransactionAmount,cashTransactionDate,setCashTransactionDate,cashIncome,setCashIncome,cashExpense,setCashExpense,spentCategory,setSpentCategory,spentAmount,setSpentAmount,incomeCategory,setIncomeCategory,incomeAmount,setIncomeAmount}) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedValue, setSelectedValue] = useState(cashTransactionType);
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [amount, setAmount] =useState(null)
  const [date, setDate] = useState(dayjs())
  const [budgetCategory, setBudgetCategory] = useState(null)
  const [income, setIncome] = useState(null)
  const IncomeCategories = ['Salary','Business','Investment','Rental','Gift','Other'];
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
    'Other':<MiscellaneousServicesIcon style={{color:"lightseagreen"}}/>,
    'Salary':<FaHandHoldingUsd style={{color:"lightseagreen"}}/>,
    'Business':<BusinessIcon style={{color:"lightseagreen"}}/>,
    'Investment':<BsGraphUpArrow style={{color:"lightseagreen"}}/>,
    'Rental':<HomeIcon style={{color:"lightseagreen"}}/>,
    'Gift':<PiGiftLight style={{color:"lightseagreen"}}/>
} 
  const handleChange = (event, newValue) => {
    setSelectedValue(newValue);
  };
  function backHandler(){
    navigate('/CashTransactionHistory')
  }
  function clickHandler(category){
    setSelectedCategory(category)
    if(selectedValue === "Expense"){
      setBudgetCategory(category)
    }
    if(selectedValue === "Income"){
      setIncome(category)
    }
    if(selectedValue === 'Income') {
      setCashIncome(cashIncome + amount)
    }
    if(selectedValue === 'Expense') {
      setCashExpense(cashExpense + amount)
    } 
  }
  const handleDateTimeChange = (newDate) => {
    setDate(newDate)
  }
  function submitHandler(event){
    event.preventDefault();
    setCashTransaction([...cashTransaction,selectedValue])
    setCashTransactionName([...cashTransactionName,name])
    setCashTransactionDescription([...cashTransactionDescription,description])
    setCashTransactionAmount([...cashTransactionAmount,amount])
    setCashTransactionDate([...cashTransactionDate,date])
    if (selectedCategory) {
      setSelectedCashCategory([...selectedCashCategory,selectedCategory])
    }
    if(budgetCategory){
      setSpentCategory([...spentCategory,budgetCategory])
    }
    if(income){
      setIncomeCategory([...incomeCategory,income])
    }
    if(selectedValue === "Income"){
      setIncomeAmount([...incomeAmount,amount])
    }
    if(selectedValue === "Expense"){
      setSpentAmount([...spentAmount,amount])
    }
    navigate('/CashTransactionHistory');
  }
  return (
    <div style={{position:"relative",height:"97vh"}}>
      <div style={{display:"flex", gap:"15px"}}>
          <div onClick={backHandler}><ArrowBackIcon/></div>
          <div>Add Transaction</div>
      </div>
      <div style={{marginBottom:"10px"}}>
        <ToggleButtonGroup style={{gap:"5px"}} onChange={handleChange} exclusive value={selectedValue}>
          <ToggleButton style={{backgroundColor:"lightblue",border:"1px solid black"}} value='Income'>Income</ToggleButton>
          <ToggleButton style={{backgroundColor:"lightblue",border:"1px solid black"}} value='Expense'>Expense</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Box component='form' onSubmit={submitHandler}>
      <div style={{display:"flex", flexDirection:"column",gap:"10px"}}>
        {selectedValue === null ? <TextField style={{backgroundColor:"lightblue"}} required sx={{width:"500px"}} disabled placeholder='Please Select Transaction Type'></TextField> : <TextField style={{backgroundColor:"lightblue"}} onChange={(event) => setName(event.target.value)} required sx={{width:"500px"}} placeholder={selectedValue + ' name'} ></TextField>}
        <TextField style={{backgroundColor:"lightblue"}} onChange={(event) => setDescription(event.target.value)} required sx={{width:"500px"}} placeholder='Description'></TextField>
        <TextField style={{backgroundColor:"lightblue"}} onChange={(event) => setAmount(parseInt(event.target.value))} required type='number' sx={{width:"500px"}} placeholder='Amount'></TextField>
        <div>
        <div>Select Date and Time</div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDateTimePicker sx={{backgroundColor:"lightblue"}} onChange={handleDateTimeChange} value={date} format='DD/MM/YYYY hh:mm A' ampm maxDate={dayjs()} />
        </LocalizationProvider>
        </div>
        <div>Select Category</div>
        <Stack direction='row' spacing={2}>
        {selectedValue === "Expense" && addedCategories.map((category) => 
            <Button style={{color:"lightseagreen" ,border:"1px solid black",backgroundColor: selectedCategory === category ? 'lightblue' : 'inherit'}} variant={selectedCategory === category ? 'contained' : 'outlined'} onClick={() => clickHandler(category)} startIcon={categoryIcons[category]}>
              {category}
            </Button>
        )}
        {selectedValue === "Income" && IncomeCategories.map((category) => 
            <Button style={{color:"lightseagreen" ,border:"1px solid black",backgroundColor: selectedCategory === category ? 'lightblue' : 'inherit'}} variant={selectedCategory === category ? 'contained' : 'outlined'} onClick={() => clickHandler(category)} startIcon={categoryIcons[category]}>
              {category}
            </Button>
        )}
        </Stack>
      </div>
      <Button style={{backgroundColor:"lightseagreen",position:"absolute",bottom:"5px",right:"10px", width:"80px",padding:"10px"}} type='submit' variant='contained'>Add</Button>
      </Box>
      </div>
  )
}
export default AddCashTransaction