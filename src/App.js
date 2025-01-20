import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './App.css';
import UnderConstruction from './components/UnderConstruction';
import LandingPage from './components/LandingPage';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Layout from './components/Layout';
import useAuthStore from './stores/useAuthStore';

// Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors: {
    brand: {
      yellow: {
        500: '#EAB308', // Your yellow color
      },
      black: '#000000',
    },
  },
  fonts: {
    heading: 'system-ui, sans-serif',
    body: 'system-ui, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      },
    },
  },
});

function App() {
  const isUnlocked = useAuthStore((state) => state.isUnlocked);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/password" element={<UnderConstruction />} />

          {/* Protected routes with Layout */}
          <Route element={isUnlocked ? <Layout /> : <Navigate to="/password" replace />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;