import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid, Card, CardContent, Typography, Chip, Avatar, Box, Tooltip } from '@mui/material';
import carImg from '../assets/car.svg';
import { useParking } from '../context/ParkingContext';

export default function ParkingSlots() {
  const [selected, setSelected] = useState(null);
  const { slots } = useParking();

  const handleSelect = (slotId) => {
    setSelected(slotId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      style={{ padding: '2rem', background: 'linear-gradient(120deg, #E3F2FD 60%, #F3E5F5 100%)', borderRadius: 16 }}
    >
      <Typography variant="h4" align="center" gutterBottom fontWeight={700}>
        Parking Slots Overview
      </Typography>
      <Typography align="center" color="text.secondary" mb={3}>
        Click an available slot to select it for booking.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {slots.map(slot => (
          <Grid item xs={6} sm={4} md={3} key={slot.id}>
            <motion.div
              whileHover={{ scale: slot.occupied ? 1 : 1.08 }}
              animate={selected === slot.id ? { scale: 1.13, boxShadow: '0 0 12px #1976D2' } : {}}
            >
              <Tooltip title={slot.occupied ? 'This slot is currently occupied' : 'Available for booking'} arrow>
                <Card
                  elevation={selected === slot.id ? 10 : 4}
                  sx={{
                    background: slot.occupied ? '#ffebee' : '#e8f5e9',
                    border: selected === slot.id ? '2px solid #1976D2' : 'none',
                    cursor: slot.occupied ? 'not-allowed' : 'pointer',
                    transition: 'border 0.2s',
                  }}
                  onClick={() => !slot.occupied && handleSelect(slot.id)}
                >
                  <CardContent style={{ textAlign: 'center' }}>
                    <Box mb={1}>
                      <Avatar
                        src={carImg}
                        alt="Car"
                        sx={{ width: 48, height: 48, mx: 'auto', opacity: slot.occupied ? 0.3 : 1, filter: slot.occupied ? 'grayscale(1)' : 'none' }}
                      />
                    </Box>
                    <Typography variant="h6">Slot {slot.id}</Typography>
                    <Chip
                      label={slot.occupied ? 'Occupied' : 'Available'}
                      color={slot.occupied ? 'error' : 'success'}
                      sx={{ mt: 1, fontWeight: 700 }}
                    />
                    {selected === slot.id && !slot.occupied && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{ marginTop: 8 }}
                      >
                        <Chip label="Selected" color="primary" />
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </Tooltip>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}
