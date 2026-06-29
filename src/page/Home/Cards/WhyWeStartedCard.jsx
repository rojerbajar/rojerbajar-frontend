import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";

// আইকন ইমপোর্ট করা হলো
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";

export default function WhyWeStartedCard({ id }) {
  return (
    <Card
      id={id}
      sx={{
        maxWidth: 700,
        width: "100%",
        borderRadius: { xs: 3, sm: 4 },
        boxShadow: "0 12px 35px rgba(78, 44, 29, 0.08)",
        overflow: "hidden",
        border: "1px solid #f0e6da",
        bgcolor: "#ffffff",
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        {/* হেডিং সেকশন (Text align: left) */}
        <Box
          sx={{
            mb: 4,
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* ভাবনার আইকন */}
          <Avatar
            sx={{ bgcolor: "#fff4e6", color: "#d35400", width: 50, height: 50 }}
          >
            <EmojiObjectsTwoToneIcon fontSize="medium" />
          </Avatar>

          <Box>
            <Typography
              component="h2"
              fontWeight="900"
              sx={{
                color: "#4e2c1d",
                fontSize: { xs: "1.4rem", sm: "1.8rem" },
                textAlign: "left", // বাঁ-দিক থেকে শুরু
              }}
            >
              কেন আমরা শুরু করলাম?
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "#d35400", fontWeight: "bold", textAlign: "left" }}
            >
              রোজের বাজারের পেছনের গল্প
            </Typography>
          </Box>
        </Box>

        {/* প্যারাগ্রাফ সেকশন (Text align: left) */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
          {/* বাজারের ব্যাগের আইকন */}
          <ShoppingBagTwoToneIcon
            sx={{ color: "#d35400", mt: 0.5, fontSize: 28 }}
          />

          <Typography
            sx={{
              color: "#444444",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              lineHeight: 1.8,
              textAlign: "left", // সব লেখা বাঁ-দিক থেকে শুরু
            }}
          >
            আমাদের প্রতিদিনের জীবনের একটা বড় অংশ হলো বাজার করা। কিন্তু এই সাধারণ
            কাজটাই অনেক সময় আমাদের জন্য চিন্তার কারণ হয়ে দাঁড়ায়। আপনাদের এই
            প্রতিদিনের সমস্যাগুলো খুব কাছ থেকে দেখেই আমাদের মনে হলো—এমন কিছু করা
            দরকার যা আপনাদের <strong>জীবনকে একটু সহজ করবে</strong>। আর সেই ভাবনা
            থেকেই জন্ম নিয়েছে <strong>"রোজের বাজার"</strong>।
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
