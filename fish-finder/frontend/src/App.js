import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Paths } from './components/Paths';
import Search from './FishSearch'; // This is your Search component

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Search />} />
                    <Route path="/*" element={<Paths />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
