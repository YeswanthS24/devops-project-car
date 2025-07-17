import { Box, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Dashboard from './Dashboard';
import carImg from '../assets/car.svg';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #E3F2FD 0%, #F3E5F5 100%)', pb: 8 }}>
      <Paper elevation={0} sx={{ textAlign: 'center', p: { xs: 3, md: 6 }, mb: 4, background: 'transparent', boxShadow: 'none' }}>
        <motion.img
          src={carImg}
          alt="Car"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ width: 120, marginBottom: 16 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Welcome to Car Parking Dashboard
          </Typography>
          <Typography variant="h6" color="text.secondary" mb={3}>
            Effortlessly manage, book, and track your parking slots with style.
          </Typography>
          <Button variant="contained" size="large" color="primary" href="/slots" sx={{ mr: 2 }}>
            View Parking Slots
          </Button>
          <Button variant="outlined" size="large" color="secondary" href="/book">
            Book a Slot
          </Button>
        </motion.div>
      </Paper>
      <Dashboard />
    </Box>
  );
}
