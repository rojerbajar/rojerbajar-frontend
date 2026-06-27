import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

export default function GoalsAndPromisesCard() {
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
              আমাদের মূল লক্ষ্য ও প্রতিশ্রুতি:
            </Typography>
          </Box>

          {/* পয়েন্ট ১ */}
          <Box sx={{ mb: 3 }}>
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
              ১. গুণগত মানের সাথে কোনো আপস নয়:
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

          {/* পয়েন্ট ২ */}
          <Box sx={{ mb: 3 }}>
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
              ২. সঠিক ও ন্যায্য মূল্য:
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

          {/* পয়েন্ট ৩ */}
          <Box sx={{ mb: 3 }}>
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
              ৩. পরিমাণের চেয়ে সতেজতায় বেশি মনোযোগ:
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

          {/* পয়েন্ট ৪ */}
          <Box sx={{ mb: 0 }}>
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
              ৪. সঠিক সময়ে হোম ডেলিভারি:
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

        </CardContent>
      </Card>
    </Box>
  );
}