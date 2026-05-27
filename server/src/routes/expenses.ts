import { Router } from 'express';
import {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} from '../controllers/expensesController';

const router = Router();

// Route to get all expenses
router.get('/', getExpenses);

// Route to add a new expense
router.post('/', addExpense);

// Route to update an existing expense
router.put('/:id', updateExpense);

// Route to delete an expense
router.delete('/:id', deleteExpense);

export default router;