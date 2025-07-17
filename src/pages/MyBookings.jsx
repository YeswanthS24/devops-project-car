import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Notification from '../components/Notification';
import { useParking } from '../context/ParkingContext';

const bookingsBg = 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80';

export default function MyBookings() {
  const { bookings, cancelBooking } = useParking();
  const [notif, setNotif] = useState({ open: false, message: '' });

  const handleCancel = (slotId) => {
    cancelBooking(slotId);
    setNotif({ open: true, message: 'Booking cancelled!' });
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: `linear-gradient(120deg, #E3F2FD 70%, #FCE4EC 100%), url(${bookingsBg}) center/cover no-repeat`,
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
        style={{ width: '100%', maxWidth: 520 }}
      >
        <Paper elevation={8} sx={{ p: 4, borderRadius: 4, background: 'rgba(255,255,255,0.98)' }}>
          <Typography variant="h5" fontWeight={700} mb={2} color="#1976D2">My Bookings</Typography>
          <List>
            {bookings.length === 0 ? (
              <ListItem>
                <ListItemText primary="No bookings yet." />
              </ListItem>
            ) : (
              bookings.map((b, idx) => (
                <ListItem key={b.slot} secondaryAction={
                  <Button color="error" onClick={() => handleCancel(b.slot)}>Cancel</Button>
                }>
                  <ListItemText
                    primary={`Slot ${b.slot}`}
                    secondary={`Booked at: ${b.time}`}
                  />
                </ListItem>
              ))
            )}
          </List>
        </Paper>
        <Notification open={notif.open} onClose={() => setNotif({ ...notif, open: false })} message={notif.message} severity="info" />
      </motion.div>
    </Box>
  );
}
