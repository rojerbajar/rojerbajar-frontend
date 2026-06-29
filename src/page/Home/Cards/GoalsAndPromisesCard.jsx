import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar
} from '@mui/material';

// ১০০% নিরাপদ আইকন ইমপোর্ট করা হলো
import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import LocalFloristTwoToneIcon from '@mui/icons-material/LocalFloristTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';

export default function GoalsAndPromisesCard({id}) {
  return (

      <Card id ={id}
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
              <StarsTwoToneIcon fontSize="medium" />
            </Avatar>
            <Box>
              <Typography 
                component="h2"
                fontWeight="900" 
                sx={{ 
                  color: '#4e2c1d', // গাঢ় খয়েরি রঙ
                  fontSize: { xs: '1.4rem', sm: '1.7rem' },
                  textAlign: 'left',
                  lineHeight: 1.3,
                  mb: 0.5
                }}
              >
                আমাদের মূল লক্ষ্য ও প্রতিশ্রুতি
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#d35400', fontWeight: 'bold', textAlign: 'left', fontSize: { xs: '0.95rem', sm: '1.05rem' } }}>
                আপনাদের কাছে আমাদের দেওয়া কথা
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্টগুলো Stack দিয়ে সুন্দরভাবে সাজানো হলো */}
          <Stack spacing={3.5}>
            
            {/* পয়েন্ট ১: গুণগত মান */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <VerifiedTwoToneIcon sx={{ color: '#d35400', mt: 0.3, fontSize: 28 }} />
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
                  গুণগত মানের সাথে কোনো আপস নয়:
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#444444', 
                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                    lineHeight: 1.8,
                    textAlign: 'left'
                  }}
                >
                  আমরা পণ্যের মানের বিষয়ে কোনো ছাড় দিতে রাজি নই। পণ্য একদম সতেজ (fresh) ও সেরা মানের হলেই আমরা বিক্রি করব, অন্যথায় নয়। বাজারে অনেক সাধারণ পণ্য পড়ে থাকলেও আমরা তা বিক্রি করব না—আপনাদের সেরাটা দেওয়াই আমাদের নিশ্চয়তা।
                </Typography>
              </Box>
            </Box>

            {/* পয়েন্ট ২: ন্যায্য মূল্য */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <AccountBalanceWalletTwoToneIcon sx={{ color: '#d35400', mt: 0.3, fontSize: 28 }} />
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
                  সঠিক ও ন্যায্য মূল্য:
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#444444', 
                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                    lineHeight: 1.8,
                    textAlign: 'left'
                  }}
                >
                  আমরা সবসময় বাজারের ন্যায্য দামে পণ্য বিক্রি করতে চাই। গ্রাহকদের ঠকিয়ে অতিরিক্ত লাভ করার কোনো ইচ্ছা বা উদ্দেশ্য আমাদের নেই।
                </Typography>
              </Box>
            </Box>

            {/* পয়েন্ট ৩: সতেজতায় মনোযোগ */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <LocalFloristTwoToneIcon sx={{ color: '#d35400', mt: 0.3, fontSize: 28 }} />
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
                  পরিমাণের চেয়ে সতেজতায় বেশি মনোযোগ:
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#444444', 
                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                    lineHeight: 1.8,
                    textAlign: 'left'
                  }}
                >
                  অতিরিক্ত লাভের আশায় আমরা ক্ষমতার চেয়ে বেশি অর্ডার নিতে চাই না। আমাদের যতটুকু সক্ষমতা আছে, ঠিক ততটুকুই নেব, যাতে আপনাদের সবসময় সতেজ এবং ভালো জিনিসটা দিতে পারি।
                </Typography>
              </Box>
            </Box>

            {/* পয়েন্ট ৪: সঠিক সময়ে ডেলিভারি */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <LocalShippingTwoToneIcon sx={{ color: '#d35400', mt: 0.3, fontSize: 28 }} />
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
                  সঠিক সময়ে হোম ডেলিভারি:
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#444444', 
                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                    lineHeight: 1.8,
                    textAlign: 'left'
                  }}
                >
                  আপনাদের কাছে সঠিক সময়ে পণ্য পৌঁছে দেওয়া আমাদের অন্যতম প্রধান লক্ষ্য। ডেলিভারিতে যেন কোনো দেরি না হয়, সেদিকে আমরা সবসময় খেয়াল রাখি। প্রয়োজনে আমরা কম অর্ডার নেব, তবুও আপনাদের কাছে ঠিক সময়ে ডেলিভারি দেওয়ার কথা রাখব।
                </Typography>
              </Box>
            </Box>

          </Stack>
        </CardContent>
      </Card>
  );
}