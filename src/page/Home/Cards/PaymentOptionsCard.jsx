import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar
} from '@mui/material';

// নিরাপদ আইকন ইমপোর্ট করা হলো
import PaymentsTwoToneIcon from '@mui/icons-material/PaymentsTwoTone';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import QrCode2TwoToneIcon from '@mui/icons-material/QrCode2TwoTone';
import ErrorOutlineTwoToneIcon from '@mui/icons-material/ErrorOutlineTwoTone';

export default function PaymentOptionsCard({id}) {
  return (
  
      <Card id ={id}
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
              <PaymentsTwoToneIcon fontSize="medium" />
            </Avatar>
            <Box>
              <Typography component="h2" fontWeight="900" sx={{ color: '#4e2c1d', fontSize: { xs: '1.4rem', sm: '1.7rem' }, lineHeight: 1.3 }}>
                মূল্য পরিশোধের নিয়ম
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#d35400', fontWeight: 'bold' }}>
                Payment Options
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ color: '#444444', mb: 4, fontSize: { xs: '0.95rem', sm: '1.05rem' }, lineHeight: 1.8, textAlign: 'left' }}>
            বাজারের সেরা জিনিসটি আপনার হাতে তুলে দেওয়ার পর দাম মেটানোর পদ্ধতিটাও আমরা একদম সহজ রেখেছি। আপনারা নিজেদের সুবিধামতো দুটি উপায়ে পেমেন্ট করতে পারেন:
          </Typography>

          <Stack spacing={3}>
            
            {/* ক্যাশ অন ডেলিভারি */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <PaidTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>ক্যাশ অন ডেলিভারি (Cash on Delivery)</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  জিনিস হাতে পাবেন, নিজের চোখে তাজা বাজার যাচাই করবেন, তারপর টাকা দেবেন। হাতে নগদ টাকা দিয়ে পেমেন্ট করার এই সহজ সুযোগটি সবার জন্যই থাকছে।
                </Typography>
              </Box>
            </Box>

            {/* অনলাইন পেমেন্ট */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <QrCode2TwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>অনলাইন পেমেন্ট (Online Payment)</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  হাতে ক্যাশ নেই বা ভাংতি টাকার সমস্যা? কোনো চিন্তা নেই! Google Pay, PhonePe, Paytm বা যেকোনো UPI-এর মাধ্যমে ডেলিভারির সময় পেমেন্ট করতে পারেন।
                </Typography>
              </Box>
            </Box>

            {/* বিনীত অনুরোধ (ধারের নিয়ম) */}
            <Box sx={{ bgcolor: '#fff9f5', p: 2.5, borderRadius: 2, border: '1px dashed #e0d4c8' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <ErrorOutlineTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
                <Typography fontWeight="800" sx={{ color: '#d35400' }}>একটি বিনীত অনুরোধ:</Typography>
              </Box>
              <Typography sx={{ color: '#444444', fontSize: '0.95rem', lineHeight: 1.8, textAlign: 'left' }}>
                আমাদের মান ধরে রাখতে <strong>বাকি বা ধারের কোনো ব্যবস্থা নেই।</strong> আমরা বিশ্বাস করি— <em>"হিসেব পরিষ্কার থাকলে, সম্পর্কও সুন্দর থাকে এবং বিশ্বাস বাড়ে।"</em> বাজার বুঝে নেওয়ার সময় সাথে সাথেই পেমেন্ট করে দেওয়ার জন্য আপনাদের কাছে বিনীত অনুরোধ জানাচ্ছি। আপনাদের এই ছোট্ট সহযোগিতা আমাদের আরও উন্নত সেবা দিতে সাহায্য করবে।
              </Typography>
            </Box>

          </Stack>
        </CardContent>
      </Card>
  );
}