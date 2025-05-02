import { useState } from 'react';

function ExpensesTable({ data, addExpense, deleteExpense }) {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!source || !amount || !date) return;
    addExpense({ source, amount: parseFloat(amount), date });
    setSource('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="table-section">
      <h2>Expenses</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          placeholder="Source"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <button type="submit">Add</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Source</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.source}</td>
              <td>{exp.date}</td>
              <td>${exp.amount}</td>
              <td><button onClick={() => deleteExpense(exp.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpensesTable;
