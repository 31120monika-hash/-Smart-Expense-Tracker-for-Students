import { Expense } from '../models/expense.model';
import { getDatabaseClient } from '../db/client';

const db = getDatabaseClient();

export const addExpense = async (expenseData: Expense): Promise<Expense> => {
    const newExpense = await db.expenses.create({
        data: expenseData,
    });
    return newExpense;
};

export const editExpense = async (id: string, updatedData: Partial<Expense>): Promise<Expense | null> => {
    const updatedExpense = await db.expenses.update({
        where: { id },
        data: updatedData,
    });
    return updatedExpense;
};

export const deleteExpense = async (id: string): Promise<void> => {
    await db.expenses.delete({
        where: { id },
    });
};

export const getExpenses = async (): Promise<Expense[]> => {
    const expenses = await db.expenses.findMany();
    return expenses;
};

export const summarizeExpenses = async (): Promise<{ total: number; categories: Record<string, number> }> => {
    const expenses = await getExpenses();
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const categories = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {} as Record<string, number>);
    
    return { total, categories };
};