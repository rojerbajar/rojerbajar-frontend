import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar
} from '@mui/material';

// ১০০% নিরাপদ আইকন ইমপোর্ট করা হলো
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

export default function TrustAndResponsibilityCard() {
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
              <VerifiedUserTwoToneIcon fontSize="medium" />
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
                সবার জন্য "রোজের বাজার"
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#d35400', fontWeight: 'bold', textAlign: 'left', fontSize: { xs: '0.95rem', sm: '1.05rem' } }}>
                আপনার বিশ্বাস, আমাদের দায়িত্ব!
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
              আমাদের গ্রাম এবং আমাদের সমাজ সব ধর্মের মানুষের মিলেমিশে থাকার এক সুন্দর জায়গা। আর আমাদের <strong>"রোজের বাজার"</strong> হলো সব ধর্মের, সব পরিবারের মানুষদের জন্য। আমরা প্রতিটি ধর্মকে মন থেকে গভীর সম্মান করি।
            </Typography>
            <Typography 
              sx={{ 
                color: '#444444', 
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.8,
                textAlign: 'left'
              }}
            >
              খাবারের সাথে আমাদের সবারই নিজস্ব ধর্মীয় বিশ্বাস এবং শুদ্ধতার একটা বড় সম্পর্ক থাকে। তাই আপনাদের বাজারের দায়িত্ব নেওয়ার সময় আমরা শুধু জিনিসই কিনি না, আপনাদের বাড়ির নিয়ম ও বিশ্বাসটাকেও খুব যত্ন করে মাথায় রাখি।
            </Typography>
          </Box>

          <Stack spacing={3}>
            
            {/* বক্স ১: আপনার বিশ্বাস, আমাদের দায়িত্ব */}
            <Box sx={{ bgcolor: '#fffcf7', p: { xs: 2.5, sm: 3 }, borderRadius: 2, border: '1px dashed #e0d4c8' }}>
              <Box sx={{ display: 'flex', mb: 1.5, alignItems: 'center', gap: 1.5 }}>
                <HandshakeTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
                <Typography 
                  component="h3"
                  fontWeight="800" 
                  sx={{ 
                    color: '#4e2c1d', 
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    textAlign: 'left'
                  }}
                >
                  আপনার বিশ্বাস, আমাদের দায়িত্ব:
                </Typography>
              </Box>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  mb: 1.5, 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                আমরা প্রত্যেক গ্রাহককে আলাদাভাবে গুরুত্ব দিই। আপনি যখন আমাদের কাছে অর্ডার দেন, তখন আপনার বাড়ির নিয়ম মেনেই আমরা জিনিসপত্র বাছাই করি।
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                আপনি যদি হিন্দু ধর্মের হন, তবে আপনাদের নিয়ম, শুদ্ধতা ও পবিত্রতা মেনেই আমরা বাজার করি। আবার আপনি যদি মুসলিম ধর্মের হন, তবে আপনাদের ধর্মীয় নিয়ম-কানুন মেনেই জিনিসপত্র প্রস্তুত করা হয়।
              </Typography>
            </Box>

            {/* বক্স ২: একদম নিজের ঘরের মতো বাজার */}
            <Box sx={{ bgcolor: '#fffcf7', p: { xs: 2.5, sm: 3 }, borderRadius: 2, border: '1px dashed #e0d4c8' }}>
              <Box sx={{ display: 'flex', mb: 1.5, alignItems: 'center', gap: 1.5 }}>
                <HomeTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
                <Typography 
                  component="h3"
                  fontWeight="800" 
                  sx={{ 
                    color: '#4e2c1d', 
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    textAlign: 'left'
                  }}
                >
                  একদম নিজের ঘরের মতো বাজার:
                </Typography>
              </Box>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  mb: 1.5,
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                আপনার বাড়ির জন্য বাজার করার সময় আমরা ভাবি যে, এটা আমাদের নিজেদের বাড়িরই বাজার। তাই ধর্মীয় নিয়ম বা শুদ্ধতার ক্ষেত্রে কোনো ভুল বা ত্রুটি আমরা হতে দিই না। আপনার ঘরের পবিত্রতা বজায় রাখা আমাদের সবচেয়ে বড় দায়িত্ব।
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                আপনারা যেকোনো ধর্মের বা যেকোনো পরিবারের মানুষ হোন না কেন, আমাদের ওপর একেবারে চোখ বন্ধ করে ভরসা করতে পারেন। আপনাদের ধর্মীয় বিশ্বাস ও শুদ্ধতা বজায় রাখার ১০০% কথা আমরা দিচ্ছি। কোনো রকম দ্বিধা বা চিন্তা ছাড়াই নিশ্চিন্ত মনে আমাদের কাছে অর্ডার করতে পারেন।
              </Typography>
            </Box>

          </Stack>

          {/* শেষের প্যারাগ্রাফ */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', mt: 4, pt: 3, borderTop: '1px dashed #e0d4c8' }}>
            <FavoriteTwoToneIcon sx={{ color: '#e74c3c', mt: 0.5, fontSize: 30 }} />
            <Typography 
              sx={{ 
                color: '#4e2c1d', 
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.8,
                textAlign: 'left',
                fontWeight: '700',
              }}
            >
              সবাই ভালো জিনিস খাবেন, সুস্থ থাকবেন এবং সবার ধর্মীয় বিশ্বাস অটুট থাকবে—এটাই <strong>"রোজের বাজার"</strong>-এর একমাত্র চাওয়া!
            </Typography>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}