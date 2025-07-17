import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, CssBaseline, Container } from '@mui/material';
import Sidebar from './components/Sidebar';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ParkingSlots from './pages/ParkingSlots';
import BookSlot from './pages/BookSlot';
import MyBookings from './pages/MyBookings';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';
import { ParkingProvider } from './context/ParkingContext';
import { useState } from 'react';

function ProtectedRoute({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/login" replace />;
}

function App() {
  const [isAuth, setIsAuth] = useState(() => {
    // Simulate persistent login with localStorage (optional)
    return localStorage.getItem('isAuth') === 'true';
  });

  const handleLogin = () => {
    setIsAuth(true);
    localStorage.setItem('isAuth', 'true');
  };
  const handleLogout = () => {
    setIsAuth(false);
    localStorage.setItem('isAuth', 'false');
  };

  function AnimatedRoutes() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public pages */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
          {/* Protected pages */}
          <Route path="/" element={<ProtectedRoute isAuth={isAuth}><Home /></ProtectedRoute>} />
          <Route path="/slots" element={<ProtectedRoute isAuth={isAuth}><ParkingSlots /></ProtectedRoute>} />
          <Route path="/book" element={<ProtectedRoute isAuth={isAuth}><BookSlot /></ProtectedRoute>} />
          <Route path="/bookings" element={<ProtectedRoute isAuth={isAuth}><MyBookings /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute isAuth={isAuth}><Profile /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to={isAuth ? "/" : "/login"} replace />} />
        </Routes>
      </AnimatePresence>
    );
  }

  return (
    <ParkingProvider>
      <Router>
        <CssBaseline />
        <AppBar position="static" elevation={4} sx={{ background: 'linear-gradient(90deg, #1976D2 60%, #8EC5FC 100%)' }}>
          <Toolbar>
            <Sidebar isAuth={isAuth} onLogout={handleLogout} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}>
              Car Parking Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <AnimatedRoutes />
        </Container>
      </Router>
    </ParkingProvider>
  );
}

export default App;
