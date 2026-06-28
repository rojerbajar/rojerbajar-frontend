import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar,
  Divider,
  Link
} from '@mui/material';

// নিরাপদ আইকন ইমপোর্ট করা হলো
import UpdateTwoToneIcon from '@mui/icons-material/UpdateTwoTone';
import SmartphoneTwoToneIcon from '@mui/icons-material/SmartphoneTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import CampaignTwoToneIcon from '@mui/icons-material/CampaignTwoTone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; 

export default function UpdatedPriceListCard() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center',  px: { xs: 1 } }}>
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
        <CardContent sx={{ p: { xs: 2, sm: 3} }}>
          
          {/* হেডিং সেকশন */}
          <Box sx={{ mb: 4, textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Avatar sx={{ bgcolor: '#fff4e6', color: '#d35400', width: 50, height: 50 }}>
              <UpdateTwoToneIcon fontSize="medium" />
            </Avatar>
            <Box>
              <Typography component="h2" fontWeight="900" sx={{ color: '#4e2c1d', fontSize: { xs: '1.4rem', sm: '1.7rem' }, lineHeight: 1.3, textAlign: 'left' }}>
                পণ্যের তালিকা ও আজকের দাম
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#d35400', fontWeight: 'bold', textAlign: 'left' }}>
                সহজ উপায়ে আপডেট জানুন
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ color: '#444444', mb: 4, fontSize: { xs: '0.95rem', sm: '1.05rem' }, lineHeight: 1.8, textAlign: 'left' }}>
            প্রতিদিনের তাজা পণ্য ও দাম জানতে Rojerbajar আপনাদের জন্য কয়েকটি সহজ উপায় রেখেছে। আপনার সুবিধামতো যেকোনো একটি বেছে নিন:
          </Typography>

          <Stack spacing={3}>
            
            {/* মোবাইল অ্যাপ */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <SmartphoneTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>মোবাইল অ্যাপ (Rojerbajar App)</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  অ্যাপ ডাউনলোড করুন এবং প্রতিদিনের পণ্যের তালিকা ও দাম আপডেট সবার আগে দেখুন। এখান থেকেই সরাসরি অর্ডার করা অনেক সহজ।
                </Typography>
              </Box>
            </Box>

            {/* ওয়েবসাইট */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <PublicTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>আমাদের ওয়েবসাইট</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem', mb: 0.5 }}>
                  ভিজিট করুন: <Link href="https://www.rojerbajar.com" target="_blank" sx={{ color: '#d35400' }}>www.rojerbajar.com</Link>
                </Typography>
              </Box>
            </Box>

            {/* হোয়াটসঅ্যাপ চ্যানেল */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <CampaignTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>WhatsApp Channel</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  সবচেয়ে দ্রুত আপডেট পেতে আমাদের চ্যানেলে যুক্ত থাকুন: <Link href="https://whatsapp.com/channel/0029VbD4YjRKmCPIa0EeQ63N" target="_blank" sx={{ color: '#d35400' }}>এখানে ক্লিক করুন</Link>
                </Typography>
              </Box>
            </Box>

            {/* মেসেজ বা ফোন */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <WhatsAppIcon sx={{ color: '#25D366', fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>মেসেজ বা সরাসরি ফোন</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  অর্ডার করতে বা দাম জানতে সরাসরি মেসেজ বা কল করুন: <Link href="tel:7098305680" sx={{ color: '#d35400', fontWeight: 'bold' }}>7098305680</Link>
                </Typography>
              </Box>
            </Box>
          </Stack>

          <Divider sx={{ my: 4, borderStyle: 'dashed', borderColor: '#e0d4c8' }} />

          <Typography sx={{ color: '#4e2c1d', fontSize: '1.1rem', textAlign: 'center', fontWeight: '800' }}>
            Rojerbajar – আপনার বিশ্বস্ত বাজারের ঠিকানা!
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
}