import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

export default function AboutUsCard() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        py: .5,
        px: { xs: 1 },
      }}
    >
      <Card 
        sx={{ 
          maxWidth: 700, 
          width: '100%',
          borderRadius: { xs: 3, sm: 4 }, 
          boxShadow: '0 10px 30px rgba(78, 44, 29, 0.1)', 
          overflow: 'hidden'
        }}
      >
        <CardContent sx={{ p: { xs: 2.5, sm: 4 }, bgcolor: '#ffffff' }}>
          
          {/* চোখে পড়ার মতো সুন্দর হেডিং */}
          <Box sx={{ mb: 3.5, textAlign: 'left' }}>
            <Typography 
              component="h2"
              fontWeight="900" 
              sx={{ 
                color: '#4e2c1d', // গাঢ় খয়েরি রঙ
                fontSize: { xs: '1.4rem', sm: '1.8rem' },
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '70px',
                  height: '4px',
                  backgroundColor: '#d35400', // নিচে একটি কমলা রঙের সুন্দর দাগ
                  mt: 1,
                  borderRadius: '2px'
                }
              }}
            >
              আমাদের পরিচয়: আমরা কারা?
            </Typography>
          </Box>

          {/* প্রথম প্যারাগ্রাফ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 1, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            আমরা বাইরের কেউ নই, আমরা আপনাদের এই পরিচিত <strong>হাজরাপুর গ্রামেরই সন্তান</strong>।
          </Typography>

          {/* দ্বিতীয় প্যারাগ্রাফ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 1, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            পড়াশোনা বা কাজের পাশাপাশি আমরা সবসময় চাইতাম নিজেদের গ্রামের জন্য, আমাদের আশেপাশের মানুষদের জন্য নতুন কিছু করার। আমরা দেখেছি আমাদের মা-কাকিমাদের বা বাড়ির বয়স্ক মানুষদের প্রতিদিন সকালে বাজার করতে গিয়ে কতটা কষ্ট করতে হয়। সেই চেনা কষ্টটা দূর করার জন্যই আমাদের এই ছোট্ট উদ্যোগ— <strong>"রোজের বাজার"</strong>।
          </Typography>

          {/* তৃতীয় প্যারাগ্রাফ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 1, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            আমাদের টিমে আমরা কয়েকজন সাধারণ তরুণ মিলে কাজ করছি। আমাদের খুব বড় কোনো কোম্পানির মতো টাকা বা লোকবল নেই ঠিকই, কিন্তু আমাদের আছে সততা, পরিশ্রম করার ইচ্ছা এবং আপনাদের ভালো জিনিস দেওয়ার জেদ।
          </Typography>

          {/* চতুর্থ প্যারাগ্রাফ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 0, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            আমরা শুধু একটা ব্যবসা দাঁড় করাতে আসিনি, আমরা এসেছি আপনাদের ঘরের একজন হয়ে প্রতিদিনের বাজারের দায়িত্বটা নিজেদের কাঁধে তুলে নিতে। আপনাদের আশীর্বাদ আর ভালোবাসাই আমাদের এগিয়ে যাওয়ার সবচেয়ে বড় শক্তি।
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
}