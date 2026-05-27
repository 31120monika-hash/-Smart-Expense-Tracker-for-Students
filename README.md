# Smart Expense Tracker for Students

## Overview
The Smart Expense Tracker is a web application designed to help students manage their finances effectively. It provides a user-friendly interface for tracking expenses, generating spending insights, and offering AI-driven advice to optimize spending habits.

## Features
- **Modern Finance Landing Page**: A visually appealing landing page that introduces users to the application and its features.
- **Dashboard Layout**: A comprehensive dashboard that displays analytics, spending trends, and insights.
- **Expense Management**: Users can add, edit, and delete expenses easily.
- **AI-Generated Spending Advice**: Unique feature that provides personalized advice based on spending patterns.
- **Responsive Design**: The application is designed to work seamlessly on various devices.

## Project Structure
```
smart-expense-tracker
├── client                # Frontend application
│   ├── package.json      # Client dependencies and scripts
│   ├── tsconfig.json     # TypeScript configuration for client
│   ├── public            # Public assets
│   │   └── index.html    # Main HTML file
│   └── src               # Source code for client
│       ├── main.tsx      # Entry point for React app
│       ├── pages         # Page components
│       │   ├── Landing.tsx
│       │   └── Dashboard.tsx
│       ├── components     # Reusable components
│       │   ├── Header.tsx
│       │   ├── Footer.tsx
│       │   ├── ExpenseList.tsx
│       │   └── ExpenseForm.tsx
│       ├── layouts        # Layout components
│       │   └── DashboardLayout.tsx
│       ├── hooks          # Custom hooks
│       │   └── useExpenses.ts
│       ├── services       # API services
│       │   └── api.ts
│       ├── styles         # CSS styles
│       │   └── globals.css
│       └── types          # TypeScript types
│           └── index.ts
├── server                # Backend application
│   ├── package.json      # Server dependencies and scripts
│   ├── tsconfig.json     # TypeScript configuration for server
│   ├── .env.example       # Example environment variables
│   └── src               # Source code for server
│       ├── index.ts      # Entry point for server
│       ├── controllers    # Controllers for handling requests
│       │   └── expensesController.ts
│       ├── routes         # API routes
│       │   └── expenses.ts
│       ├── services       # Business logic services
│       │   ├── expensesService.ts
│       │   └── aiAdvisor.ts
│       ├── models         # Data models
│       │   └── expense.model.ts
│       ├── db            # Database configuration
│       │   └── client.ts
│       └── types          # TypeScript types
│           └── index.ts
├── shared                # Shared types
│   └── types
│       └── index.ts
├── scripts               # Scripts for database seeding
│   └── seed.ts
├── .gitignore            # Git ignore file
├── docker-compose.yml    # Docker configuration
├── package.json          # Main project dependencies and scripts
├── tsconfig.json         # Main TypeScript configuration
└── README.md             # Project documentation
```

## Getting Started
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd smart-expense-tracker
   ```

2. **Install dependencies**:
   - For the client:
     ```
     cd client
     npm install
     ```
   - For the server:
     ```
     cd server
     npm install
     ```

3. **Set up environment variables**:
   - Copy `.env.example` to `.env` in the server directory and configure your database connection.

4. **Run the application**:
   - Start the server:
     ```
     cd server
     npm start
     ```
   - Start the client:
     ```
     cd client
     npm start
     ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License. See the LICENSE file for details.