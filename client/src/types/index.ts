export interface Expense {
    id: string;
    description: string;
    amount: number;
    date: string;
    category: string;
}

export interface SpendingAdvice {
    advice: string;
    suggestedSavings: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    expenses: Expense[];
}

export interface DashboardData {
    totalExpenses: number;
    categoryBreakdown: Record<string, number>;
    spendingTrends: Array<{ date: string; amount: number }>;
}