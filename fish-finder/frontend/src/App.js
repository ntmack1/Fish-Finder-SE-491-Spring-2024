import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Paths } from './components/Paths';
import HomePage from './components/home_page/HomePage'; // Import the HomePage component

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} /> {/* Update this line */}
                    <Route path="/*" element={<Paths />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
