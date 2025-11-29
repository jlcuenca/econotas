import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/variables.css';
import ThemeToggle from './components/ThemeToggle';
import EcoNotasApp from './econotasapp';
import Dashboard from './Dashboard';

function App() {
    return (
        <Router basename="/econotas">
            <div className="flex flex-col min-h-screen bg-[var(--bg)] text-[var(--text)]">
                <header className="flex justify-end p-2">
                    <ThemeToggle />
                </header>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/new" element={<EcoNotasApp />} />
                    <Route path="/session/:sessionId" element={<EcoNotasApp />} />
                    <Route path="/share/:sessionId" element={<EcoNotasApp readOnly={true} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;