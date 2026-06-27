import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

export default function OrderDeliveryTimeCard() {
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
             অর্ডার ও ডেলিভারির সময়সূচী (Order & Delivery Time)
            </Typography>
          </Box>

          {/* পয়েন্ট ১ */}
          <Box sx={{ display: 'flex', mb: 3.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>📝</Typography>
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
                অর্ডার দেওয়ার সময় (সকাল ৭টা থেকে সকাল ৯:৩০ মিনিট):
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                সকাল বেলা ঘুম থেকে উঠে চায়ের কাপ হাতে নিয়েই আপনার সারাদিনের বাজারের লিস্টটা আমাদের পাঠিয়ে দিন বা ফোনে বলে দিন। আপনাদের সকালের কাজের ফাঁকে সকাল ৭টা থেকে সাড়ে ৯টার মধ্যে আমরা আপনাদের সব অর্ডার আনন্দের সাথে গ্রহণ করব।
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্ট ২ */}
          <Box sx={{ display: 'flex', mb: 3.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>🚚</Typography>
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
                ডেলিভারি দেওয়ার সময় (সকাল ১০:৩০ থেকে দুপুর ১২:৩০ মিনিট):
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                বাজার না এলে তো দুপুরের রান্না শুরু করা যায় না, তাই না? আপনাদের এই চিন্তার কথা আমরা খুব ভালো করেই বুঝি। তাই বাজার গোছানো শেষ হতেই সকাল সাড়ে ১০টা থেকে সাড়ে ১২টার মধ্যে আপনার দরজায় একদম তাজা বাজার পৌঁছে যাবে।
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্ট ৩ */}
          <Box sx={{ display: 'flex', mb: 0 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>⏰</Typography>
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
                সময়ের আগেই পৌঁছে দেওয়ার প্রতিশ্রুতি:
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                দেরি করে ডেলিভারি দেওয়াটা আমাদের নিজেদেরও একদম পছন্দ নয়! আমরা জানি, বাজার আসতে দেরি হলে বাড়ির সবারই সমস্যা হয়। তাই আমাদের সবসময় চেষ্টা থাকবে, দুপুর ১২:৩০ বাজার পৌঁছানোর শেষ সময় হলেও, আমরা তার অনেক আগেই আপনার হাতে বাজার তুলে দেব। দুপুরের রান্নায় যেন কোনো দেরি না হয়, সেই দায়িত্ব আমাদের!
              </Typography>
            </Box>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}