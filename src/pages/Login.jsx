import { Box, Paper, Typography, TextField, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (onLogin) onLogin();
    navigate('/');
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #FCE4EC 0%, #E1F5FE 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Paper elevation={6} sx={{ p: 4, borderRadius: 4, minWidth: 320, textAlign: 'center', background: 'rgba(255,255,255,0.95)' }}>
          <Avatar sx={{ bgcolor: '#1976D2', mx: 'auto', mb: 2 }}>
            <LockOpenIcon />
          </Avatar>
          <Typography variant="h5" fontWeight={700} mb={2} color="#1976D2">Login</Typography>
          <form onSubmit={handleLogin}>
            <TextField label="Email" type="email" fullWidth sx={{ mb: 2 }} />
            <TextField label="Password" type="password" fullWidth sx={{ mb: 2 }} />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mb: 1 }}>Login</Button>
          </form>
          <Typography variant="body2" color="text.secondary">
            Don’t have an account? <a href="/signup" style={{ color: '#1976D2', textDecoration: 'none' }}>Sign Up</a>
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
}
