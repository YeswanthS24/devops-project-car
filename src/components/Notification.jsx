import { Snackbar, Alert } from '@mui/material';

export default function Notification({ open, onClose, message, severity = 'success' }) {
  return (
    <Snackbar open={open} autoHideDuration={2500} onClose={onClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert onClose={onClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
