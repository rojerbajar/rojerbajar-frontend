import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

export default function RealPhotosCard() {
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
          <Box sx={{ display: 'flex', mb: 4, alignItems: 'flex-start' }}>
            <Box>
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
                বাজারের তাজা জিনিসের আসল ছবি (Real Photos) কীভাবে দেখবেন?
              </Typography>
            </Box>
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
            অনলাইনে কেনাকাটায় অনেকেই আসল জিনিস কেমন হবে, তা নিয়ে চিন্তায় থাকেন। আপনাদের সেই দুশ্চিন্তা দূর করতে আমরা ইন্টারনেট থেকে নামানো কোনো সাজানো ছবি ব্যবহার করি না। আমরা আপনাদের বাজারের একদম তাজা ও আসল জিনিসের ছবি দেখাই।
          </Typography>

          {/* প্যারাগ্রাফ ২ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 3.5, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            আপাতত আমাদের অরিজিনাল ছবিগুলো দেখার জন্য আমরা এই সহজ উপায়গুলো রেখেছি:
          </Typography>

          {/* পয়েন্ট ১ */}
          <Box sx={{ display: 'flex', mb: 3.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>📢</Typography>
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
                'রোজের বাজার' হোয়াটসঅ্যাপ চ্যানেল:
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                আমরা প্রতিদিন সকালে আমাদের হোয়াটসঅ্যাপ চ্যানেলে তাজা সবজি, মাছ ও অন্যান্য জিনিসের লাইভ (Live) ছবি আপলোড করি। সেখানে আপনারা নিজের চোখে আসল ছবিগুলো দেখতে পাবেন।
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্ট ২ */}
          <Box sx={{ display: 'flex', mb: 4 }}>
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
                হোয়াটসঅ্যাপ মেসেজ বা ফোন কল:
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                চ্যানেল ছাড়াও আপনি চাইলে আমাদের সরাসরি ফোন করতে পারেন অথবা হোয়াটসঅ্যাপে একটি মেসেজ দিতে পারেন। আমরা সাথে সাথে আপনার দরকারি জিনিসের তাজা ও আসল ছবি আপনাকে পাঠিয়ে দেব।
              </Typography>
            </Box>
          </Box>

          {/* সাব-হেডিং: আমাদের ভবিষ্যৎ পরিকল্পনা */}
          <Box sx={{ display: 'flex', mb: 1.5, alignItems: 'center' }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem' }}>🚀</Typography>
            <Typography 
              component="h3"
              fontWeight="800" 
              sx={{ 
                color: '#4e2c1d', 
                fontSize: { xs: '1.2rem', sm: '1.35rem' },
                textAlign: 'left'
              }}
            >
              আমাদের ভবিষ্যৎ পরিকল্পনা:
            </Typography>
          </Box>
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 0,
              pl: { xs: 4, sm: 4.5 }, // ইমোজির নিচ থেকে সুন্দরভাবে শুরু করার জন্য
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            বর্তমানে আপনারা শুধুমাত্র হোয়াটসঅ্যাপের মাধ্যমেই আমাদের আসল ছবিগুলো দেখতে পাচ্ছেন। তবে আপনাদের কেনাকাটা আরও সহজ করতে আমরা কাজ করে যাচ্ছি। খুব শীঘ্রই আপনারা আমাদের <strong>মোবাইল অ্যাপ এবং ওয়েবসাইটেও</strong> সরাসরি প্রতিদিনের তাজা বাজারের অরিজিনাল ছবিগুলো দেখতে পাবেন!
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
}