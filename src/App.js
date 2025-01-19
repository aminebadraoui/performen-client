import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import UnderConstruction from './components/UnderConstruction';
import LandingPage from './components/LandingPage';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Layout from './components/Layout';
import useAuthStore from './stores/useAuthStore';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

function App() {
  const isUnlocked = useAuthStore((state) => state.isUnlocked);

  useEffect(() => {
    createChat({
      webhookUrl: 'https://mnfst-n8n.mnfstagency.com/webhook/348b2a80-feaa-43ef-8c23-6fc76eff1475/chat',
      i18n: {
        en: {
          title: 'Bienvenue sur Performen',
          subtitle: "Commence une conversation. Nous sommes là pour t'aider 24/7.",
          footer: '',
          getStarted: 'Nouvelle Conversation',
          inputPlaceholder: 'Ta question..',
        },
      },
      initialMessages: [
        'Allo! 👋',
        "C'est Nathan de la team Performen, comment puis-je t'aider aujourd'hui?"
      ],
    });
  }, []);

  return (
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
  );
}

export default App;