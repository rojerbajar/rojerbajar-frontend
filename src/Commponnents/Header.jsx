import {  useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarsTwoToneIcon from "@mui/icons-material/StarsTwoTone";
import DirectionsWalkTwoToneIcon from "@mui/icons-material/DirectionsWalkTwoTone";
import UpdateTwoToneIcon from "@mui/icons-material/UpdateTwoTone";
import ShoppingCartCheckoutTwoToneIcon from "@mui/icons-material/ShoppingCartCheckoutTwoTone";
import ContactPhoneTwoToneIcon from "@mui/icons-material/ContactPhoneTwoTone";
import coverImg from "../assets/cover-250.webp";
import InfoIcon from '@mui/icons-material/Info';

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
          <Box sx={{ width: "50px", display: "flex", justifyContent: "flex-start" }}>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography variant="h6" sx={{ textAlign: "center", flexGrow: 1, fontWeight: "bold" }}>
            www.rojerbajar.com
          </Typography>
          <Box sx={{ width: "50px", display: "flex", justifyContent: "flex-end" }}>
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

      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}

const Sidebar = ({ isDrawerOpen, toggleDrawer }) => {
  const [expanded, setExpanded] = useState(true);
  const [activeId, setActiveId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handelScroll = (id) => {
    if (!isHome) {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveId(id);
    toggleDrawer(false)();
  };

  const menuItems = [
    { text: "Products", pathName: "/products", icon: <CategoryIcon /> },
    { text: "Contact Us", pathName: "/contact", icon: <ContactPhoneTwoToneIcon /> },
    { text: "About Me", pathName: "/aboutme", icon: <InfoIcon /> },
  ];

  const scrollMenu = [
    { label: "আমাদের মূল লক্ষ্য", to: "goals", icon: <StarsTwoToneIcon fontSize="small" /> },
    { label: "আমরা যেভাবে শুরু করছি", to: "journey-start", icon: <DirectionsWalkTwoToneIcon fontSize="small" /> },
    { label: "পণ্যের তালিকা ও আজকের দাম", to: "price-list", icon: <UpdateTwoToneIcon fontSize="small" /> },
    { label: "কীভাবে অর্ডার করবেন?", to: "how-to-order", icon: <ShoppingCartCheckoutTwoToneIcon fontSize="small" /> },
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
        transition: "left 0.3s ease-in-out",
        zIndex: 1200,
        boxShadow: "4px 0px 15px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box component="img" src={coverImg} alt="Banner" sx={{ width: "100%", height: 180 }} />
      
      <Box sx={{ flexGrow: 1, overflowY: "auto", p: 2 }}>
        <Accordion elevation={0} expanded={expanded} onChange={() => setExpanded(!expanded)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: isHome ? "#e3f2fd" : "transparent" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <HomeIcon sx={{ mr: 2, color: isHome ? "#1976d2" : "#757575" }} />
              <Typography>Home</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            {scrollMenu.map((item, index) => (
              <ListItemButton key={index} onClick={() => handelScroll(item.to)} selected={activeId === item.to}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </AccordionDetails>
        </Accordion>

        {menuItems.map((item) => {
          const isActive = location.pathname === item.pathName;
          return (
            <ListItemButton
              key={item.text}
              onClick={() => {
                navigate(item.pathName, { replace: true });
                setActiveId(null);
                setExpanded(false);
                toggleDrawer(false)();
              }}
              sx={{ bgcolor: isActive ? "#e3f2fd" : "transparent", borderRadius: "10px", mt: 1 }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: "black" }} />
            </ListItemButton>
          );
        })}
      </Box>

      <Box sx={{ p: 2, textAlign: "center", borderTop: "1px solid #eee" }}>
        <Typography variant="body2">Made By: <strong>Faruk Sardar</strong></Typography>
      </Box>
    </Box>
  );
};