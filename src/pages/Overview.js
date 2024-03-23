import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

const Overview = ({spentCategory,spentAmount,incomeCategory,incomeAmount}) => {
  
  if (spentCategory.length === 0 || spentAmount.length === 0) {
    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px",height:"97vh"}}>No data available</div>;
  }
  if (incomeCategory.length === 0 || incomeAmount.length === 0) {
    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px",height:"97vh"}}>No data available</div>;
  }
  const spentMap = {};
  spentCategory.forEach((category, index) => {
  spentMap[category] = (spentMap[category] || 0) + spentAmount[index];
  });
  const incomeMap = {};
  incomeCategory.forEach((category, index) => {
  incomeMap[category] = (incomeMap[category] || 0) + incomeAmount[index];
  });
  const categories = Object.keys(spentMap);
  const amounts = Object.values(spentMap);
  const Income = Object.keys(incomeMap);
  const IncomeAmount = Object.values(incomeMap);
  return (
    <div>
         <div>
         <div>Income</div>
            <BarChart
              xAxis={[{scaleType: 'band',data: Income }]}
              series={[{ data: IncomeAmount }]}
              width={400}
              height={300}
            />
            <div>Expense</div>
            <BarChart 
              xAxis={[{scaleType: 'band',data: categories }]}
              series={[{ data: amounts }]}
              width={400}
              height={300}
            />
            
         </div>
    </div>
  );
}

export default Overview


