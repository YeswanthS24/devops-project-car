import { Box, Paper, Typography, TextField, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { useNavigate } from 'react-router-dom';

export default function Signup({ onSignup }) {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (onSignup) onSignup();
    navigate('/');
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #E3F2FD 0%, #FFF8E1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Paper elevation={6} sx={{ p: 4, borderRadius: 4, minWidth: 320, textAlign: 'center', background: 'rgba(255,255,255,0.95)' }}>
          <Avatar sx={{ bgcolor: '#388E3C', mx: 'auto', mb: 2 }}>
            <PersonAddIcon />
          </Avatar>
          <Typography variant="h5" fontWeight={700} mb={2} color="#388E3C">Sign Up</Typography>
          <form onSubmit={handleSignup}>
            <TextField label="Name" fullWidth sx={{ mb: 2 }} />
            <TextField label="Email" type="email" fullWidth sx={{ mb: 2 }} />
            <TextField label="Password" type="password" fullWidth sx={{ mb: 2 }} />
            <Button type="submit" variant="contained" color="success" fullWidth sx={{ mb: 1 }}>Sign Up</Button>
          </form>
          <Typography variant="body2" color="text.secondary">
            Already have an account? <a href="/login" style={{ color: '#388E3C', textDecoration: 'none' }}>Login</a>
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
}
