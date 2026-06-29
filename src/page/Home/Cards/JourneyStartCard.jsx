import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar
} from '@mui/material';

// ১০০% নিরাপদ আইকন ইমপোর্ট করা হলো (যেগুলো সব ভার্সনেই কাজ করবে)
import DirectionsWalkTwoToneIcon from '@mui/icons-material/DirectionsWalkTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import RestaurantTwoToneIcon from '@mui/icons-material/RestaurantTwoTone';
import LocalFloristTwoToneIcon from '@mui/icons-material/LocalFloristTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';

export default function JourneyStartCard({id}) {
  return (
      <Card  id ={id}
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
          
          {/* হেডিং সেকশন (Text align: left) */}
          <Box sx={{ mb: 4, textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Avatar sx={{ bgcolor: '#fff4e6', color: '#d35400', width: 50, height: 50 }}>
              <DirectionsWalkTwoToneIcon fontSize="medium" />
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
                  mb: 0.5
                }}
              >
                আমাদের নতুন পথচলা
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#d35400', fontWeight: 'bold', textAlign: 'left', fontSize: { xs: '0.95rem', sm: '1.05rem' } }}>
                শুরুটা যেমন হচ্ছে...
              </Typography>
            </Box>
          </Box>

          {/* প্যারাগ্রাফগুলো Stack দিয়ে সাজানো হলো */}
          <Stack spacing={3}>
            
            {/* প্যারাগ্রাফ ১: ছোট পরিসরে শুরু */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <StorefrontTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 28 }} />
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                যেকোনো বড় ও ভালো কাজের শুরুটা একটু ছোট পরিসরেই করতে হয়। আমরাও আমাদের <strong>"রোজের বাজার"</strong>-এর এই স্বপ্নের উদ্যোগটি খুব অল্প কিছু জিনিস নিয়ে শুরু করছি।
              </Typography>
            </Box>

            {/* প্যারাগ্রাফ ২: তাজা মাছ দিয়ে শুরু */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <RestaurantTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 28 }} />
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                আপনাদের প্রতিদিনের পাতে একদম সেরা জিনিসটি তুলে দেওয়ার লক্ষ্যে, আপাতত আমরা শুধু <strong>"একদম তাজা ও ফ্রেশ মাছ"</strong> দিয়েই আমাদের এই পথচলা শুরু করলাম। এখন থেকে প্রতিদিনের বাছাই করা সেরা মাছটি আপনারা আমাদের কাছে পেয়ে যাবেন।
              </Typography>
            </Box>

            {/* সাব-হেডিং ও প্যারাগ্রাফ ৩: আগামী লক্ষ্য */}
            <Box sx={{ bgcolor: '#fffcf7', p: 2.5, borderRadius: 2, border: '1px dashed #e0d4c8' }}>
              <Box sx={{ display: 'flex', mb: 1.5, alignItems: 'center', gap: 1.5 }}>
                <LocalFloristTwoToneIcon sx={{ color: '#4caf50', fontSize: 26 }} />
                <Typography 
                  component="h3"
                  fontWeight="800" 
                  sx={{ 
                    color: '#4e2c1d', 
                    fontSize: { xs: '1.1rem', sm: '1.3rem' },
                    textAlign: 'left'
                  }}
                >
                  আমাদের আগামী লক্ষ্য ও স্বপ্ন:
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <ShoppingCartTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 22 }} />
                <Typography 
                  sx={{ 
                    color: '#444444', 
                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                    lineHeight: 1.8,
                    textAlign: 'left'
                  }}
                >
                  তবে আমাদের লক্ষ্য এখানেই থেমে নেই! আপনাদের পুরো বাজারের কষ্ট কমানোই আমাদের আসল উদ্দেশ্য। তাই আমরা খুব দ্রুত একে একে তাজা শাক-সবজি, ফলমূল থেকে শুরু করে দৈনন্দিন বাজারের সব কিছুই আপনাদের জন্য নিয়ে আসার আপ্রাণ চেষ্টা করছি। আমরা ধাপে ধাপে আমাদের লক্ষ্যের দিকে এগিয়ে যাচ্ছি।
                </Typography>
              </Box>
            </Box>
          </Stack>

          {/* শেষের প্যারাগ্রাফ (আশীর্বাদ ও ভরসা) */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', mt: 4, pt: 3, borderTop: '1px dashed #e0d4c8' }}>
            <VolunteerActivismTwoToneIcon sx={{ color: '#e74c3c', mt: 0.5, fontSize: 32 }} />
            <Typography 
              sx={{ 
                color: '#4e2c1d', 
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.8,
                textAlign: 'left',
                fontWeight: '700',
              }}
            >
              শুরুর এই ছোট পদক্ষেপে আপনাদের ভালোবাসা, ভরসা ও আশীর্বাদ আমাদের খুব প্রয়োজন। আপাতত আমাদের তাজা মাছের এই আয়োজনে আপনাদের সেবা করার সুযোগ দিন। কথা দিচ্ছি, আপনাদের বিশ্বাস আমরা ভাঙব না!
            </Typography>
          </Box>

        </CardContent>
      </Card>
  );
}