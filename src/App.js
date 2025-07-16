import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import DashboardPage from './pages/DashboardPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HelpRequest from './pages/HelpRequest';
import LuggageTracker from './pages/LuggageTracker';
import FlightInfo from "./pages/FlightInfo";
import AccessibilitySettings from './pages/AccessibilitySettings';
import useBlindAssistant from './hooks/useBlindAssistant';

function App() {
  useBlindAssistant();

  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/help" element={<HelpRequest />} />
          <Route path="/luggage" element={<LuggageTracker />} />
          <Route path="/flight-info" element={<FlightInfo />} />
          <Route path="/accessibility-settings" element={<AccessibilitySettings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;