import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar,
} from "@mui/material";

// আইকন ইমপোর্ট করা হলো
import Diversity3TwoToneIcon from "@mui/icons-material/Diversity3TwoTone";
import PlaceTwoToneIcon from "@mui/icons-material/PlaceTwoTone";
import ShoppingBasketTwoToneIcon from "@mui/icons-material/ShoppingBasketTwoTone";
import VerifiedTwoToneIcon from "@mui/icons-material/VerifiedTwoTone";
import VolunteerActivismTwoToneIcon from "@mui/icons-material/VolunteerActivismTwoTone";

export default function AboutUsCard({ id }) {
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
        {/* চোখে পড়ার মতো সুন্দর হেডিং */}
        <Box
          sx={{
            mb: 4,
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Avatar
            sx={{ bgcolor: "#fff4e6", color: "#d35400", width: 50, height: 50 }}
          >
            <Diversity3TwoToneIcon fontSize="medium" />
          </Avatar>
          <Box>
            <Typography
              component="h2"
              fontWeight="900"
              sx={{
                color: "#4e2c1d",
                fontSize: { xs: "1.4rem", sm: "1.8rem" },
              }}
            >
              আমাদের পরিচয়
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "#d35400", fontWeight: "bold" }}
            >
              আমরা কারা?
            </Typography>
          </Box>
        </Box>

        <Stack spacing={3}>
          {/* প্রথম পয়েন্ট: গ্রামের সন্তান */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <PlaceTwoToneIcon
              sx={{ color: "#d35400", mt: 0.5, fontSize: 28 }}
            />
            <Typography
              sx={{
                color: "#444444",
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                lineHeight: 1.8,
                textAlign: "start",
              }}
            >
              আমরা বাইরের কেউ নই, আমরা আপনাদের এই পরিচিত{" "}
              <strong>হাজরাপুর গ্রামেরই সন্তান</strong>।
            </Typography>
          </Box>

          {/* দ্বিতীয় পয়েন্ট: উদ্যোগের কারণ */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <ShoppingBasketTwoToneIcon
              sx={{ color: "#d35400", mt: 0.5, fontSize: 28 }}
            />
            <Typography
              sx={{
                color: "#444444",
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                lineHeight: 1.8,
                textAlign: "start",
              }}
            >
              পড়াশোনা বা কাজের পাশাপাশি আমরা সবসময় চাইতাম নিজেদের গ্রামের
              জন্য, আমাদের আশেপাশের মানুষদের জন্য নতুন কিছু করার। আমরা দেখেছি
              আমাদের মা-কাকিমাদের বা বাড়ির বয়স্ক মানুষদের প্রতিদিন সকালে বাজার
              করতে গিয়ে কতটা কষ্ট করতে হয়। সেই চেনা কষ্টটা দূর করার জন্যই
              আমাদের এই ছোট্ট উদ্যোগ— <strong>"রোজের বাজার"</strong>।
            </Typography>
          </Box>

          {/* তৃতীয় পয়েন্ট: আমাদের শক্তি ও সততা */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <VerifiedTwoToneIcon
              sx={{ color: "#d35400", mt: 0.5, fontSize: 28 }}
            />
            <Typography
              sx={{
                color: "#444444",
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                lineHeight: 1.8,
                textAlign: "start",
              }}
            >
              আমাদের টিমে আমরা কয়েকজন সাধারণ তরুণ মিলে কাজ করছি। আমাদের খুব বড়
              কোনো কোম্পানির মতো টাকা বা লোকবল নেই ঠিকই, কিন্তু আমাদের আছে সততা,
              পরিশ্রম করার ইচ্ছা এবং আপনাদের ভালো জিনিস দেওয়ার জেদ।
            </Typography>
          </Box>

          {/* চতুর্থ পয়েন্ট: ভালোবাসা ও আশীর্বাদ */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <VolunteerActivismTwoToneIcon
              sx={{ color: "#e74c3c", mt: 0.5, fontSize: 28 }}
            />
            <Typography
              sx={{
                color: "#444444",
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                lineHeight: 1.8,
                textAlign: "start",
              }}
            >
              আমরা শুধু একটা ব্যবসা দাঁড় করাতে আসিনি, আমরা এসেছি আপনাদের ঘরের
              একজন হয়ে প্রতিদিনের বাজারের দায়িত্বটা নিজেদের কাঁধে তুলে নিতে।{" "}
              <strong>
                আপনাদের আশীর্বাদ আর ভালোবাসাই আমাদের এগিয়ে যাওয়ার সবচেয়ে বড়
                শক্তি।
              </strong>
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
