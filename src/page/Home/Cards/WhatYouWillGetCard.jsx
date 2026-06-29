import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar
} from '@mui/material';

// বিকল্প আইকনগুলো ইমপোর্ট করা হলো (যেগুলো ১০০% কাজ করবে)
import CardGiftcardTwoToneIcon from '@mui/icons-material/CardGiftcardTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import LocalFloristTwoToneIcon from '@mui/icons-material/LocalFloristTwoTone'; 
import RestaurantTwoToneIcon from '@mui/icons-material/RestaurantTwoTone'; 
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone'; 
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';

export default function WhatYouWillGetCard({id}) {
  return (
 
      <Card id ={id}
        sx={{ 
          maxWidth: 700, 
          width: '100%',
          borderRadius: { xs: 3, sm: 4 }, 
          boxShadow: '0 12px 35px rgba(78, 44, 29, 0.08)', 
          overflow: 'hidden',
          border: '1px solid #f0e6da',
          bgcolor: '#ffffff'
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          
          {/* হেডিং সেকশন */}
          <Box sx={{ mb: 4, textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Avatar sx={{ bgcolor: '#fff4e6', color: '#d35400', width: 50, height: 50 }}>
              <CardGiftcardTwoToneIcon fontSize="medium" />
            </Avatar>
            <Box>
              <Typography 
                component="h2"
                fontWeight="900" 
                sx={{ 
                  color: '#4e2c1d',
                  fontSize: { xs: '1.4rem', sm: '1.7rem' },
                  textAlign: 'left',
                  lineHeight: 1.3,
                  mb: 1
                }}
              >
                আমাদের কাছে আপনারা কী কী পাবেন?
              </Typography>
              <Typography 
                sx={{ 
                  color: '#d35400', 
                  fontWeight: 'bold', 
                  textAlign: 'left', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' } 
                }}
              >
                আপনাদের কষ্ট কমানোর পাশাপাশি সেরা জিনিসটি আপনার হাতে তুলে দেওয়াই আমাদের লক্ষ্য।
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্টগুলো */}
          <Stack spacing={3}>
            
            {/* পয়েন্ট ১: সেরা মানের নিশ্চয়তা */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <WorkspacePremiumTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 28 }} />
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

            {/* পয়েন্ট ২: তাজা ও খাঁটি পণ্য */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5 }}>
                <LocalFloristTwoToneIcon sx={{ color: '#4caf50', fontSize: 24 }} />
                <RestaurantTwoToneIcon sx={{ color: '#d35400', fontSize: 24 }} />
              </Box>
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

            {/* পয়েন্ট ৩: ন্যায্য মূল্য */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <AccountBalanceWalletTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 28 }} />
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

            {/* পয়েন্ট ৪: বিশ্বস্ত সেবা */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <HandshakeTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 28 }} />
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

          </Stack>
        </CardContent>
      </Card>
  );
}