import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar
} from '@mui/material';

// ১০০% নিরাপদ আইকন ইমপোর্ট করা হলো
import PhotoCameraTwoToneIcon from '@mui/icons-material/PhotoCameraTwoTone';
import CampaignTwoToneIcon from '@mui/icons-material/CampaignTwoTone';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';
import DevicesTwoToneIcon from '@mui/icons-material/DevicesTwoTone';

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
          boxShadow: '0 12px 35px rgba(78, 44, 29, 0.08)', 
          overflow: 'hidden',
          border: '1px solid #f0e6da',
          bgcolor: '#ffffff'
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          
          {/* প্রধান হেডিং সেকশন (Text align: left) */}
          <Box sx={{ mb: 4, textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Avatar sx={{ bgcolor: '#fff4e6', color: '#d35400', width: 50, height: 50 }}>
              <PhotoCameraTwoToneIcon fontSize="medium" />
            </Avatar>
            <Box>
              <Typography 
                component="h2"
                fontWeight="900" 
                sx={{ 
                  color: '#4e2c1d',
                  fontSize: { xs: '1.4rem', sm: '1.7rem' },
                  textAlign: 'left',
                  lineHeight: 1.3,
                  mb: 0.5
                }}
              >
                তাজা জিনিসের আসল ছবি
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#d35400', fontWeight: 'bold', textAlign: 'left', fontSize: { xs: '0.95rem', sm: '1.05rem' } }}>
                কীভাবে দেখবেন? (Real Photos)
              </Typography>
            </Box>
          </Box>

          {/* ভূমিকা প্যারাগ্রাফ */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              sx={{ 
                color: '#444444', 
                mb: 2, 
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.8,
                textAlign: 'left'
              }}
            >
              অনলাইনে কেনাকাটায় অনেকেই আসল জিনিস কেমন হবে, তা নিয়ে চিন্তায় থাকেন। আপনাদের সেই দুশ্চিন্তা দূর করতে আমরা ইন্টারনেট থেকে নামানো কোনো সাজানো ছবি ব্যবহার করি না। আমরা আপনাদের বাজারের একদম তাজা ও আসল জিনিসের ছবি দেখাই।
            </Typography>
            <Typography 
              sx={{ 
                color: '#444444', 
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.8,
                textAlign: 'left',
                fontWeight: '600'
              }}
            >
              আপাতত আমাদের অরিজিনাল ছবিগুলো দেখার জন্য এই সহজ উপায়গুলো রয়েছে:
            </Typography>
          </Box>

          {/* পয়েন্টগুলো Stack দিয়ে সুন্দরভাবে সাজানো হলো */}
          <Stack spacing={3.5}>
            
            {/* পয়েন্ট ১: হোয়াটসঅ্যাপ চ্যানেল */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <CampaignTwoToneIcon sx={{ color: '#d35400', mt: 0.3, fontSize: 28 }} />
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

            {/* পয়েন্ট ২: মেসেজ বা ফোন কল */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <QuestionAnswerTwoToneIcon sx={{ color: '#d35400', mt: 0.3, fontSize: 28 }} />
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

            {/* হাইলাইট বক্স: আমাদের ভবিষ্যৎ পরিকল্পনা */}
            <Box sx={{ bgcolor: '#fffcf7', p: { xs: 2.5, sm: 3 }, borderRadius: 2, border: '1px dashed #e0d4c8' }}>
              <Box sx={{ display: 'flex', mb: 1.5, alignItems: 'center', gap: 1.5 }}>
                <DevicesTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
                <Typography 
                  component="h3"
                  fontWeight="800" 
                  sx={{ 
                    color: '#4e2c1d', 
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    textAlign: 'left'
                  }}
                >
                  আমাদের ভবিষ্যৎ পরিকল্পনা:
                </Typography>
              </Box>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                বর্তমানে আপনারা শুধুমাত্র হোয়াটসঅ্যাপের মাধ্যমেই আমাদের আসল ছবিগুলো দেখতে পাচ্ছেন। তবে আপনাদের কেনাকাটা আরও সহজ করতে আমরা কাজ করে যাচ্ছি। খুব শীঘ্রই আপনারা আমাদের <strong>মোবাইল অ্যাপ এবং ওয়েবসাইটেও</strong> সরাসরি প্রতিদিনের তাজা বাজারের অরিজিনাল ছবিগুলো দেখতে পাবেন!
              </Typography>
            </Box>

          </Stack>

        </CardContent>
      </Card>
    </Box>
  );
}