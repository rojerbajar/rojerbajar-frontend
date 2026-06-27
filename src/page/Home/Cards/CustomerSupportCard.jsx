import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

export default function CustomerSupportCard() {
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
              আপনার যেকোনো অভিযোগ আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ!
            </Typography>
          </Box>

          {/* প্যারাগ্রাফ ১ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 2.5, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            আমরা সবসময় চেষ্টা করি আপনাদের সেরা সেবা দেওয়ার। কিন্তু প্রতিদিনের এই ব্যস্ততার মাঝে কখনও কখনও আমাদেরও অনাকাঙ্ক্ষিত ভুল বা ডেলিভারিতে সামান্য দেরি হয়ে যেতে পারে।
          </Typography>

          {/* প্যারাগ্রাফ ২ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 4, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            আপনার কেনাকাটা নিয়ে যদি কোনো ধরনের অভিযোগ থাকে, ডেলিভারি পৌঁছাতে দেরি হয়, কিংবা অর্ডারের কোনো জিনিস নিয়ে কোনো সমস্যা থাকে—তবে একটুও মন খারাপ করবেন না বা দ্বিধা করবেন না। সরাসরি আমাদের সাথে যোগাযোগ করুন!
          </Typography>

          {/* হাইলাইট করা প্রতিশ্রুতি বক্স */}
          <Box 
            sx={{ 
              display: 'flex', 
              bgcolor: '#fff9f5', // একটু আলাদা দেখানোর জন্য হালকা ব্যাকগ্রাউন্ড
              p: 2.5, 
              borderRadius: 2,
              border: '1px dashed #e0d4c8',
              mb: 0
            }}
          >
            <Typography sx={{ mr: 1.5, fontSize: '1.5rem', mt: -0.2 }}>🤝</Typography>
            <Box>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                আমরা কথা দিচ্ছি, আপনার অভিযোগ বা সমস্যার কথাটি জানা মাত্রই আমরা সাথে সাথে সেটি সমাধান করার আপ্রাণ চেষ্টা করব। নিজেদের ভুলগুলো শুধরে নিয়ে আপনাদের আরও ভালো সেবা দেওয়াই আমাদের একমাত্র লক্ষ্য। কারণ, <strong>"রোজের বাজার"</strong>-এ আপনার সন্তুষ্টি এবং হাসিমুখটাই আমাদের কাছে সবচেয়ে বড় পাওনা!
              </Typography>
            </Box>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}