import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

export default function OrderAndReturnPolicyCard() {
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
          
          {/* প্রধান হেডিং */}
          <Box sx={{ mb: 4, textAlign: 'left' }}>
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
                  backgroundColor: '#d35400', // নিচে কমলা রঙের সুন্দর দাগ
                  mt: 1.5,
                  borderRadius: '2px'
                }
              }}
            >
              ৪. অর্ডার ও রিটার্ন সংক্রান্ত একটি বিনীত অনুরোধ
            </Typography>
          </Box>

          {/* ভূমিকা প্যারাগ্রাফ ১ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 2.5, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            আমাদের কাছে আপনাদের প্রতিটি অর্ডারই খুব মূল্যবান। তবে আপনাদের কাছে আমাদের একটি ছোট্ট ও বিনীত অনুরোধ রয়েছে।
          </Typography>

          {/* ভূমিকা প্যারাগ্রাফ ২ (হাইলাইট করা অংশ) */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 4, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            যেহেতু আমরা প্রতিদিনের একদম তাজা শাক-সবজি, কাঁচা মাছ ও অন্যান্য জিনিসপত্র আপনাদের কাছে পৌঁছে দিই, তাই একবার ডেলিভারি হয়ে যাওয়ার পর জিনিসগুলো <strong>রিটার্ন বা ফেরত নেওয়ার কোনো ব্যবস্থা আপাতত আমাদের নেই</strong>।
          </Typography>

          {/* পয়েন্ট ১: কেন এই নিয়ম? */}
          <Box sx={{ display: 'flex', mb: 3.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>❓</Typography>
            <Box>
              <Typography 
                component="h3"
                fontWeight="800" 
                sx={{ 
                  color: '#4e2c1d', 
                  fontSize: { xs: '1.05rem', sm: '1.15rem' }, 
                  mb: 1, 
                  textAlign: 'left' 
                }}
              >
                কেন এই নিয়ম?
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                কাঁচা জিনিস একবার হাতবদল হলে বা অনেকক্ষণ বাইরে থাকলে তার সতেজতা ও গুণমান নষ্ট হওয়ার ভয় থাকে। আমাদের মূল লক্ষ্যই হলো সবার হাতে একদম তাজা জিনিস তুলে দেওয়া।
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্ট ২: আমাদের অনুরোধ */}
          <Box sx={{ display: 'flex', mb: 3.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>🙏</Typography>
            <Box>
              <Typography 
                component="h3"
                fontWeight="800" 
                sx={{ 
                  color: '#4e2c1d', 
                  fontSize: { xs: '1.05rem', sm: '1.15rem' }, 
                  mb: 1, 
                  textAlign: 'left' 
                }}
              >
                আমাদের অনুরোধ:
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                অর্ডার চূড়ান্ত করার আগে আপনারা একটু সময় নিয়ে, ভালোভাবে চিন্তা করে আপনাদের বাজারের লিস্টটি আমাদের দেবেন। ঠিক যতটুকু প্রয়োজন, ততটুকুই অর্ডার করুন।
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্ট ৩: আমাদের প্রতিশ্রুতি */}
          <Box 
            sx={{ 
              display: 'flex', 
              bgcolor: '#fff9f5', // একটু আলাদা দেখানোর জন্য হালকা ব্যাকগ্রাউন্ড
              p: 2, 
              borderRadius: 2,
              border: '1px dashed #e0d4c8',
              mb: 0
            }}
          >
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>🤝</Typography>
            <Box>
              <Typography 
                component="h3"
                fontWeight="800" 
                sx={{ 
                  color: '#d35400', // এটি গুরুত্বপূর্ণ তাই কমলা রঙ
                  fontSize: { xs: '1.05rem', sm: '1.15rem' }, 
                  mb: 1, 
                  textAlign: 'left' 
                }}
              >
                আমাদের প্রতিশ্রুতি:
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                জিনিস ফেরত দেওয়ার সুযোগ নেই বলে একটুও চিন্তা করবেন না! আমরা কথা দিচ্ছি, বাজারে গিয়ে আপনি নিজের হাতে যেমন সবচেয়ে ভালো জিনিসটা বেছে নিতেন, আমরাও ঠিক সেভাবেই সেরা ও তাজা জিনিসটাই আপনার জন্য গুছিয়ে পাঠাব। আমাদের জিনিস এতই ভালো হবে যে, আপনার ফেরত দেওয়ার কোনো প্রয়োজনই পড়বে না! আপনাদের বিশ্বাসই আমাদের সবচেয়ে বড় সম্বল।
              </Typography>
            </Box>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}