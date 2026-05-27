export interface Expense {
    id: string;
    description: string;
    amount: number;
    category: string;
    date: Date;
}

export interface User {
    id: string;
    name: string;
    email: string;
    expenses: Expense[];
}

export interface SpendingAdvice {
    category: string;
    advice: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}