import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar,IconButton
} from '@mui/material';

// ১০০% নিরাপদ আইকন ইমপোর্ট করা হলো
import AssignmentReturnTwoToneIcon from '@mui/icons-material/AssignmentReturnTwoTone';
import RuleTwoToneIcon from '@mui/icons-material/RuleTwoTone';
import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import { useLongPress } from "../../hooks/useLongPress";
export default function OrderAndReturnPolicyCard({id,genreateLink,shareCard}) {

    const { isTriggered, ...longPressProps } = useLongPress(() => {
      shareCard(id);
      // console.log("লং প্রেস সফল হয়েছে!");
    }, 2000);
  
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
          <IconButton
            {...longPressProps} // এখানে শুধু ইভেন্ট হ্যান্ডলারগুলো গেল
            color={isTriggered ? "error" : "primary"} // isTriggered এখানে ব্যবহার করলেন
              onClick={() => genreateLink({id,path:window.location.pathname})}
              aria-label="Copy order link" // এটি যুক্ত করুন
              sx={{ p: 0 }}
            >
            <Avatar sx={{ bgcolor: '#fff4e6', color: '#d35400', width: 50, height: 50 }}>
              <AssignmentReturnTwoToneIcon fontSize="medium" />
            </Avatar>
            </IconButton>
            <Box>
              <Typography component="h2" fontWeight="900" sx={{ color: '#4e2c1d', fontSize: { xs: '1.4rem', sm: '1.7rem' }, lineHeight: 1.3 }}>
                অর্ডার ও রিটার্ন সংক্রান্ত অনুরোধ
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#d35400', fontWeight: 'bold' }}>
                বিনীত কিছু নিয়মাবলী
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ color: '#444444', mb: 3, fontSize: { xs: '0.95rem', sm: '1.05rem' }, lineHeight: 1.8, textAlign: 'left' }}>
            আমাদের কাছে আপনাদের প্রতিটি অর্ডারই খুব মূল্যবান। তবে তাজা ও পচনশীল পণ্য হওয়ার কারণে আমাদের কিছু নিয়ম মেনে চলতে হয়।
          </Typography>

          <Stack spacing={3}>
            
            {/* রিটার্ন পলিসি */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <RuleTwoToneIcon sx={{ color: '#d35400', mt: 0.3, fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>রিটার্ন বা ফেরত নীতি:</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  যেহেতু আমরা প্রতিদিনের একদম তাজা শাক-সবজি, কাঁচা মাছ ও অন্যান্য জিনিসপত্র সরবরাহ করি, তাই ডেলিভারি হয়ে যাওয়ার পর জিনিসগুলো <strong>রিটার্ন বা ফেরত নেওয়ার কোনো ব্যবস্থা আপাতত আমাদের নেই।</strong>
                </Typography>
              </Box>
            </Box>

            {/* কেন এই নিয়ম? */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <HelpOutlineTwoToneIcon sx={{ color: '#d35400', mt: 0.3, fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>কেন এই নিয়ম?</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  কাঁচা জিনিস একবার হাতবদল হলে বা দীর্ঘক্ষণ বাইরে থাকলে তার সতেজতা ও গুণমান নষ্ট হয়ে যায়। আমরা সবসময় আপনাদের হাতে একদম ফ্রেশ পণ্য তুলে দিতে বদ্ধপরিকর।
                </Typography>
              </Box>
            </Box>

            {/* অর্ডার করার অনুরোধ */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <EditNoteTwoToneIcon sx={{ color: '#d35400', mt: 0.3, fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>আমাদের বিনীত অনুরোধ:</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  অর্ডার চূড়ান্ত করার আগে আপনারা একটু সময় নিয়ে, ভালোভাবে চিন্তা করে বাজারের লিস্টটি আমাদের দেবেন। যতটুকু প্রয়োজন, ঠিক ততটুকুই অর্ডার করুন।
                </Typography>
              </Box>
            </Box>

            {/* হাইলাইট বক্স: প্রতিশ্রুতি */}
            <Box sx={{ bgcolor: '#fffcf7', p: 2.5, borderRadius: 2, border: '1px dashed #e0d4c8' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                <WorkspacePremiumTwoToneIcon sx={{ color: '#d35400', fontSize: 26 }} />
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>আমাদের প্রতিশ্রুতি:</Typography>
              </Box>
              <Typography sx={{ color: '#444444', fontSize: '0.95rem', lineHeight: 1.7,textAlign:"start" }}>
                জিনিস ফেরত দেওয়ার প্রয়োজন যেন না হয়, সেটিই আমাদের লক্ষ্য। আপনি বাজারে নিজে গিয়ে যেমন সবচেয়ে ভালো জিনিসটা বেছে নিতেন, আমরাও ঠিক সেভাবেই সেরা পণ্যটি আপনার জন্য গুছিয়ে পাঠাব। আপনার বিশ্বাসই আমাদের সবচেয়ে বড় সম্বল।
              </Typography>
            </Box>

          </Stack>
        </CardContent>
      </Card>
  );
}