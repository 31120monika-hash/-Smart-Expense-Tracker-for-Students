import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const fetchExpenses = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/expenses`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching expenses: ' + error.message);
    }
};

export const addExpense = async (expense) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/expenses`, expense);
        return response.data;
    } catch (error) {
        throw new Error('Error adding expense: ' + error.message);
    }
};

export const updateExpense = async (id, expense) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/expenses/${id}`, expense);
        return response.data;
    } catch (error) {
        throw new Error('Error updating expense: ' + error.message);
    }
};

export const deleteExpense = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/expenses/${id}`);
    } catch (error) {
        throw new Error('Error deleting expense: ' + error.message);
    }
};