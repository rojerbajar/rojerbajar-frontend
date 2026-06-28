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
import ShoppingCartCheckoutTwoToneIcon from '@mui/icons-material/ShoppingCartCheckoutTwoTone';
import PhoneInTalkTwoToneIcon from '@mui/icons-material/PhoneInTalkTwoTone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // সঠিক ইমপোর্ট
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import CampaignTwoToneIcon from '@mui/icons-material/CampaignTwoTone';

export default function HowToOrderCard() {
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
              <ShoppingCartCheckoutTwoToneIcon fontSize="medium" />
            </Avatar>
            <Box>
              <Typography component="h2" fontWeight="900" sx={{ color: '#4e2c1d', fontSize: { xs: '1.4rem', sm: '1.7rem' }, lineHeight: 1.3 }}>
                কীভাবে অর্ডার করবেন?
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#d35400', fontWeight: 'bold' }}>
                সহজ ৩টি উপায়
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ color: '#444444', mb: 4, fontSize: { xs: '0.95rem', sm: '1.05rem' }, lineHeight: 1.8, textAlign: 'left' }}>
            আপনাদের বাজার করার অভিজ্ঞতাকে একদম সহজ ও আপন করতে Rojerbajar-এ আমরা অর্ডার দেওয়ার পদ্ধতিটি খুব সাধারণ রেখেছি। আপাতত নিচের যেকোনো উপায়ে আমাদের কাছে অর্ডার দিতে পারেন:
          </Typography>

          <Stack spacing={3}>
            
            {/* ফোন কল */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <PhoneInTalkTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>সরাসরি ফোন কল:</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  জাস্ট একটা ফোন করুন <Link href="tel:7098305680" sx={{ color: '#d35400', fontWeight: 'bold' }}>7098305680</Link> নম্বরে, আর আপনার বাজারের লিস্টটি আমাদের মুখে বলে দিন। বাকি দায়িত্ব আমাদের।
                </Typography>
              </Box>
            </Box>

            {/* হোয়াটসঅ্যাপ */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <WhatsAppIcon sx={{ color: '#25D366', fontSize: 28 }} /> {/* সঠিক আইকন */}
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>হোয়াটসঅ্যাপ মেসেজ বা ভয়েস নোট:</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  <Link href="https://wa.me/917098305680" target="_blank" sx={{ color: '#d35400', fontWeight: 'bold' }}>7098305680</Link> নম্বরে লিস্টটি টাইপ করে পাঠান অথবা একটি 'ভয়েস মেসেজ' দিন। আমরা শুনেই আপনার বাজারের থলে গুছিয়ে নেব।
                </Typography>
              </Box>
            </Box>

            {/* অ্যাপ ও ওয়েবসাইট আপডেট */}
            <Box sx={{ bgcolor: '#fffcf7', p: 2.5, borderRadius: 2, border: '1px dashed #e0d4c8' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                <PublicTwoToneIcon sx={{ color: '#d35400', fontSize: 26 }} />
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>অ্যাপ ও ওয়েবসাইট আপডেট:</Typography>
              </Box>
              <Typography sx={{ color: '#444444', fontSize: '0.95rem', mb: 1 ,textAlign:"start"}}>
                আমাদের অ্যাপ ও ওয়েবসাইট <Link href="https://www.rojerbajar.com" target="_blank" sx={{ color: '#d35400', fontWeight: 'bold' }}>www.rojerbajar.com</Link> ইতিমধ্যেই তৈরি আছে। তবে কেনাকাটা আরও সহজ করতে সেখানে কিছু নতুন কাজ চলছে। 
              </Typography>
              <Typography sx={{ color: '#444444', fontSize: '0.95rem' ,textAlign:"start" }}>
                খুব শীঘ্রই আপনারা এক ক্লিকেই অর্ডার করতে পারবেন। ততদিন ফোন বা হোয়াটসঅ্যাপের মাধ্যমেই আপনাদের সেবা করতে আমরা প্রস্তুত।
              </Typography>
            </Box>

            {/* হোয়াটসঅ্যাপ চ্যানেল */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <CampaignTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography fontWeight="800" sx={{ color: '#4e2c1d' }}>আমাদের WhatsApp Channel:</Typography>
                <Typography sx={{ color: '#444444', fontSize: '0.95rem' }}>
                  প্রতিদিনের আপডেটেড লিস্ট ও দাম জানতে আমাদের চ্যানেলে জয়েন করুন: <Link href="https://whatsapp.com/channel/0029VbD4YjRKmCPIa0EeQ63N" target="_blank" sx={{ color: '#d35400' }}>এখানে ক্লিক করুন</Link>
                </Typography>
              </Box>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}