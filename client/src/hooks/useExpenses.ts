import { useState, useEffect } from 'react';
import { fetchExpenses, addExpense, deleteExpense } from '../services/api';
import { Expense } from '../types';

const useExpenses = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadExpenses = async () => {
            try {
                const data = await fetchExpenses();
                setExpenses(data);
            } catch (err) {
                setError('Failed to load expenses');
            } finally {
                setLoading(false);
            }
        };

        loadExpenses();
    }, []);

    const handleAddExpense = async (expense: Expense) => {
        try {
            const newExpense = await addExpense(expense);
            setExpenses((prev) => [...prev, newExpense]);
        } catch (err) {
            setError('Failed to add expense');
        }
    };

    const handleDeleteExpense = async (id: string) => {
        try {
            await deleteExpense(id);
            setExpenses((prev) => prev.filter(exp => exp.id !== id));
        } catch (err) {
            setError('Failed to delete expense');
        }
    };

    return {
        expenses,
        loading,
        error,
        handleAddExpense,
        handleDeleteExpense,
    };
};

export default useExpenses;