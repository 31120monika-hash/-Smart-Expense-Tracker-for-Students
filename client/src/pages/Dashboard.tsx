import React from 'react';
import { useExpenses } from '../hooks/useExpenses';
import DashboardLayout from '../layouts/DashboardLayout';
import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';

const Dashboard: React.FC = () => {
    const { expenses, addExpense } = useExpenses();

    return (
        <DashboardLayout>
            <h1>Dashboard</h1>
            <ExpenseForm onAddExpense={addExpense} />
            <ExpenseList expenses={expenses} />
        </DashboardLayout>
    );
};

export default Dashboard;