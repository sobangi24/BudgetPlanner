import { useState, useEffect } from "react";
import IncomeTable from "./IncomeTable";
import ExpensesTable from "./ExpensesTable";
import MonthlyBalance from "./MonthlyBalance";
import "./App.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function App() {
  const [currentMonth, setCurrentMonth] = useState("January");
  const [budgetData, setBudgetData] = useState({});

  useEffect(() => {
    const initData = {};
    months.forEach((month) => {
      initData[month] = { income: [], expenses: [] };
    });
    setBudgetData(initData);
  }, []);

  const addIncome = (income) => {
    setBudgetData((prev) => ({
      ...prev,
      [currentMonth]: {
        ...prev[currentMonth],
        income: [...prev[currentMonth].income, { id: Date.now(), ...income }],
      },
    }));
  };

  const addExpense = (expense) => {
    setBudgetData((prev) => ({
      ...prev,
      [currentMonth]: {
        ...prev[currentMonth],
        expenses: [
          ...prev[currentMonth].expenses,
          { id: Date.now(), ...expense },
        ],
      },
    }));
  };

  const deleteIncome = (id) => {
    setBudgetData((prev) => ({
      ...prev,
      [currentMonth]: {
        ...prev[currentMonth],
        income: prev[currentMonth].income.filter((tx) => tx.id !== id),
      },
    }));
  };

  const deleteExpense = (id) => {
    setBudgetData((prev) => ({
      ...prev,
      [currentMonth]: {
        ...prev[currentMonth],
        expenses: prev[currentMonth].expenses.filter((tx) => tx.id !== id),
      },
    }));
  };

  return (
    <div className="container">
      <h1>Monthly Budget</h1>
      <select
        value={currentMonth}
        onChange={(e) => setCurrentMonth(e.target.value)}
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <div className="tables">
        <IncomeTable
          data={budgetData[currentMonth]?.income || []}
          addIncome={addIncome}
          deleteIncome={deleteIncome}
        />
        <ExpensesTable
          data={budgetData[currentMonth]?.expenses || []}
          addExpense={addExpense}
          deleteExpense={deleteExpense}
        />
      </div>
      <MonthlyBalance
        incomeData={budgetData[currentMonth]?.income || []}
        expensesData={budgetData[currentMonth]?.expenses || []}
      />
    </div>
  );
}

export default App;
