import React, { useState } from 'react';

const ExpenseForm: React.FC<{ onSubmit: (expense: { title: string; amount: number; category: string }) => void }> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, amount, category });
        setTitle('');
        setAmount(0);
        setCategory('');
    };

    return (
        <form className="expense-form-grid" onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Groceries, coffee, bus fare..."
                    required
                />
            </div>
            <div className="form-field">
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    required
                />
            </div>
            <div className="form-field">
                <label htmlFor="category">Category</label>
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Food, transport, bills..."
                    required
                />
            </div>
            <button className="primary-btn" type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;