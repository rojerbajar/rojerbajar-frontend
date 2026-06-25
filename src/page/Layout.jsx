import {
  Box,
  Container,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from '@mui/icons-material/Category';
import ResponsiveAppBar from "../Commponnents/Header";
// useLocation ইমপোর্ট করা হলো
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function MobileLayout() {
  const navigate = useNavigate();
  const location = useLocation(); // বর্তমান URL জানার জন্য

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
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* উপরের App Bar (Header) */}
        <ResponsiveAppBar />

        {/* মাঝখানের Content Area */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            /* Chrome, Safari এবং Opera-এর জন্য স্ক্রলবার লুকানো */
            "&::-webkit-scrollbar": {
              display: "none",
            },
            /* Firefox-এর জন্য */
            scrollbarWidth: "none",
            /* Internet Explorer এবং Edge-এর জন্য */
            msOverflowStyle: "none",
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
            value={location.pathname} // বর্তমান URL অনুযায়ী সিলেক্ট হবে
            onChange={(event, newValue) => {
              navigate(newValue); // যেটাতে ক্লিক করবেন সেই URL এ চলে যাবে
            }}
          >
            {/* value প্রপস এর মাধ্যমে URL এর পাথ বলে দেওয়া হলো */}
            <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
            <BottomNavigationAction label="Products" value="/products" icon={<CategoryIcon />} />
          </BottomNavigation>
        </Paper>
      </Container>
    </Box>
  );
}