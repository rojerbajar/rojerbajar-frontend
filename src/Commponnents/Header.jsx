import { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, IconButton, 
  List, ListItem, ListItemText, Box, Avatar 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // ড্রয়ার খোলা ও বন্ধ করার ফাংশন
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" sx={{
        backgroundColor:"#FFFFFF",
        color:"black"
      }} elevation={1}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          
          <Box sx={{ width: '50px', display: 'flex', justifyContent: 'flex-start' }}>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography variant="h6" component="div" sx={{ textAlign: 'center', flexGrow: 1, fontWeight: 'bold' }}>
           www.rojerbajar.com
          </Typography>

          <Box sx={{ width: '50px', display: 'flex', justifyContent: 'flex-end' }}>
            <Avatar alt="App Logo" src="/logo-512.webp" />
          </Box>

        </Toolbar>
      </AppBar>

      {/* ১. কালো ছায়া (Backdrop) - ড্রয়ার খুললে পেছনের অংশ অন্ধকার হবে */}
      {isDrawerOpen && (
        <Box 
          onClick={toggleDrawer(false)} // কালো অংশে ক্লিক করলে ড্রয়ার বন্ধ হবে
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.5)', // অর্ধেক স্বচ্ছ কালো রঙ
            zIndex: 1100, // অ্যাপ বারের উপরে থাকার জন্য
          }}
        />
      )}

      {/* ২. আমাদের নিজেদের বানানো ড্রয়ার (Custom Drawer) */}
      {/* এখানে ভ্যালুগুলো পাঠানো হয়েছে */}
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      
    </>
  );
}


const Sidebar = ({isDrawerOpen, toggleDrawer}) => {
  return (
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          // ড্রয়ার খোলা থাকলে বাম দিক থেকে 0 তে আসবে, নাহলে -250px অর্থাৎ স্ক্রিনের বাইরে থাকবে
          left: isDrawerOpen ? 0 : '-250px', 
          width: '250px',
          height: '100%',
          bgcolor: 'white',
          color:'black',
          transition: 'left 0.2s ease-in-out', // সুন্দর করে অ্যানিমেশন হয়ে বের হওয়ার জন্য
          zIndex: 1200, // কালো ছায়ারও উপরে থাকার জন্য
          boxShadow: 3,
        }}
      >
        <List onClick={toggleDrawer(false)}>
          {['Home', 'Products', 'Offers', 'Contact Us'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
  )
}