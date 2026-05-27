import { Request, Response } from 'express';
import * as expensesService from '../services/expensesService';
import * as aiAdvisor from '../services/aiAdvisor';

export const getExpenses = async (req: Request, res: Response) => {
    try {
        const expenses = await expensesService.getAllExpenses();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving expenses', error });
    }
};

export const addExpense = async (req: Request, res: Response) => {
    try {
        const newExpense = await expensesService.addExpense(req.body);
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(500).json({ message: 'Error adding expense', error });
    }
};

export const editExpense = async (req: Request, res: Response) => {
    try {
        const updatedExpense = await expensesService.editExpense(req.params.id, req.body);
        res.status(200).json(updatedExpense);
    } catch (error) {
        res.status(500).json({ message: 'Error editing expense', error });
    }
};

export const deleteExpense = async (req: Request, res: Response) => {
    try {
        await expensesService.deleteExpense(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting expense', error });
    }
};

export const getSpendingAdvice = async (req: Request, res: Response) => {
    try {
        const advice = await aiAdvisor.generateSpendingAdvice(req.user.id);
        res.status(200).json(advice);
    } catch (error) {
        res.status(500).json({ message: 'Error generating spending advice', error });
    }
};