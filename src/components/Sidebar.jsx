import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Divider } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HomeIcon from '@mui/icons-material/Home';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ isAuth, onLogout }) {
  const [open, setOpen] = useState(false);
  const navItems = [
    { text: 'Home', icon: <HomeIcon />, to: '/' },
    { text: 'Slots', icon: <DirectionsCarIcon />, to: '/slots' },
    { text: 'Book Slot', icon: <BookOnlineIcon />, to: '/book' },
    { text: 'My Bookings', icon: <EventAvailableIcon />, to: '/bookings' },
    { text: 'Profile', icon: <AccountCircleIcon />, to: '/profile' },
  ];

  return (
    <Box>
      <IconButton onClick={() => setOpen(true)} sx={{ color: 'white', mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, pt: 2 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {navItems.map(item => (
              <ListItem button key={item.text} component={Link} to={item.to}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            {!isAuth && (
              <ListItem button component={Link} to="/login">
                <ListItemIcon><LoginIcon /></ListItemIcon>
                <ListItemText primary="Login" />
              </ListItem>
            )}
            {isAuth && (
              <ListItem button onClick={onLogout}>
                <ListItemIcon><LoginIcon /></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            )}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
}
