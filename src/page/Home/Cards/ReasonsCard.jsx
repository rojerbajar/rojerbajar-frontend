import {
    Card,
    CardContent,
    Typography,
    Box,
  } from '@mui/material';
  
  export default function ReasonsCard() {
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
            
            {/* চোখে পড়ার মতো সুন্দর হেডিং */}
            <Box sx={{ mb: 3.5, textAlign: 'left' }}>
              <Typography 
                component="h2"
                fontWeight="900" 
                sx={{ 
                  color: '#4e2c1d', // গাঢ় খয়েরি রঙ
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
                আমাদের এই উদ্যোগের পেছনে প্রধান কারণগুলো হলো:
              </Typography>
            </Box>
  
            {/* বুলেট পয়েন্ট ১ */}
            <Box sx={{ display: 'flex', mb: 2 }}>
              <Typography sx={{ color: '#d35400', mr: 1, fontSize: '1.2rem' }}>•</Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                <strong>সময়ের অভাব ও বাজারে যাওয়ার ঝামেলা:</strong> আজকাল সবার হাতেই সময়ের খুব অভাব। অফিস, কাজ বা সংসারের চাপে রোজ বাজারে যাওয়ার সময় বা সুযোগ সবার থাকে না। আবার অনেক পরিবারে বাজারে গিয়ে কেনাকাটা করে আনার মতো মানুষও থাকেন না।
              </Typography>
            </Box>
  
            {/* বুলেট পয়েন্ট ২ */}
            <Box sx={{ display: 'flex', mb: 2 }}>
              <Typography sx={{ color: '#d35400', mr: 1, fontSize: '1.2rem' }}>•</Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                <strong>অনিশ্চিত অপেক্ষা:</strong> অনেকেই পাড়ায় আসা বিক্রেতাদের ওপর ভরসা করেন। কিন্তু তারা কখন আসবেন, বা আদৌ আসবেন কি না—তার কোনো নিশ্চয়তা থাকে না। তাদের আশায় বসে থেকে অনেক সময় দরকারি বাজারটাই করা হয়ে ওঠে না।
              </Typography>
            </Box>
  
            {/* বুলেট পয়েন্ট ৩ */}
            <Box sx={{ display: 'flex', mb: 2 }}>
              <Typography sx={{ color: '#d35400', mr: 1, fontSize: '1.2rem' }}>•</Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                <strong>বাসি বা ফ্রিজের খাবার খাওয়ার বাধ্যবাধকতা:</strong> বাজারের এই সব ঝামেলা এড়াতে অনেকেই একবারে অনেক দিনের বাজার করে ফ্রিজে রেখে দেন। ফলে দিনের পর দিন সেই ফ্রিজের বাসি জিনিস খেতে হয়।
              </Typography>
            </Box>
  
            {/* বুলেট পয়েন্ট ৪ */}
            <Box sx={{ display: 'flex', mb: 2 }}>
              <Typography sx={{ color: '#d35400', mr: 1, fontSize: '1.2rem' }}>•</Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                <strong>আমাদের মূল প্রশ্ন— টাকা দিয়ে কেন বাসি খাবেন?:</strong> আমাদের মনে একটাই কথা জেগেছিল— আপনারা নিজেদের কষ্টের টাকা খরচ করে কেন বাসি বা পুরনো জিনিস খাবেন?
              </Typography>
            </Box>
  
            {/* বুলেট পয়েন্ট ৫ */}
            <Box sx={{ display: 'flex', mb: 2 }}>
              <Typography sx={{ color: '#d35400', mr: 1, fontSize: '1.2rem' }}>•</Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                <strong>তাজা খাবার, সুস্থ শরীর:</strong> আমরা চাই, মানুষ অল্প কিনুক, কিন্তু প্রতিদিন তাজা জিনিস কিনুক। রোজ তাজা শাক-সবজি ও মাছ-মাংস খেলে শরীর ভালো থাকে। নিজের টাকায় প্রতিদিনের সেরা ও একদম ফ্রেশ জিনিসটা পেলে মনের শান্তিও মেলে।
              </Typography>
            </Box>
  
            {/* বুলেট পয়েন্ট ৬ */}
            <Box sx={{ display: 'flex', mb: 3 }}>
              <Typography sx={{ color: '#d35400', mr: 1, fontSize: '1.2rem' }}>•</Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                <strong>দূরে যাওয়ার দরকার নেই:</strong> ভালো বাজার করার জন্য আর দূরে যাওয়ার বা ক্লান্ত হওয়ার দরকার নেই। আপনাদের সুবিধার্থে একেবারে তাজা জিনিস আপনাদের নাগালে পৌঁছে দেওয়াই আমাদের লক্ষ্য।
              </Typography>
            </Box>
  
            {/* শেষের প্যারাগ্রাফ */}
            <Typography 
              sx={{ 
                color: '#4e2c1d', 
                mt: 3, 
                mb: 0, 
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.6,
                textAlign: 'start',
                fontWeight: '600',
                borderTop: '1px dashed #e0d4c8',
                pt: 2
              }}
            >
              <strong>"রোজের বাজার"</strong> শুধু একটি দোকান বা ব্যবসা নয়, এটি আপনাদের প্রতিদিনের জীবনে একটু স্বস্তি এনে দেওয়ার একটি ছোট্ট চেষ্টা। তাজা খান, সুস্থ থাকুন—আর বাজারের দায়িত্ব আমাদের ওপর ছেড়ে দিন!
            </Typography>
  
          </CardContent>
        </Card>
      </Box>
    );
  }