import { Expense } from '../models/expense.model';

export const generateSpendingAdvice = (expenses: Expense[]): string => {
    const totalSpent = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const averageSpent = totalSpent / (expenses.length || 1);
    
    let advice = 'Here are some tips to manage your expenses better:\n';

    if (totalSpent > 1000) {
        advice += '- Consider setting a monthly budget to limit your spending.\n';
    }
    
    if (averageSpent > 100) {
        advice += '- You might want to review your discretionary spending categories.\n';
    }

    if (expenses.length > 5) {
        advice += '- Try to categorize your expenses to identify areas where you can cut back.\n';
    }

    return advice;
};

export const categorizeExpenses = (expenses: Expense[]): Record<string, number> => {
    return expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {} as Record<string, number>);
};