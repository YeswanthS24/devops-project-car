import { motion } from 'framer-motion';
import { Typography, Avatar, Box, Button } from '@mui/material';

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      style={{ maxWidth: 400, margin: '3rem auto', padding: '2rem', background: '#f3e5f5', borderRadius: 16 }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Avatar sx={{ width: 80, height: 80, bgcolor: '#7e57c2' }}>U</Avatar>
        <Typography variant="h5">User Name</Typography>
        <Typography color="text.secondary">user@email.com</Typography>
        <Button variant="outlined" color="primary">Edit Profile</Button>
      </Box>
    </motion.div>
  );
}
