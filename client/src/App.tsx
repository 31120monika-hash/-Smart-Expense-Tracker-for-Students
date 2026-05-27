import React, { useMemo, useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import SimpleExpenseList from './components/SimpleExpenseList';
import './styles/globals.css';

type LocalExpense = { id: string; title: string; amount: number; category: string };

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<LocalExpense[]>([]);
  const [monthlySalary, setMonthlySalary] = useState<number>(0);
  const [spendingTarget, setSpendingTarget] = useState<number>(0);

  const totalSpent = useMemo(
    () => expenses.reduce((sum, item) => sum + item.amount, 0),
    [expenses]
  );

  const remainingBudget = useMemo(
    () => Math.max(monthlySalary - totalSpent, 0),
    [monthlySalary, totalSpent]
  );

  const targetExceeded = spendingTarget > 0 && totalSpent > spendingTarget;

  const uniqueCategories = useMemo(
    () => new Set(expenses.map((item) => item.category)).size,
    [expenses]
  );

  const handleAdd = (expense: { title: string; amount: number; category: string }) => {
    if (monthlySalary === 0) {
      alert('Please set a salary before adding expenses.');
      return;
    }

    const newExpense: LocalExpense = {
      id: Date.now().toString(),
      title: expense.title || 'Untitled',
      amount: Number(expense.amount) || 0,
      category: expense.category || 'General',
    };
    setExpenses((prev) => [newExpense, ...prev]);
  };

  return (
    <div className="app-shell">
      <header className="hero-panel">
        <div>
          <p className="eyebrow">Smart finance for students</p>
          <h1>Track spending with clarity</h1>
          <p className="hero-copy">
            Manage your budget, log expenses instantly, and keep a clean pulse on every charge.
          </p>
        </div>
        <div className="hero-metrics">
          <div className="metric-card">
            <span className="metric-label">Monthly salary</span>
            <strong>${monthlySalary.toFixed(2)}</strong>
          </div>
          <div className="metric-card">
            <span className="metric-label">Total spent</span>
            <strong>${totalSpent.toFixed(2)}</strong>
          </div>
          <div className="metric-card">
            <span className="metric-label">Remaining</span>
            <strong>${remainingBudget.toFixed(2)}</strong>
          </div>
          <div className="metric-card">
            <span className="metric-label">Expenses</span>
            <strong>{expenses.length}</strong>
          </div>
        </div>
        <div className="salary-panel">
          <label htmlFor="salary-input">Set monthly salary</label>
          <input
            id="salary-input"
            type="number"
            value={monthlySalary}
            onChange={(e) => setMonthlySalary(Number(e.target.value) || 0)}
            placeholder="Enter your monthly salary"
          />
          <label htmlFor="target-input">Set spending target</label>
          <input
            id="target-input"
            type="number"
            value={spendingTarget}
            onChange={(e) => setSpendingTarget(Number(e.target.value) || 0)}
            placeholder="Enter your target amount"
          />
          {targetExceeded && (
            <div className="target-alert">
              Warning: you have exceeded your spending target!
            </div>
          )}
        </div>
      </header>

      <main className="main-grid">
        <section className="panel panel--accent">
          <div className="panel-header">
            <div>
              <p className="panel-tag">Quick add</p>
              <h2>Add a new expense</h2>
            </div>
          </div>
          <ExpenseForm onSubmit={handleAdd} />
        </section>

        <section className="panel panel--soft">
          <div className="panel-header">
            <div>
              <p className="panel-tag">Recent activity</p>
              <h2>Expense history</h2>
            </div>
          </div>
          <SimpleExpenseList expenses={expenses} />
        </section>
      </main>

      <footer className="footer-bar">
        <p>Built for students who want a smarter, cleaner way to manage daily spending.</p>
      </footer>
    </div>
  );
};

export default App;
