export type Expense = {
    id: string;
    description: string;
    amount: number;
    category: string;
    date: string;
};

export type User = {
    id: string;
    name: string;
    email: string;
    expenses: Expense[];
};

export type SpendingAdvice = {
    category: string;
    advice: string;
};

export type ApiResponse<T> = {
    success: boolean;
    data: T;
    message?: string;
};