import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

export default function HowToOrderCard() {
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
              ১. কীভাবে অর্ডার করবেন? (How to Order)
            </Typography>
          </Box>

          {/* ভূমিকা প্যারাগ্রাফ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 1.5, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            আপনাদের বাজার করার অভিজ্ঞতাকে একদম সহজ ও আপন করতে Rojerbajar-এ আমরা অর্ডার দেওয়ার পদ্ধতিটি খুব সাধারণ রেখেছি। কোনো জটিল নিয়ম নেই, যেন মনে হয় নিজের ঘরের কাউকেই বাজারের কথা বলছেন!
          </Typography>
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 3.5, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            আপাতত আপনারা খুব সহজেই নিচের যেকোনো উপায়ে আমাদের কাছে অর্ডার দিতে পারেন:
          </Typography>

          {/* পয়েন্ট ১: ফোন কল */}
          <Box sx={{ display: 'flex', mb: 3.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>📞</Typography>
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
                সরাসরি ফোন কল:
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                জাস্ট একটা ফোন করুন{' '}
                <a 
                  href="tel:7098305680" 
                  style={{ color: '#d35400', textDecoration: 'underline', fontWeight: 'bold' }}
                >
                  7098305680
                </a>{' '}
                নম্বরে, আর আপনার বাজারের লিস্টটি আমাদের মুখে বলে দিন। ব্যাস, আপনার কাজ শেষ! বাকি দায়িত্ব আমাদের।
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্ট ২: হোয়াটসঅ্যাপ মেসেজ বা ভয়েস নোট */}
          <Box sx={{ display: 'flex', mb: 3.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>💬</Typography>
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
                হোয়াটসঅ্যাপ মেসেজ বা ভয়েস নোট:
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                <a 
                  href="https://wa.me/917098305680" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#d35400', textDecoration: 'underline', fontWeight: 'bold' }}
                >
                  7098305680
                </a>{' '}
                WhatsApp নম্বরে বাজারের লিস্টটি টাইপ করে পাঠিয়ে দিন। টাইপ করতে সময় নেই বা সমস্যা হচ্ছে? কোনো ব্যাপার না! মুখে বলে ছোট্ট একটা 'ভয়েস মেসেজ' (Voice Note) পাঠিয়ে দিন। আমরা শুনে আপনার বাজারের থলে গুছিয়ে নেব।
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্ট ৩: হোয়াটসঅ্যাপ কল */}
          <Box sx={{ display: 'flex', mb: 4 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>📱</Typography>
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
                হোয়াটসঅ্যাপ কল:
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                আপনি চাইলে আমাদের WhatsApp নম্বর{' '}
                <a 
                  href="https://wa.me/917098305680" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#d35400', textDecoration: 'underline', fontWeight: 'bold' }}
                >
                  7098305680
                </a>
                -এ কল করেও আপনার দরকারি জিনিসগুলোর কথা জানাতে পারেন।
              </Typography>
            </Box>
          </Box>

          {/* সাব-হেডিং: অ্যাপ ও ওয়েবসাইট */}
          <Box sx={{ display: 'flex', mb: 2, alignItems: 'flex-start' }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.2 }}>🌐</Typography>
            <Typography 
              component="h3"
              fontWeight="800" 
              sx={{ 
                color: '#4e2c1d', 
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                textAlign: 'left'
              }}
            >
              আমাদের অ্যাপ ও ওয়েবসাইট থেকে অর্ডারের আপডেট:
            </Typography>
          </Box>
          
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 1.5,
              pl: { xs: 4, sm: 4.5 },
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            আপনাদের সুবিধার্থে আমাদের Rojerbajar-এর নিজস্ব মোবাইল অ্যাপ এবং ওয়েবসাইট{' '}
            <a 
              href="https://www.rojerbajar.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#d35400', textDecoration: 'underline', fontWeight: 'bold' }}
            >
              www.rojerbajar.com
            </a>{' '}
            ইতিমধ্যেই তৈরি আছে! তবে, সেখানে আপনাদের কেনাকাটার অভিজ্ঞতা আরও সহজ ও সুন্দর করার জন্য কিছু নতুন কাজ চলছে। তাই আপাতত অ্যাপ বা ওয়েবসাইট থেকে সরাসরি অর্ডার নেওয়ার সুবিধাটি বন্ধ রাখা হয়েছে।
          </Typography>
          
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 1.5,
              pl: { xs: 4, sm: 4.5 },
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            খুব শিগগিরই আমরা সেখানে 'সরাসরি অর্ডার' করার ফিচারটি নিয়ে আসছি, যাতে এক ক্লিকেই বাজারের সব জিনিস আপনারা অর্ডার করতে পারেন।
          </Typography>

          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 3,
              pl: { xs: 4, sm: 4.5 },
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            ততদিন পর্যন্ত, ফোন (
            <a href="tel:7098305680" style={{ color: '#d35400', textDecoration: 'underline' }}>7098305680</a>
            ) বা WhatsApp (
            <a href="https://wa.me/917098305680" target="_blank" rel="noopener noreferrer" style={{ color: '#d35400', textDecoration: 'underline' }}>7098305680</a>
            )-এর এই আন্তরিক যোগাযোগেই আপনাদের সেবা করতে আমরা সবসময় প্রস্তুত।
          </Typography>

          {/* শেষের প্যারাগ্রাফ (ফুটার স্টাইল) */}
          <Box 
            sx={{ 
              borderTop: '1px dashed #e0d4c8',
              pt: 2.5,
              mt: 2,
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography sx={{ mr: 1, fontSize: '1.3rem' }}>📢</Typography>
            <Typography 
              sx={{ 
                color: '#4e2c1d', 
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.6,
                fontWeight: '700'
              }}
            >
              Rojerbajar WhatsApp Channel:{' '}
              <a 
                href="https://whatsapp.com/channel/0029VbD4YjRKmCPIa0EeQ63N" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#d35400', textDecoration: 'underline', wordBreak: 'break-all' }}
              >
                এখানে ক্লিক করুন
              </a>
            </Typography>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}