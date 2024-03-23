import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Name from './pages/Name';
import SelectAccounts from './pages/SelectAccounts';
import SelectCategories from './pages/SelectCategories';
import Home from './pages/Home';
import AddDebt from './pages/AddDebt';
import AddCredit from './pages/AddCredit';
import SetBudget from './pages/SetBudget';
import CashTransactionHistory from './pages/CashTransactionHistory';
import BankTransactionHistory from './pages/BankTransactionHistory';
import AddCashTransaction from './pages/AddCashTransaction';
import AddBankTransaction from './pages/AddBankTransaction';

function App() {
  const [addedAccounts, setAddedAccounts] = useState([])
  const [addedCategories,setAddedCategories] = useState([])
  const [name, setName] = useState('')
  const [cashTransactionType, setCashTransactionType] = useState('');
  const [bankTransactionType, setBankTransactionType] = useState('');
  const [debtName,setDebtName] = useState('');
  const [debtDescription,setDebtDescription] = useState('');
  const [debtAmount,setDebtAmount] = useState(null)
  const [debtDaysLeft, setDebtDaysLeft] = useState(null)
  const [creditName,setCreditName] = useState('');
  const [creditDescription,setCreditDescription] = useState('');
  const [creditAmount,setCreditAmount] = useState(null)
  const [creditDaysLeft, setCreditDaysLeft] = useState(null)
  const [budgetCategory, setBudgetCategory] = useState([]);
  const [budget, setBudget] = useState([]);
  const [selectedCashCategory, setSelectedCashCategory] = useState([])
  const [cashTransaction, setCashTransaction] = useState([]);
  const [cashTransactionName, setCashTransactionName] = useState([])
  const [cashTransactionDescription,setCashTransactionDescription] = useState([]) 
  const [cashTransactionAmount,setCashTransactionAmount] = useState([])
  const [cashTransactionDate, setCashTransactionDate] = useState([])
  const [cashIncome, setCashIncome] = useState(0)
  const [cashExpense, setCashExpense] = useState(0)
  const [selectedBankCategory, setSelectedBankCategory] = useState([])
  const [bankTransaction, setBankTransaction] = useState([]);
  const [bankTransactionName, setBankTransactionName] = useState([])
  const [bankTransactionDescription,setBankTransactionDescription] = useState([]) 
  const [bankTransactionAmount,setBankTransactionAmount] = useState([])
  const [bankTransactionDate, setBankTransactionDate] = useState([])
  const [bankIncome, setBankIncome] = useState(0)
  const [bankExpense, setBankExpense] = useState(0)
  const [spentCategory, setSpentCategory] = useState([])
  const [spentAmount, setSpentAmount] = useState([])
  const [incomeCategory, setIncomeCategory] = useState([])
  const [incomeAmount, setIncomeAmount] = useState([])

  const  updateKeyValuePair = (key,value) => {
    setBudgetCategory([...budgetCategory,key]);
    setBudget([...budget,value]);
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Name name={name} setName={setName}/>}></Route>
        <Route path='/selectCategories' element={<SelectCategories addedCategories={addedCategories} setAddedCategories={setAddedCategories}/>}></Route>
        <Route path='/selectAccounts' element={<SelectAccounts addedAccounts={addedAccounts} setAddedAccounts={setAddedAccounts}/>}></Route>
        <Route path='/home' element={<Home name={name} addedAccounts={addedAccounts} addedCategories={addedCategories} debtName={debtName} debtDescription={debtDescription} debtAmount={debtAmount} debtDaysLeft={debtDaysLeft} creditName={creditName} creditDescription={creditDescription} creditAmount={creditAmount} creditDaysLeft={creditDaysLeft} onKeyChange={(key) => updateKeyValuePair(key, budget[budgetCategory.length])} setBudgetCategory={setBudgetCategory} budgetCategory={budgetCategory} budget={budget} cashIncome={cashIncome} cashExpense={cashExpense} bankIncome={bankIncome} bankExpense={bankExpense} spentCategory = {spentCategory} spentAmount = {spentAmount} incomeCategory={incomeCategory} incomeAmount={incomeAmount} />}></Route>
        <Route path='/AddDebt' element={<AddDebt setDebtName={setDebtName} setDebtDescription={setDebtDescription} setDebtAmount={setDebtAmount} setDebtDaysLeft={setDebtDaysLeft} />}></Route>
        <Route path='/AddCredit' element={<AddCredit setCreditName={setCreditName} setCreditDescription={setCreditDescription} setCreditAmount={setCreditAmount} setCreditDaysLeft={setCreditDaysLeft}/>}></Route>
        <Route path='/SetBudget' element={<SetBudget onValueChange={(value) => updateKeyValuePair(budgetCategory[budgetCategory.length-1],value)}/>}></Route>
        <Route path='/CashTransactionHistory' element={<CashTransactionHistory setCashTransactionType={setCashTransactionType} selectedCashCategory={selectedCashCategory} cashTransaction={cashTransaction} cashTransactionName={cashTransactionName} cashTransactionDescription={cashTransactionDescription} cashTransactionAmount={cashTransactionAmount} cashTransactionDate={cashTransactionDate}/>}></Route>
        <Route path='/BankTransactionHistory' element={<BankTransactionHistory setBankTransactionType={setBankTransactionType} selectedBankCategory={selectedBankCategory} bankTransaction={bankTransaction} bankTransactionName={bankTransactionName} bankTransactionDescription={bankTransactionDescription} bankTransactionAmount={bankTransactionAmount} bankTransactionDate={bankTransactionDate} />}></Route>
        <Route path='/AddCashTransaction' element={<AddCashTransaction cashTransactionType={cashTransactionType} addedCategories={addedCategories} selectedCashCategory={selectedCashCategory} setSelectedCashCategory={setSelectedCashCategory} cashTransaction={cashTransaction} setCashTransaction={setCashTransaction} cashTransactionName={cashTransactionName} setCashTransactionName={setCashTransactionName} cashTransactionDescription={cashTransactionDescription} setCashTransactionDescription={setCashTransactionDescription} cashTransactionAmount={cashTransactionAmount} setCashTransactionAmount={setCashTransactionAmount} cashTransactionDate={cashTransactionDate} setCashTransactionDate={setCashTransactionDate} cashIncome={cashIncome} setCashIncome={setCashIncome} cashExpense={cashExpense} setCashExpense={setCashExpense} spentCategory = {spentCategory} setSpentCategory={setSpentCategory} spentAmount = {spentAmount} setSpentAmount={setSpentAmount} incomeCategory={incomeCategory} setIncomeCategory={setIncomeCategory} incomeAmount={incomeAmount} setIncomeAmount={setIncomeAmount}/>}></Route>
        <Route path='/AddBankTransaction' element={<AddBankTransaction bankTransactionType={bankTransactionType} addedCategories={addedCategories} selectedBankCategory={selectedBankCategory} setSelectedBankCategory={setSelectedBankCategory} bankTransaction={bankTransaction} setBankTransaction={setBankTransaction} bankTransactionName={bankTransactionName} setBankTransactionName={setBankTransactionName} bankTransactionDescription={bankTransactionDescription} setBankTransactionDescription={setBankTransactionDescription} bankTransactionAmount={bankTransactionAmount} setBankTransactionAmount={setBankTransactionAmount} bankTransactionDate={bankTransactionDate} setBankTransactionDate={setBankTransactionDate} bankIncome={bankIncome} setBankIncome={setBankIncome} bankExpense={bankExpense} setBankExpense={setBankExpense} spentCategory = {spentCategory} setSpentCategory={setSpentCategory} spentAmount = {spentAmount} setSpentAmount={setSpentAmount} incomeCategory={incomeCategory} setIncomeCategory={setIncomeCategory} incomeAmount={incomeAmount} setIncomeAmount={setIncomeAmount}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
