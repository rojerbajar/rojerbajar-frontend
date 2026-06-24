import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100%",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 2,
      }}
    >
      {" "}
      <Typography variant="h3" fontWeight="bold">
        404{" "}
      </Typography>
      <Typography variant="h5">Page Not Found</Typography>
      <Typography color="text.secondary">
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </Box>
  );
}
