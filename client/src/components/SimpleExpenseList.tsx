import React from 'react';

type Expense = { id: string; title: string; amount: number; category: string };

const SimpleExpenseList: React.FC<{ expenses: Expense[] }> = ({ expenses }) => {
  if (expenses.length === 0) {
    return <div>No expenses yet. Add one above.</div>;
  }

  return (
    <div>
      <h2>Your Expenses</h2>
      <ul>
        {expenses.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.title}</strong> — ${exp.amount.toFixed(2)} <em>({exp.category})</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleExpenseList;
