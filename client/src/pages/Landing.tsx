import React from 'react';
import './Landing.css'; // Assuming you will create a CSS file for styling

const Landing: React.FC = () => {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1>Smart Expense Tracker for Students</h1>
                <p>Manage your finances effortlessly and get personalized spending advice!</p>
            </header>
            <main className="landing-main">
                <section className="features">
                    <h2>Features</h2>
                    <ul>
                        <li>Track your expenses in real-time</li>
                        <li>Get AI-generated spending advice</li>
                        <li>Visualize your spending habits</li>
                        <li>Set budgets and goals</li>
                    </ul>
                </section>
                <section className="call-to-action">
                    <h2>Get Started</h2>
                    <button className="cta-button">Sign Up Now</button>
                </section>
            </main>
            <footer className="landing-footer">
                <p>&copy; {new Date().getFullYear()} Smart Expense Tracker. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;