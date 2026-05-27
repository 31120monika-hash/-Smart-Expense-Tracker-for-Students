import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import expensesRoutes from './routes/expenses';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/expenses', expensesRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/expense-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch(err => {
    console.error('Database connection error:', err);
});