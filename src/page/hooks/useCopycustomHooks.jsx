import { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const useCopyCustomHooks = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success'); // নতুন স্টেট
  const baseUrl = window.location.origin;

  const showSnackbar = async ({ id, path }) => {
    const newUrl = `${baseUrl}${path}#${id}`;
    try {
      await navigator.clipboard.writeText(newUrl);
      setMessage("সফলভাবে কপি হয়েছে!");
      setSeverity('success'); // সফল হলে সাকসেস দেখাবে
    } catch (err) {
      console.error("Failed to copy!", err);
      setMessage("কপি করতে ব্যর্থ!");
      setSeverity('error'); // ব্যর্থ হলে এরর দেখাবে
    } finally {
      setOpen(true);
    }
  };

  const SnackbarComponent = (
    <Snackbar 
      open={open} 
      autoHideDuration={2000} 
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={() => setOpen(false)} severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );

  return { showSnackbar, SnackbarComponent };
};

export default useCopyCustomHooks;