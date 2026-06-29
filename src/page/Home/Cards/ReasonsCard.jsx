import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar
} from '@mui/material';

// প্রতিটি পয়েন্টের জন্য মানানসই আইকন ইমপোর্ট করা হলো
import FactCheckTwoToneIcon from '@mui/icons-material/FactCheckTwoTone';
import MoreTimeTwoToneIcon from '@mui/icons-material/MoreTimeTwoTone';
import PendingActionsTwoToneIcon from '@mui/icons-material/PendingActionsTwoTone';
import KitchenTwoToneIcon from '@mui/icons-material/KitchenTwoTone';
import HelpCenterTwoToneIcon from '@mui/icons-material/HelpCenterTwoTone';
import SpaTwoToneIcon from '@mui/icons-material/SpaTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

export default function ReasonsCard({id}) {
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
          
          {/* চোখে পড়ার মতো সুন্দর হেডিং (Text align: left) */}
          <Box sx={{ mb: 4, textAlign: 'left', display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ bgcolor: '#fff4e6', color: '#d35400', width: 50, height: 50 }}>
              <FactCheckTwoToneIcon fontSize="medium" />
            </Avatar>
            <Box>
              <Typography 
                component="h2"
                fontWeight="900" 
                sx={{ 
                  color: '#4e2c1d', // গাঢ় খয়েরি রঙ
                  fontSize: { xs: '1.4rem', sm: '1.8rem' },
                  textAlign: 'left'
                }}
              >
                আমাদের উদ্যোগের কারণ
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#d35400', fontWeight: 'bold', textAlign: 'left' }}>
                যে সমস্যাগুলো আমরা দূর করতে চাই
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্টগুলো Stack দিয়ে সাজানো হলো যাতে সুন্দর ফাঁকা জায়গা থাকে */}
          <Stack spacing={2.5}>
            
            {/* বুলেট পয়েন্ট ১: সময়ের অভাব */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <MoreTimeTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 26 }} />
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

            {/* বুলেট পয়েন্ট ২: অনিশ্চিত অপেক্ষা */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <PendingActionsTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 26 }} />
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

            {/* বুলেট পয়েন্ট ৩: ফ্রিজের খাবার */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <KitchenTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 26 }} />
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

            {/* বুলেট পয়েন্ট ৪: মূল প্রশ্ন */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <HelpCenterTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 26 }} />
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

            {/* বুলেট পয়েন্ট ৫: তাজা খাবার */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <SpaTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 26 }} />
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

            {/* বুলেট পয়েন্ট ৬: দূরে যাওয়ার দরকার নেই */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <HomeTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 26 }} />
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

          </Stack>

          {/* শেষের প্যারাগ্রাফ */}
          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', mt: 4, pt: 2.5, borderTop: '1px dashed #e0d4c8' }}>
            <FavoriteTwoToneIcon sx={{ color: '#e74c3c', mt: 0.3 }} />
            <Typography 
              sx={{ 
                color: '#4e2c1d', 
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.6,
                textAlign: 'left',
                fontWeight: '600',
              }}
            >
              <strong>"রোজের বাজার"</strong> শুধু একটি দোকান বা ব্যবসা নয়, এটি আপনাদের প্রতিদিনের জীবনে একটু স্বস্তি এনে দেওয়ার একটি ছোট্ট চেষ্টা। তাজা খান, সুস্থ থাকুন—আর বাজারের দায়িত্ব আমাদের ওপর ছেড়ে দিন!
            </Typography>
          </Box>

        </CardContent>
      </Card>
  );
}