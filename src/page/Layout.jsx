import  { useState } from "react";
import {
  Box,
  Container,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ResponsiveAppBar from "../Commponnents/Header";
import { Outlet,useNavigate} from "react-router-dom";
import CategoryIcon from '@mui/icons-material/Category';

export default function MobileLayout() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "#e0e0e0",
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="sm"
        disableGutters
        sx={{
          bgcolor: "white",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          // নিচের এই দুটি লাইন ড্রয়ারকে বাইরে যেতে বাধা দেবে
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* উপরের App Bar (Header) */}
        <ResponsiveAppBar />

        {/* মাঝখানের Content Area (এখানে আপনার অ্যাপের মূল ডিজাইন থাকবে) */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto", // কন্টেন্ট বেশি হলে স্ক্রল করা যাবে
            p: 1,
          }}
        >
          <Outlet />
        </Box>

        {/* নিচের Bottom Navigation (Footer Menu) */}
        <Paper
          elevation={5}
          sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
        >


          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);

              switch (newValue) {
                case 0:
                  navigate("/");
                  break;

                case 1:
                  navigate("/products");
                  break;
                default:
                  break;
              }
            }}
          >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Products" icon={<CategoryIcon />} />
          </BottomNavigation>
        </Paper>
      </Container>
    </Box>
  );
}
