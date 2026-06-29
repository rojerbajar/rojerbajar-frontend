import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar,
  Link
} from '@mui/material';

// নিরাপদ আইকন ইমপোর্ট করা হলো
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import PhoneInTalkTwoToneIcon from '@mui/icons-material/PhoneInTalkTwoTone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import CampaignTwoToneIcon from '@mui/icons-material/CampaignTwoTone';
import LightbulbTwoToneIcon from '@mui/icons-material/LightbulbTwoTone';

export default function ContactUsCard({id}) {
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
              <ContactPhoneTwoToneIcon fontSize="medium" />
            </Avatar>
            <Box>
              <Typography component="h2" fontWeight="900" sx={{ color: '#4e2c1d', fontSize: { xs: '1.4rem', sm: '1.7rem' }, lineHeight: 1.3 }}>
                যোগাযোগের ঠিকানা
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#d35400', fontWeight: 'bold' }}>
                আপনার যেকোনো প্রয়োজনে আমাদের পান পাশে
              </Typography>
            </Box>
          </Box>

          <Stack spacing={3}>
            
            {/* সরাসরি ফোন */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <PhoneInTalkTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>সরাসরি ফোন কল:</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  বাজারের বিষয়ে কোনো কিছু জানার থাকলে বা সরাসরি কথা বলতে চাইলে কল করুন: <Link href="tel:7098305680" sx={{ color: '#d35400', fontWeight: 'bold' }}>7098305680</Link>
                </Typography>
              </Box>
            </Box>

            {/* হোয়াটসঅ্যাপ মেসেজ */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <WhatsAppIcon sx={{ color: '#25D366', fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>হোয়াটসঅ্যাপ মেসেজ:</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  লিস্ট টাইপ করতে সমস্যা হলে একটি 'ভয়েস মেসেজ' পাঠান এই নম্বরে: <Link href="https://wa.me/917098305680" target="_blank" sx={{ color: '#d35400', fontWeight: 'bold' }}>7098305680</Link>
                </Typography>
              </Box>
            </Box>

            {/* ইমেইল */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <EmailTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>ইমেইল:</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  পরামর্শ বা অন্য কিছু জানাতে মেইল করুন: <Link href="mailto:rojerbajar@gmail.com" sx={{ color: '#d35400', fontWeight: 'bold' }}>rojerbajar@gmail.com</Link>
                </Typography>
              </Box>
            </Box>

            {/* ওয়েবসাইট */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <PublicTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>আমাদের ওয়েবসাইট:</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  বিস্তারিত জানতে ভিজিট করুন: <Link href="https://www.rojerbajar.com" target="_blank" sx={{ color: '#d35400', fontWeight: 'bold' }}>www.rojerbajar.com</Link>
                </Typography>
              </Box>
            </Box>

            {/* হোয়াটসঅ্যাপ চ্যানেল */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <CampaignTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>WhatsApp Channel:</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  দৈনন্দিন আপডেট পেতে জয়েন করুন: <Link href="https://whatsapp.com/channel/0029VbD4YjRKmCPIa0EeQ63N" target="_blank" sx={{ color: '#d35400', fontWeight: 'bold' }}>এখানে ক্লিক করুন</Link>
                </Typography>
              </Box>
            </Box>

            {/* টিপস বক্স */}
            <Box sx={{ bgcolor: '#fffcf7', p: 2, borderRadius: 2, border: '1px dashed #e0d4c8', display: 'flex', gap: 1.5, alignItems: 'center' }}>
              <LightbulbTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
              <Typography sx={{ color: '#444444', fontSize: '0.95rem', fontWeight: '600' }}>
                টিপস: আমাদের নম্বরটি আজই ফোনে "Rojerbajar" নামে সেভ করে রাখুন, যাতে প্রয়োজনে সহজেই খুঁজে পান!
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
  );
}