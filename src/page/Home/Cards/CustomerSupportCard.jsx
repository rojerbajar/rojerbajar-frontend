import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Stack
} from '@mui/material';

// ১০০% নিরাপদ আইকন ইমপোর্ট করা হলো
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import FeedbackTwoToneIcon from '@mui/icons-material/FeedbackTwoTone';
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';

export default function CustomerSupportCard() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 1, px: { xs: 1 } }}>
      <Card 
        sx={{ 
          maxWidth: 700, 
          width: '100%',
          borderRadius: { xs: 3, sm: 4 }, 
          boxShadow: '0 12px 35px rgba(78, 44, 29, 0.08)', 
          border: '1px solid #f0e6da',
          bgcolor: '#ffffff'
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          
          {/* হেডিং সেকশন */}
          <Box sx={{ mb: 4, textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Avatar sx={{ bgcolor: '#fff4e6', color: '#d35400', width: 50, height: 50 }}>
              <SupportAgentTwoToneIcon fontSize="medium" />
            </Avatar>
            <Box>
              <Typography component="h2" fontWeight="900" sx={{ color: '#4e2c1d', fontSize: { xs: '1.4rem', sm: '1.7rem' }, lineHeight: 1.3 }}>
                আপনার যেকোনো অভিযোগ
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#d35400', fontWeight: 'bold' }}>
                আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ
              </Typography>
            </Box>
          </Box>

          <Stack spacing={3}>
            
            {/* প্যারাগ্রাফ ১ */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <FeedbackTwoToneIcon sx={{ color: '#d35400', mt: 0.3, fontSize: 28 }} />
              <Typography sx={{ color: '#444444', fontSize: { xs: '0.95rem', sm: '1.05rem' }, lineHeight: 1.8, textAlign: 'left' }}>
                আমরা সবসময় চেষ্টা করি আপনাদের সেরা সেবা দেওয়ার। কিন্তু প্রতিদিনের এই ব্যস্ততার মাঝে কখনও কখনও আমাদেরও অনাকাঙ্ক্ষিত ভুল বা ডেলিভারিতে সামান্য দেরি হয়ে যেতে পারে।
              </Typography>
            </Box>

            {/* প্যারাগ্রাফ ২ */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <RocketLaunchTwoToneIcon sx={{ color: '#d35400', mt: 0.3, fontSize: 28 }} />
              <Typography sx={{ color: '#444444', fontSize: { xs: '0.95rem', sm: '1.05rem' }, lineHeight: 1.8, textAlign: 'left' }}>
                আপনার কেনাকাটা নিয়ে যদি কোনো ধরনের অভিযোগ থাকে, ডেলিভারি পৌঁছাতে দেরি হয়, কিংবা অর্ডারের কোনো জিনিস নিয়ে সমস্যা থাকে—তবে একটুও মন খারাপ করবেন না বা দ্বিধা করবেন না। সরাসরি আমাদের সাথে যোগাযোগ করুন!
              </Typography>
            </Box>

            {/* প্রতিশ্রুতি বক্স */}
            <Box sx={{ bgcolor: '#fffcf7', p: 2.5, borderRadius: 2, border: '1px dashed #e0d4c8' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <EmojiEmotionsTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>আমাদের প্রতিশ্রুতি:</Typography>
              </Box>
              <Typography sx={{ color: '#444444', fontSize: '0.95rem', lineHeight: 1.8, textAlign: 'left' }}>
                আমরা কথা দিচ্ছি, আপনার অভিযোগ বা সমস্যার কথাটি জানা মাত্রই আমরা সাথে সাথে সেটি সমাধান করার আপ্রাণ চেষ্টা করব। নিজেদের ভুলগুলো শুধরে নিয়ে আপনাদের আরও ভালো সেবা দেওয়াই আমাদের লক্ষ্য। কারণ, <strong>"রোজের বাজার"</strong>-এ আপনার সন্তুষ্টি এবং হাসিমুখটাই আমাদের কাছে সবচেয়ে বড় পাওনা!
              </Typography>
            </Box>

          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}