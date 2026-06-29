import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  Avatar,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import coverImg from "../assets/cover-250.webp";
import { Link } from "react-router-dom";
// useLocation ইমপোর্ট করা হলো
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#FFFFFF",
          color: "black",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
        }}
        elevation={0}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              width: "50px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "center", flexGrow: 1, fontWeight: "bold" }}
          >
            www.rojerbajar.com
          </Typography>

          <Box
            sx={{ width: "50px", display: "flex", justifyContent: "flex-end" }}
          >
            <Avatar alt="App Logo" src="/logo-512.webp" />
          </Box>
        </Toolbar>
      </AppBar>

      {isDrawerOpen && (
        <Box
          onClick={toggleDrawer(false)}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1100,
          }}
        />
      )}

      {/* এখন আর স্টেট পাঠানোর দরকার নেই */}
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}

const Sidebar = ({ isDrawerOpen, toggleDrawer }) => {
  const navigate = useNavigate();
  // বর্তমান URL কী আছে সেটা জানার জন্য useLocation
  const location = useLocation();

  const menuItems = [
    { text: "Home", pathName: "/", icon: <HomeIcon /> },
    { text: "Products", pathName: "/products", icon: <CategoryIcon /> },
    // Contact Us এর পাথ পরিবর্তন করা হয়েছে
    { text: "Contact Us", pathName: "/#contact", icon: <ContactSupportIcon /> },
    { text: "আমাদের সম্পর্কে জানুন", pathName: "/#about", icon: <ContactSupportIcon /> },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: isDrawerOpen ? 0 : "-280px",
        width: "280px",
        height: "100vh",
        bgcolor: "white",
        color: "black",
        transition: "left 0.3s ease-in-out",
        zIndex: 1200,
        boxShadow: isDrawerOpen ? "4px 0px 15px rgba(0,0,0,0.1)" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src={coverImg}
        alt="Banner"
        sx={{ width: "100%", height: 180 }}
      />

      <List sx={{ flexGrow: 1, pt: 2, px: 2 }}>
        {menuItems.map((item) => {
          // বর্তমান URL-এর সাথে মেনুর path মিলে গেলে সেটা অ্যাকটিভ হবে
          const isActive = location.pathname === item.pathName;

          return (
            <ListItem disablePadding key={item.text} sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.pathName);
                  toggleDrawer(false)(); // ড্রয়ার বন্ধ হয়ে যাবে
                }}
                sx={{
                  borderRadius: "10px",
                  bgcolor: isActive ? "#e3f2fd" : "transparent",
                  color: isActive ? "#1976d2" : "#333",
                  "&:hover": {
                    bgcolor: isActive ? "#e3f2fd" : "#f5f5f5",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "40px",
                    color: isActive ? "#1976d2" : "#757575",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 600 : 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

  
      <Link to="/#welcome">
        <button>আমাদের সম্পর্কে জানুন</button>
      </Link>
      
      <Box sx={{ p: 2, textAlign: "center", borderTop: "1px solid #eee" }}>
        <Typography variant="body2" color="text.secondary">
          Made By : <strong>Faruk Sardar</strong>
        </Typography>
      </Box>
    </Box>
  );
};
