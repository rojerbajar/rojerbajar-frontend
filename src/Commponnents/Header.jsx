import { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, IconButton, 
  List, ListItem, ListItemText, Box, Avatar, ListItemButton, ListItemIcon
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import coverImg from '../assets/cover-250.webp'

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // কোন মেনুটা এখন সিলেক্ট করা আছে, তা মনে রাখার জন্য স্টেট (ডিফল্ট 'Home' রাখা হলো)
  const [activeItem, setActiveItem] = useState('Home'); 

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" sx={{
        backgroundColor: "#FFFFFF",
        color: "black",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)"
      }} elevation={0}>
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

      {isDrawerOpen && (
        <Box 
          onClick={toggleDrawer(false)}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            bgcolor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1100, 
          }}
        />
      )}

      {/* Sidebar এ activeItem এবং setActiveItem পাঠানো হলো */}
      <Sidebar 
        isDrawerOpen={isDrawerOpen} 
        toggleDrawer={toggleDrawer} 
        activeItem={activeItem} 
        setActiveItem={setActiveItem} 
      />
      
    </>
  );
}


const Sidebar = ({ isDrawerOpen, toggleDrawer, activeItem, setActiveItem }) => {
  
  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Products', icon: <CategoryIcon /> },
    { text: 'Contact Us', icon: <ContactSupportIcon /> }
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: isDrawerOpen ? 0 : '-280px',
        width: '280px',
        height: '100vh',
        bgcolor: 'white',
        color: 'black',
        transition: 'left 0.3s ease-in-out', 
        zIndex: 1200, 
        boxShadow: isDrawerOpen ? "4px 0px 15px rgba(0,0,0,0.1)" : "none",
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        component="img"
        src={coverImg} 
        alt="Banner"
        sx={{ width: '100%', height: 180 }}
      />
      
      <List sx={{ flexGrow: 1, pt: 2, px: 2 }}> {/* px: 2 দিয়ে দুপাশে একটু জায়গা রাখা হয়েছে */}
        {menuItems.map((item) => {
          
          // চেক করা হচ্ছে এই আইটেমটি অ্যাকটিভ কিনা
          const isActive = activeItem === item.text; 

          return (
            <ListItem disablePadding key={item.text} sx={{ mb: 1 }}>
              <ListItemButton 
                onClick={() => {
                  setActiveItem(item.text); // ক্লিক করলে এই আইটেমটি অ্যাকটিভ হবে
                  toggleDrawer(false)(); // এবং ড্রয়ার বন্ধ হয়ে যাবে
                }}
                sx={{ 
                  borderRadius: '10px', // কোণাগুলো সুন্দর গোল করা হয়েছে
                  bgcolor: isActive ? '#e3f2fd' : 'transparent', // অ্যাকটিভ হলে হালকা নীল ব্যাকগ্রাউন্ড
                  color: isActive ? '#1976d2' : '#333', // অ্যাকটিভ হলে লেখা নীল হবে
                  '&:hover': { 
                    bgcolor: isActive ? '#e3f2fd' : '#f5f5f5' // হোভার করলে কেমন দেখাবে
                  }
                }}
              >
                <ListItemIcon sx={{ 
                  minWidth: '40px', 
                  color: isActive ? '#1976d2' : '#757575' // অ্যাকটিভ হলে আইকন নীল হবে, নাহলে ছাই রঙ
                }}>
                  {item.icon}
                </ListItemIcon>
                
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{ 
                    fontWeight: isActive ? 600 : 500 // অ্যাকটিভ হলে লেখা একটু মোটা (বোল্ড) দেখাবে
                  }} 
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Box sx={{ p: 2, textAlign: 'center', borderTop: '1px solid #eee' }}>
        <Typography variant='body2' color="text.secondary">
          Made By : <strong>Faruk Sardar</strong>
        </Typography>
      </Box>
    </Box>
  );
}