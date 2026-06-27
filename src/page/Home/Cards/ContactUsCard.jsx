import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

export default function ContactUsCard() {
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
              ৫. যোগাযোগের ঠিকানা ও নম্বর (Contact Us)
            </Typography>
          </Box>

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
                  textAlign: 'left',
                  mb: 0.5
                }}
              >
                বাজারের বিষয়ে কোনো কিছু জানার থাকলে বা সরাসরি কথা বলতে চাইলে, নির্দ্বিধায় আমাদের মোবাইল নম্বরে কল করুন। আপনাদের কথা শোনার জন্য আমরা সবসময় প্রস্তুত।
              </Typography>
              <Typography 
                sx={{ 
                  color: '#d35400', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  fontWeight: '600',
                  textAlign: 'left'
                }}
              >
                মোবাইল নম্বর:{' '}
                <a 
                  href="tel:7098305680" 
                  style={{ color: '#d35400', textDecoration: 'underline' }}
                >
                  7098305680
                </a>
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্ট ২: হোয়াটসঅ্যাপ মেসেজ */}
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
                হোয়াটসঅ্যাপ (WhatsApp) মেসেজ:
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left',
                  mb: 0.5
                }}
              >
                আপনি চাইলে খুব সহজেই আমাদের হোয়াটসঅ্যাপে একটি মেসেজ (SMS) বা ভয়েস নোট পাঠাতে পারেন। আমরা সাথে সাথেই আপনার মেসেজ দেখে উত্তর দেব।
              </Typography>
              <Typography 
                sx={{ 
                  color: '#d35400', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  fontWeight: '600',
                  textAlign: 'left'
                }}
              >
                হোয়াটসঅ্যাপ নম্বর:{' '}
                <a 
                  href="https://wa.me/917098305680" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#d35400', textDecoration: 'underline' }}
                >
                  7098305680
                </a>
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্ট ৩: ইমেইল */}
          <Box sx={{ display: 'flex', mb: 3.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>📧</Typography>
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
                ইমেইল (Email):
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left',
                  mb: 0.5
                }}
              >
                ফোনের পাশাপাশি আপনারা চাইলে ইমেইলের মাধ্যমেও আমাদের সাথে যোগাযোগ করতে পারেন। আপনাদের যেকোনো পরামর্শ বা কথা আমাদের লিখে জানাতে পারেন।
              </Typography>
              <Typography 
                sx={{ 
                  color: '#d35400', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  fontWeight: '600',
                  textAlign: 'left'
                }}
              >
                ইমেইল আইডি:{' '}
                <a 
                  href="mailto:rojerbajar@gmail.com" 
                  style={{ color: '#d35400', textDecoration: 'underline' }}
                >
                  rojerbajar@gmail.com
                </a>
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্ট ৪: ওয়েবসাইট */}
          <Box sx={{ display: 'flex', mb: 3.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>🌐</Typography>
            <Box sx={{ width: '100%' }}>
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
                ওয়েবসাইট (Website):
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left',
                  mb: 0.5
                }}
              >
                আমাদের সম্পর্কে আরও জানতে বা বিভিন্ন তথ্য দেখতে ভিজিট করুন আমাদের অফিসিয়াল ওয়েবসাইট।
              </Typography>
              <Typography 
                sx={{ 
                  color: '#d35400', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  fontWeight: '600',
                  textAlign: 'left'
                }}
              >
                ওয়েবসাইট:{' '}
                <a 
                  href="https://www.rojerbajar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#d35400', textDecoration: 'underline' }}
                >
                  www.rojerbajar.com
                </a>
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্ট ৫: হোয়াটসঅ্যাপ চ্যানেল */}
          <Box sx={{ display: 'flex', mb: 4 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>📢</Typography>
            <Box sx={{ width: '100%' }}>
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
                হোয়াটসঅ্যাপ চ্যানেল (WhatsApp Channel):
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left',
                  mb: 0.5
                }}
              >
                প্রতিদিনের বাজারের তালিকা, আজকের দাম এবং গুরুত্বপূর্ণ আপডেট সবার আগে পেতে আমাদের Rojerbajar WhatsApp Channel-এ যুক্ত থাকুন।
              </Typography>
              <Typography 
                sx={{ 
                  color: '#d35400', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.6,
                  textAlign: 'left'
                }}
              >
                <strong>WhatsApp Channel:</strong> Rojerbajar<br />
                <strong>চ্যানেল লিংক:</strong>{' '}
                <a 
                  href="https://whatsapp.com/channel/0029VbD4YjRKmCPIa0EeQ63N" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#d35400', textDecoration: 'underline', wordBreak: 'break-all' }}
                >
                  https://whatsapp.com/channel/0029VbD4YjRKmCPIa0EeQ63N
                </a>
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্ট ৬: একটি ছোট্ট অনুরোধ (বক্স স্টাইল) */}
          <Box 
            sx={{ 
              display: 'flex', 
              bgcolor: '#fff9f5', // একটু আলাদা দেখানোর জন্য হালকা ব্যাকগ্রাউন্ড
              p: 2, 
              borderRadius: 2,
              border: '1px dashed #e0d4c8',
              mb: 0
            }}
          >
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>💡</Typography>
            <Box>
              <Typography 
                component="h3"
                fontWeight="800" 
                sx={{ 
                  color: '#d35400', 
                  fontSize: { xs: '1.05rem', sm: '1.15rem' }, 
                  mb: 1, 
                  textAlign: 'left' 
                }}
              >
                একটি ছোট্ট অনুরোধ:
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                আপনাদের সুবিধার্থে আমাদের ফোন ও হোয়াটসঅ্যাপ নম্বরটি আজই আপনার ফোনে <strong>"Rojerbajar"</strong> নামে সেভ (Save) করে রাখুন। এতে দরকারের সময় একদম চোখের সামনেই আমাদের পেয়ে যাবেন!
              </Typography>
            </Box>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}