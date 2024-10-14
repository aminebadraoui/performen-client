import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import UnderConstruction from './components/UnderConstruction';
import LandingPage from './components/LandingPage';
import useAuthStore from './stores/useAuthStore';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <LandingPage /> : <Navigate to="/password" replace />}
          />
          <Route path="/password" element={<UnderConstruction />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;