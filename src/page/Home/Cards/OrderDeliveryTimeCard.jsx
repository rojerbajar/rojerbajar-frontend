import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar
} from '@mui/material';

// ১০০% নিরাপদ আইকন ইমপোর্ট করা হলো
import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';
import ListAltTwoToneIcon from '@mui/icons-material/ListAltTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';

export default function OrderDeliveryTimeCard({id}) {
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
          
          {/* প্রধান হেডিং সেকশন (Text align: left) */}
          <Box sx={{ mb: 4, textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Avatar sx={{ bgcolor: '#fff4e6', color: '#d35400', width: 50, height: 50 }}>
              <EventAvailableTwoToneIcon fontSize="medium" />
            </Avatar>
            <Box>
              <Typography 
                component="h2"
                fontWeight="900" 
                sx={{ 
                  color: '#4e2c1d', // গাঢ় খয়েরি রঙ
                  fontSize: { xs: '1.4rem', sm: '1.7rem' },
                  textAlign: 'left',
                  lineHeight: 1.3,
                  mb: 0.5
                }}
              >
                অর্ডার ও ডেলিভারির সময়সূচী
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#d35400', fontWeight: 'bold', textAlign: 'left', fontSize: { xs: '0.95rem', sm: '1.05rem' } }}>
                Order & Delivery Time
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্টগুলো Stack দিয়ে সুন্দরভাবে সাজানো হলো */}
          <Stack spacing={3.5}>
            
            {/* পয়েন্ট ১: অর্ডার দেওয়ার সময় */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <ListAltTwoToneIcon sx={{ color: '#d35400', mt: 0.3, fontSize: 28 }} />
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
                  অর্ডার দেওয়ার সময় (সকাল ৭টা – সকাল ৯:৩০):
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

            {/* পয়েন্ট ২: ডেলিভারি দেওয়ার সময় */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <LocalShippingTwoToneIcon sx={{ color: '#d35400', mt: 0.3, fontSize: 28 }} />
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
                  ডেলিভারি দেওয়ার সময় (সকাল ১০:৩০ – দুপুর ১২:৩০):
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

            {/* পয়েন্ট ৩: সময়ের আগেই পৌঁছে দেওয়ার প্রতিশ্রুতি */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <AccessTimeTwoToneIcon sx={{ color: '#d35400', mt: 0.3, fontSize: 28 }} />
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

          </Stack>
        </CardContent>
      </Card>
  );
}