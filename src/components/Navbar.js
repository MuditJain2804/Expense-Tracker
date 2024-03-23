import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CategoryIcon from '@mui/icons-material/Category';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsightsIcon from '@mui/icons-material/Insights';
import Dashboard from '../pages/Dashboard'
import Accounts from '../pages/Accounts'
import Debts from '../pages/Debts'
import Credits from '../pages/Credits'
import Categories from '../pages/Categories'
import Budget from '../pages/Budget'
import Overview from '../pages/Overview'

const Navbar = ({name,addedAccounts,addedCategories,debtName,debtDescription,debtAmount,debtDaysLeft,creditName,creditDescription,creditAmount,creditDaysLeft,onKeyChange,budgetCategory,budget,cashIncome,cashExpense,bankIncome,bankExpense,spentCategory,spentAmount,incomeCategory,incomeAmount}) => {
    const list = ['Home','Accounts','Debts','Credits','Categories','Budget','Overview']
    const [activeComponent, setActiveComponent] = useState('Home')
    const components = {
        'Home' : <Dashboard name={name} cashIncome={cashIncome} cashExpense={cashExpense} bankIncome={bankIncome} bankExpense={bankExpense}/>,
        'Accounts' : <Accounts name={name} addedAccounts={addedAccounts} cashIncome={cashIncome} cashExpense={cashExpense} bankIncome={bankIncome} bankExpense={bankExpense}/> ,
        'Debts': <Debts debtName={debtName} debtDescription={debtDescription} debtAmount={debtAmount} debtDaysLeft={debtDaysLeft}/> ,
        'Credits': <Credits creditName={creditName} creditDescription={creditDescription} creditAmount={creditAmount} creditDaysLeft={creditDaysLeft}/>,
        'Categories' : <Categories addedCategories={addedCategories} onKeyChange={onKeyChange}/> ,
        'Budget' : <Budget budgetCategory={budgetCategory} budget={budget} spentCategory = {spentCategory} spentAmount = {spentAmount}/>,
        'Overview' : <Overview addedCategories={addedCategories} spentCategory = {spentCategory} spentAmount = {spentAmount} incomeCategory={incomeCategory} incomeAmount={incomeAmount}/>
    }
    const icon = {
        'Home' : <HomeIcon/>,
        'Accounts' : <CreditCardIcon/>,
        'Debts': <CurrencyRupeeIcon/> ,
        'Credits': <CreditScoreIcon/>,
        'Categories' : <CategoryIcon/>,
        'Budget' : <CalendarMonthIcon/>,
        'Overview' : <InsightsIcon/>
    }
    function clickHandler(text){
        setActiveComponent(text)
    }
  return (
    <div>
        <Box>
            <CssBaseline/>
            <Drawer variant='permanent' anchor='left' sx={{Width:200}}>
                <List>
                    {list.map((text,index) => (
                        <ListItem disablePadding style={{ display:"flex" ,flexDirection:"column", alignItems:"center"}}>
                        <ListItemButton onClick={() => clickHandler(text)} selected={activeComponent===text}
                            style={{ display:"flex" ,flexDirection:"column", alignItems:"center",width:"110px"}}>
                            <ListItemIcon >
                                {icon[text]}
                            </ListItemIcon>
                            <ListItemText style={{marginRight:"30px"}} primary={text}/>
                        </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div style={{ marginLeft: '150px', marginTop: '20px' }}>
                {components[activeComponent]}
            </div>
        </Box>
    </div>
  )
}

export default Navbar