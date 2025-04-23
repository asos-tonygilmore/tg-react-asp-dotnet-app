import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ClickCounter from './ClickCounter';
import WeatherForecast from './WeatherForecast';
import SnakeGame from './SnakeGame';
import HelloWorld from './Components';
import './App.css';

const App = () => {
    return (
        <Router>
            <header className="top-bar">
                <nav>
                    <ul className="nav-links">
                        <li>
                            <NavLink to="/click-counter" className={({ isActive }) => isActive ? 'active-link' : ''}>
                                Click Counter
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/weather-forecast" className={({ isActive }) => isActive ? 'active-link' : ''}>
                                Weather Forecast
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/snake-game" className={({ isActive }) => isActive ? 'active-link' : ''}>
                                Snake Game
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/hello-world" className={({ isActive }) => isActive ? 'active-link' : ''}>
                                Hello World
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/click-counter" element={<ClickCounter />} />
                    <Route path="/weather-forecast" element={<WeatherForecast />} />
                    <Route path="/snake-game" element={<SnakeGame />} />
                    <Route path="/hello-world" element={<HelloWorld />} /> {/* Add the HelloWorld route */}
                </Routes>
            </main>
        </Router>
    );
};

export default App;
