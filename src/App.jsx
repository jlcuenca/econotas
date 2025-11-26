import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EcoNotasApp from './econotasapp';
import Dashboard from './Dashboard';

function App() {
    return (
        <Router basename="/econotas">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/new" element={<EcoNotasApp />} />
                <Route path="/share/:sessionId" element={<EcoNotasApp readOnly={true} />} />
            </Routes>
        </Router>
    );
}

export default App;