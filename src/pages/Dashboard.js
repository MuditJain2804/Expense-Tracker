import React from 'react'

const Dashboard = ({name,cashIncome,cashExpense,bankIncome,bankExpense}) => {
  return (
    <div>
    <h3>{name}</h3>
    <p>Welcome back!</p>
    <div style={{display:"flex",flexDirection:"column",gap:"10px",padding:"20px",backgroundColor:"lightblue",width:"500px"}}>
      <div>
        <div>Total Balance</div>
        <div  style={{fontSize:"35px"}}>₹{cashIncome+bankIncome-cashExpense-bankExpense }</div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
        <div>Total</div>
        <div style={{display:"flex",gap:"100px"}}>
        <div>
          <div>Income</div>
          <div style={{fontSize:"25px"}}>₹{cashIncome+bankIncome}</div>
        </div>
        <div>
          <div>Expense</div>
          <div style={{fontSize:"25px"}}>₹{cashExpense+bankExpense}</div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard