import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Paper, MenuItem } from '@mui/material';
import { motion } from 'framer-motion';
import Notification from '../components/Notification';
import { useParking } from '../context/ParkingContext';

const parkingBg = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';

export default function BookSlot() {
  const [slot, setSlot] = useState('');
  const [name, setName] = useState('');
  const [showNotif, setShowNotif] = useState(false);
  const { slots, bookSlot } = useParking();

  // Only show available slots
  const availableSlots = slots.filter(s => !s.occupied);

  const handleBook = (e) => {
    e.preventDefault();
    if (slot) {
      bookSlot(Number(slot));
      setShowNotif(true);
      setSlot('');
      setName('');
    }
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: `linear-gradient(120deg, #FFFDE4 70%, #E1F5FE 100%), url(${parkingBg}) center/cover no-repeat`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: 8
    }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: 420 }}
      >
        <Paper elevation={8} sx={{ p: 4, borderRadius: 4, textAlign: 'center', background: 'rgba(255,255,255,0.98)' }}>
          <Typography variant="h4" fontWeight={700} gutterBottom color="#1976D2">Book a Slot</Typography>
          <form onSubmit={handleBook}>
            <TextField label="Your Name" value={name} onChange={e => setName(e.target.value)} fullWidth sx={{ mb: 2 }} required />
            <TextField select label="Slot" value={slot} onChange={e => setSlot(e.target.value)} fullWidth sx={{ mb: 2 }} required>
              {availableSlots.length === 0 ? (
                <MenuItem disabled>No slots available</MenuItem>
              ) : (
                availableSlots.map(s => (
                  <MenuItem key={s.id} value={s.id}>Slot {s.id}</MenuItem>
                ))
              )}
            </TextField>
            <Button type="submit" variant="contained" color="primary" fullWidth disabled={availableSlots.length === 0}>Book Slot</Button>
          </form>
        </Paper>
        <Notification open={showNotif} onClose={() => setShowNotif(false)} message="Slot booked successfully!" severity="success" />
      </motion.div>
    </Box>
  );
}
