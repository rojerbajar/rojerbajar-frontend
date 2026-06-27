import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

export default function JourneyStartCard() {
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
          
          {/* চোখে পড়ার মতো সুন্দর প্রধান হেডিং */}
          <Box sx={{ mb: 3.5, textAlign: 'left' }}>
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
              আমাদের এই নতুন পথচলার শুরুটা যেমন হচ্ছে...
            </Typography>
          </Box>

          {/* প্যারাগ্রাফ ১ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 2.5, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            যেকোনো বড় ও ভালো কাজের শুরুটা একটু ছোট পরিসরেই করতে হয়। আমরাও আমাদের <strong>"রোজের বাজার"</strong>-এর এই স্বপ্নের উদ্যোগটি খুব অল্প কিছু জিনিস নিয়ে শুরু করছি।
          </Typography>

          {/* প্যারাগ্রাফ ২ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 4, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            আপনাদের প্রতিদিনের পাতে একদম সেরা জিনিসটি তুলে দেওয়ার লক্ষ্যে, আপাতত আমরা শুধু <strong>"একদম তাজা ও ফ্রেশ মাছ"</strong> দিয়েই আমাদের এই পথচলা শুরু করলাম। এখন থেকে প্রতিদিনের বাছাই করা সেরা মাছটি আপনারা আমাদের কাছে পেয়ে যাবেন।
          </Typography>

          {/* সাব-হেডিং: আগামী লক্ষ্য ও স্বপ্ন */}
          <Box sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
            <Typography sx={{ mr: 1, fontSize: '1.4rem' }}>🌱</Typography>
            <Typography 
              component="h3"
              fontWeight="800" 
              sx={{ 
                color: '#4e2c1d', 
                fontSize: { xs: '1.2rem', sm: '1.4rem' },
                textAlign: 'left'
              }}
            >
              আমাদের আগামী লক্ষ্য ও স্বপ্ন:
            </Typography>
          </Box>

          {/* প্যারাগ্রাফ ৩ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 2.5, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            তবে আমাদের লক্ষ্য এখানেই থেমে নেই! আপনাদের পুরো বাজারের কষ্ট কমানোই আমাদের আসল উদ্দেশ্য। তাই আমরা খুব দ্রুত একে একে তাজা শাক-সবজি, ফলমূল থেকে শুরু করে দৈনন্দিন বাজারের সব কিছুই আপনাদের জন্য নিয়ে আসার আপ্রাণ চেষ্টা করছি। আমরা ধাপে ধাপে আমাদের লক্ষ্যের দিকে এগিয়ে যাচ্ছি এবং খুব শিগগিরই সব ধরনের জিনিস আপনাদের হাতে তুলে দিতে পারব।
          </Typography>

          {/* শেষের প্যারাগ্রাফ */}
          <Typography 
            sx={{ 
              color: '#4e2c1d', 
              mt: 3, 
              mb: 0, 
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.8,
              textAlign: 'start',
              fontWeight: '700',
              borderTop: '1px dashed #e0d4c8',
              pt: 2.5
            }}
          >
            শুরুর এই ছোট পদক্ষেপে আপনাদের ভালোবাসা, ভরসা ও আশীর্বাদ আমাদের খুব প্রয়োজন। আপাতত আমাদের তাজা মাছের এই আয়োজনে আপনাদের সেবা করার সুযোগ দিন। কথা দিচ্ছি, আপনাদের বিশ্বাস আমরা ভাঙব না!
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
}