import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

export default function WhatYouWillGetCard() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        py: 1,
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
          
         

          {/* নতুন হেডিং */}
          <Box sx={{ mb: 3, textAlign: 'left' }}>
            <Typography 
              component="h2"
              fontWeight="900" 
              sx={{ 
                color: '#4e2c1d', // গাঢ় খয়েরি রঙ
                fontSize: { xs: '1.4rem', sm: '1.7rem' },
                position: 'relative',
                display: 'inline-block',
                lineHeight: 1.4,
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '70px',
                  height: '4px',
                  backgroundColor: '#d35400', // নিচে একটি কমলা রঙের সুন্দর দাগ
                  mt: 1.5,
                  borderRadius: '2px'
                }
              }}
            >
              আমাদের কাছে আপনারা কী কী পাবেন?
            </Typography>
          </Box>

          {/* হেডিং এর নিচের প্যারাগ্রাফ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 3, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            আপনাদের কষ্ট কমানোর পাশাপাশি সেরা জিনিসটি আপনার হাতে তুলে দেওয়াই আমাদের লক্ষ্য।
          </Typography>

          {/* পয়েন্ট ১ */}
          <Box sx={{ display: 'flex', mb: 2.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.3rem' }}>🥬</Typography>
            <Typography 
              sx={{ 
                color: '#444444', 
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.8,
                textAlign: 'left'
              }}
            >
              <strong>সেরা মানের নিশ্চয়তা:</strong> বাজারে গিয়ে আপনাকে ভালো জিনিসটি বেছে নিতে হবে না। আমাদের টিম আপনার জন্য একদম বাছাই করা সেরা ও সতেজ জিনিসটাই পৌঁছে দেবে।
            </Typography>
          </Box>

          {/* পয়েন্ট ২ */}
          <Box sx={{ display: 'flex', mb: 2.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.3rem' }}>🥦🐟</Typography>
            <Typography 
              sx={{ 
                color: '#444444', 
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.8,
                textAlign: 'left'
              }}
            >
              <strong>তাজা ও খাঁটি পণ্য:</strong> প্রতিদিনের সতেজ শাকসবজি, ফলমূল, একদম তাজা ফ্রেশ মাছ থেকে শুরু করে মুদিখানার সমস্ত প্রয়োজনীয় জিনিস।
            </Typography>
          </Box>

          {/* পয়েন্ট ৩ */}
          <Box sx={{ display: 'flex', mb: 0 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.3rem' }}>💰</Typography>
            <Typography 
              sx={{ 
                color: '#444444', 
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.8,
                textAlign: 'left'
              }}
            >
              <strong>ন্যায্য মূল্য:</strong> আপনার কাছ থেকে কোনোভাবেই বেশি দাম নেওয়া হবে না। বাজারের সঠিক ও ন্যায্য দামেই সেরা জিনিসটি আপনার ঘরে পৌঁছে যাবে।
            </Typography>
          </Box>
          {/* আগের অংশের শেষ পয়েন্ট */}
          <Box sx={{ display: 'flex', mt:2 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.3rem' }}>🤝</Typography>
            <Typography 
              sx={{ 
                color: '#444444', 
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.8,
                textAlign: 'left'
              }}
            >
              <strong>বিশ্বস্ত সেবা:</strong> আপনাদের সন্তুষ্টি এবং সেবাই আমাদের প্রথম লক্ষ্য।
            </Typography>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}