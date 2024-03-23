import React from 'react'
import Navbar from '../components/Navbar';

const Home = ({name,addedAccounts,addedCategories,debtName,debtDescription,debtAmount,debtDaysLeft,creditName,creditDescription,creditAmount,creditDaysLeft,onKeyChange,budgetCategory,budget,cashIncome,cashExpense,bankIncome,bankExpense,spentCategory,spentAmount,incomeCategory,incomeAmount}) => {
  return (
    <div>
      <Navbar name={name} addedAccounts={addedAccounts} addedCategories={addedCategories} debtName={debtName} debtDescription={debtDescription} debtAmount={debtAmount} debtDaysLeft={debtDaysLeft} creditName={creditName} creditDescription={creditDescription} creditAmount={creditAmount} creditDaysLeft={creditDaysLeft} onKeyChange={onKeyChange} budgetCategory={budgetCategory} budget={budget} cashIncome={cashIncome} cashExpense={cashExpense}  bankIncome={bankIncome} bankExpense={bankExpense} spentCategory = {spentCategory} spentAmount = {spentAmount} incomeCategory={incomeCategory} incomeAmount={incomeAmount}/>
    </div>
  )
}

export default Home