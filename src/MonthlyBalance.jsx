function MonthlyBalance({ incomeData, expensesData }) {
    const totalIncome = incomeData.reduce((sum, tx) => sum + tx.amount, 0);
    const totalExpenses = expensesData.reduce((sum, tx) => sum + tx.amount, 0);
    const savings = totalIncome - totalExpenses;
  
    return (
      <div className="balance-card">
        <div>
          <h3>Total Income:</h3>
          <p>${totalIncome.toFixed(2)}</p>
        </div>
        <div>
          <h3>Total Expenses:</h3>
          <p>${totalExpenses.toFixed(2)}</p>
        </div>
        <div>
          <h3>Savings:</h3>
          <p
            style={{ color: savings >= 0 ? 'green' : 'red' }}
          >
            ${savings.toFixed(2)}
          </p>
        </div>
      </div>
    );
  }
  
  export default MonthlyBalance;
  