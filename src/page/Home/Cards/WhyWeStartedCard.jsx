import {
    Card,
    CardContent,
    Typography,
    Box,
  } from '@mui/material';
  
  export default function WhyWeStartedCard() {
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
                কেন আমরা "রোজের বাজার" শুরু করলাম?
              </Typography>
            </Box>
  
            {/* প্যারাগ্রাফ */}
            <Typography 
              sx={{ 
                color: '#444444', 
                mb: 0, 
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.8,
                textAlign: 'left'
              }}
            >
              আমাদের প্রতিদিনের জীবনের একটা বড় অংশ হলো বাজার করা। কিন্তু এই সাধারণ কাজটাই অনেক সময় আমাদের জন্য চিন্তার কারণ হয়ে দাঁড়ায়। আপনাদের এই প্রতিদিনের সমস্যাগুলো খুব কাছ থেকে দেখেই আমাদের মনে হলো—এমন কিছু করা দরকার যা আপনাদের <strong>জীবনকে একটু সহজ করবে</strong>। আর সেই ভাবনা থেকেই জন্ম নিয়েছে <strong>"রোজের বাজার"</strong>।
            </Typography>
  
          </CardContent>
        </Card>
      </Box>
    );
  }