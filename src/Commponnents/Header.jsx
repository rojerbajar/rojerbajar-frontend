import { useEffect, useState } from "react";
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

import InboxIcon from "@mui/icons-material/Inbox"; // উদাহরণস্বরূপ আইকন

// import * as React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import coverImg from "../assets/cover-250.webp";
import { Link } from "react-router-dom";
// useLocation ইমপোর্ট করা হলো
import { useNavigate, useLocation } from "react-router-dom";
// import AccordionActions from "@mui/material";

import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone';
import DirectionsWalkTwoToneIcon from '@mui/icons-material/DirectionsWalkTwoTone';
import UpdateTwoToneIcon from '@mui/icons-material/UpdateTwoTone';
import ShoppingCartCheckoutTwoToneIcon from "@mui/icons-material/ShoppingCartCheckoutTwoTone";
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
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
  const [expanded, setExpanded] = useState(false); // ডিফল্ট ক্লোজ

  const [activeId, setActiveId] = useState(null);
  // বর্তমান URL কী আছে সেটা জানার জন্য useLocation
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setActiveId(null);
     
    }
  }, [location.pathname]);
  
  useEffect(() => {
    if (activeId) {
      setExpanded(true)
     
    }else{
      setExpanded(false)
    }
  }, [isDrawerOpen]);
  

  const handelScroll = (id) => {
    // alert('fun id work ')
    // ইউআরএল পরিবর্তন করে প্যারামিটার সেট করুন
    navigate("/", { state: { scrollTo: id } });
  };

  const menuItems = [
    { text: "Products", pathName: "/products", icon: <CategoryIcon /> },
    { text: "Contact-us", is_scroll: true, pathName: "contact", icon: <ContactPhoneTwoToneIcon /> },
  ];

  const scrollMenu = [
    {
      label: "আমাদের মূল লক্ষ্য",
      to: "goals",
      icon: <StarsTwoToneIcon fontSize="small" />,
    },
    {
      label: "আমরা যেভাবে শুরু করছি",
      to: "journey-start",
      icon: <DirectionsWalkTwoToneIcon fontSize="small" />,
    },
    {
      label: "পণ্যের তালিকা ও আজকের দাম",
      to: "price-list",
      icon: <UpdateTwoToneIcon fontSize="small" />,
    },
    {
      label: "কীভাবে অর্ডার করবেন?",
      to: "how-to-order",
      icon: <ShoppingCartCheckoutTwoToneIcon fontSize="small" />,
    },
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
      <Box
        sx={{
        flexGrow:1,
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            width: "8px",
          },

          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "8px",
          },

          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
        }}
      >
        <List sx={{ flexGrow: 1, pt: 2, px: 2 }}>
          <Accordion
            elevation={0}
            expanded={expanded}
            onChange={() => setExpanded(!expanded)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                borderRadius: "10px",
                bgcolor: isHome ? "#e3f2fd" : "transparent",
                p:1,
                color: isHome ? "#1976d2" : "#333",
                "&:hover": {
                  bgcolor: isHome ? "#e3f2fd" : "#f5f5f5",
                },
                
              }}
            >
              <Box sx={{ display: "flex"}}>
                <HomeIcon
                  sx={{
                    minWidth: "40px",
                    color: isHome ? "#1976d2" : "#757575",
                  }}
                />
                <Typography>Home </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0 }}>
              <List>
                {scrollMenu.map((item, key) => (
                  <ListItemButton
                    key={key}
                    onClick={() => {
                      setActiveId(item.to);
                      (handelScroll(item.to), toggleDrawer(false)());
                    }}
                    selected={activeId === item.to}
                    sx={{
                      // কাস্টম স্টাইল (যদি সিলেক্টেড থাকে)
                      backgroundColor:
                        activeId === item.to ? "#e3f2fd" : "transparent",
                      color: activeId === item.to ? "#1976d2" : "#333",
                      "&:hover": {
                        backgroundColor:
                          activeId === item.to ? "#e3f2fd" : "#f5f5f5",
                      },
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          {menuItems.map((item) => {
    const currentHash = location.hash.replace('#', '');
  
    let isActive = false;
  
    if (item.is_scroll) {
      // যদি স্ক্রল আইটেম হয়, তবে শুধু হ্যাশ মিললেই সে অ্যাক্টিভ হবে
      isActive = currentHash === item.pathName;
    } else {
      // যদি সাধারণ আইটেম হয়, তবে শর্তগুলো হলো:
      // ১. পাথ মিলতে হবে
      // ২. কোনো হ্যাশ থাকা যাবে না (যাতে স্ক্রল আইটেমের সাথে সংঘর্ষ না হয়)
      isActive = (location.pathname === item.pathName) && (!currentHash);
    }
        return (
          <ListItem disablePadding key={item.text} sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => {
                if (item.is_scroll) {
                  // স্ক্রল করার জন্য হ্যাশ সেট করুন
                  window.location    =  `/#${item.pathName}`
                } else {
                  // সাধারণ পেজ নেভিগেশন
                  navigate(item.pathName, { replace: true });
                }
                toggleDrawer(false)(); // ড্রয়ার বন্ধ করার ফাংশন
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
      </Box>

      <Box sx={{ p: 2, textAlign: "center", borderTop: "1px solid #eee" }}>
        <Typography variant="body2" color="text.secondary">
          Made By : <strong>Faruk Sardar</strong>
        </Typography>
      </Box>
    </Box>
  );
};

// export  function SidebarAccordion({path}) {

//   return (
//     <>
//       {/* অ্যাকর্ডিয়ন ১ */}

//       </>
//   );
// }
