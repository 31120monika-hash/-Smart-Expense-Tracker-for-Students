import React from 'react';
import { useExpenses } from '../hooks/useExpenses';

const ExpenseList: React.FC = () => {
    const { expenses, loading, error } = useExpenses();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading expenses: {error.message}</div>;
    }

    return (
        <div>
            <h2>Your Expenses</h2>
            <ul>
                {expenses.map(expense => (
                    <li key={expense.id}>
                        <span>{expense.description}</span> - <span>${expense.amount.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;