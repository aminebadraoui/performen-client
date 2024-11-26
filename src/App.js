import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import UnderConstruction from './components/UnderConstruction';
import LandingPage from './components/LandingPage';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Layout from './components/Layout';
import useAuthStore from './stores/useAuthStore';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/password" element={<UnderConstruction />} />

        {/* Protected routes with Layout */}
        <Route element={isAuthenticated ? <Layout /> : <Navigate to="/password" replace />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;