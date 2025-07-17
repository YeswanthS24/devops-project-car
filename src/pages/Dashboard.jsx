import { Box, Grid, Paper, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BarChartIcon from '@mui/icons-material/BarChart';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import parkingImg from '../assets/parking-illustration.svg';

const stats = [
  { label: 'Total Slots', value: 36, icon: <DirectionsCarIcon fontSize="large" color="primary" /> },
  { label: 'Available', value: 14, icon: <EventAvailableIcon fontSize="large" color="success" /> },
  { label: 'Bookings Today', value: 22, icon: <BarChartIcon fontSize="large" color="secondary" /> },
];

const data = [
  { name: 'Mon', bookings: 12 },
  { name: 'Tue', bookings: 19 },
  { name: 'Wed', bookings: 16 },
  { name: 'Thu', bookings: 22 },
  { name: 'Fri', bookings: 18 },
  { name: 'Sat', bookings: 24 },
  { name: 'Sun', bookings: 20 },
];

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <img src={parkingImg} alt="Parking Illustration" style={{ width: '100%', borderRadius: 18 }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {stats.map((s, i) => (
              <Grid item xs={12} sm={4} key={s.label}>
                <Paper elevation={4} sx={{ p: 2, textAlign: 'center', borderRadius: 4 }}>
                  <Avatar sx={{ bgcolor: 'background.paper', mx: 'auto', mb: 1, width: 56, height: 56 }}>
                    {s.icon}
                  </Avatar>
                  <Typography variant="h6">{s.value}</Typography>
                  <Typography color="text.secondary">{s.label}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ mt: 4, p: 2, borderRadius: 4 }}>
            <Typography variant="h6" gutterBottom>Bookings This Week</Typography>
            <Box height={220}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="bookings" fill="#1976D2" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  );
}
