import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

export default function UpdatedPriceListCard() {
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
              পণ্যের তালিকা এবং আজকের দাম জানবেন কীভাবে?
            </Typography>
          </Box>

          {/* ভূমিকা প্যারাগ্রাফ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 3.5, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            প্রতিদিনের তাজা সবজি, মাছ, ফল ও অন্যান্য নিত্যপ্রয়োজনীয় পণ্যের আপডেটেড তালিকা এবং আজকের সঠিক দাম জানতে Rojerbajar আপনাদের জন্য কয়েকটি সহজ উপায় রেখেছে। আপনার সুবিধামতো যেকোনো একটি মাধ্যম ব্যবহার করতে পারেন।
          </Typography>

          {/* পয়েন্ট ১: মোবাইল অ্যাপ */}
          <Box sx={{ display: 'flex', mb: 3.5 }}>
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
                আমাদের মোবাইল অ্যাপ (Rojerbajar App)
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                খুব সহজেই Rojerbajar অ্যাপটি আপনার মোবাইলে ডাউনলোড করে নিতে পারেন। সেখানে প্রতিদিনের তাজা পণ্যের তালিকা, সর্বশেষ দাম এবং স্টকের তথ্য সুন্দরভাবে সাজানো থাকবে। এছাড়াও, আপনি অ্যাপ থেকেই খুব সহজে সরাসরি অর্ডার করতে পারবেন।
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্ট ২: ওয়েবসাইট */}
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
                আমাদের ওয়েবসাইট
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
                আমাদের ওয়েবসাইট www.rojerbajar.com ভিজিট করেও প্রতিদিনের তাজা সবজি, মাছ, ফল ও অন্যান্য পণ্যের আপডেটেড তালিকা এবং আজকের সর্বশেষ দাম দেখতে পারবেন।
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

          {/* পয়েন্ট ৩: WhatsApp Channel */}
          <Box sx={{ display: 'flex', mb: 3.5 }}>
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
                আমাদের WhatsApp Channel
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
                প্রতিদিন সকালে বাজারের সর্বশেষ পণ্যের তালিকা, নতুন আপডেট এবং আজকের দাম সবার আগে জানতে আমাদের Rojerbajar WhatsApp Channel-এ যুক্ত হতে পারেন।
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

          {/* পয়েন্ট ৪: WhatsApp-এ মেসেজ */}
          <Box sx={{ display: 'flex', mb: 3.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>💬</Typography>
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
                WhatsApp-এ মেসেজ করুন
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
                আপনি চাইলে যেকোনো সময় আমাদের WhatsApp নম্বরে "Hi" অথবা আপনার প্রয়োজনীয় পণ্যের নাম লিখে মেসেজ করতে পারেন। আমরা যত দ্রুত সম্ভব আপনাকে আজকের আপডেটেড দামের তালিকা পাঠিয়ে দেব।
              </Typography>
              <Typography 
                sx={{ 
                  color: '#d35400', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  fontWeight: '600',
                  textAlign: 'left'
                }}
              >
                WhatsApp নম্বর:{' '}
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

          {/* পয়েন্ট ৫: সরাসরি ফোন */}
          <Box sx={{ display: 'flex', mb: 2 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>📞</Typography>
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
                সরাসরি ফোন করুন
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
                অ্যাপ বা ইন্টারনেট ব্যবহার করতে না চাইলে কোনো সমস্যা নেই। সরাসরি আমাদের নম্বরে ফোন করুন। আমাদের প্রতিনিধি আপনাকে আজ কী কী পণ্য পাওয়া যাচ্ছে এবং প্রতিটির সর্বশেষ দাম জানিয়ে দেবেন।
              </Typography>
              <Typography 
                sx={{ 
                  color: '#d35400', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  fontWeight: '600',
                  textAlign: 'left'
                }}
              >
                মোবাইল:{' '}
                <a 
                  href="tel:7098305680" 
                  style={{ color: '#d35400', textDecoration: 'underline' }}
                >
                  7098305680
                </a>
              </Typography>
            </Box>
          </Box>

          {/* শেষের প্যারাগ্রাফ (ফুটার স্টাইল) */}
          <Typography 
            sx={{ 
              color: '#4e2c1d', 
              mt: 4, 
              mb: 0, 
              fontSize: { xs: '1rem', sm: '1.15rem' },
              lineHeight: 1.6,
              textAlign: 'center',
              fontWeight: '800',
              borderTop: '1px dashed #e0d4c8',
              pt: 2.5
            }}
          >
            Rojerbajar – আপনার প্রতিদিনের বাজার, সঠিক দাম ও বিশ্বস্ত সেবার ঠিকানা।
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
}