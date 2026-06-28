import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar
} from '@mui/material';

// প্রতিটি পয়েন্টের জন্য মানানসই আইকন ইমপোর্ট করা হলো
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import UmbrellaTwoToneIcon from '@mui/icons-material/UmbrellaTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import PriceCheckTwoToneIcon from '@mui/icons-material/PriceCheckTwoTone';

export default function BenefitsCard() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
  
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
          
          {/* হেডিং সেকশন (Text align: left) */}
          <Box sx={{ mb: 4, textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Avatar sx={{ bgcolor: '#fff4e6', color: '#d35400', width: 50, height: 50 }}>
              <AutoAwesomeTwoToneIcon fontSize="medium" />
            </Avatar>
            <Box>
              <Typography 
                component="h2"
                fontWeight="900" 
                sx={{ 
                  color: '#4e2c1d', // গাঢ় খয়েরি রঙ
                  fontSize: { xs: '1.4rem', sm: '1.8rem' },
                  textAlign: 'left',
                  lineHeight: 1.3,
                  mb: 0.5
                }}
              >
                কেন "রোজের বাজার" থেকে কিনবেন?
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#d35400', fontWeight: 'bold', textAlign: 'left', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                সাধারণ বাজারের চেয়ে এতে আপনার লাভ কী?
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্টগুলো Stack দিয়ে সাজানো হলো */}
          <Stack spacing={3}>
            
            {/* পয়েন্ট ১: সময়ের সাশ্রয় */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <AccessTimeTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 28 }} />
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                <strong>সময়ের সাশ্রয়:</strong> বাজারে যাওয়ার জন্য আর আলাদা করে সময় নষ্ট করতে হবে না। বাড়িতে বা অফিসে বসে, হাতের স্মার্টফোনেই কয়েক মিনিটে পুরো বাজার করা হয়ে যাবে। বেঁচে যাওয়া সময়টা আপনি পরিবারকে দিন।
              </Typography>
            </Box>

            {/* পয়েন্ট ২: ভিড় ও ঝক্কি থেকে মুক্তি */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <UmbrellaTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 28 }} />
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                <strong>ভিড় ও ঝক্কি থেকে মুক্তি:</strong> রোদে পুড়ে, বৃষ্টিতে ভিজে বা বাজারের অতিরিক্ত ভিড় ঠেলে আর কেনাকাটা করতে হবে না।
              </Typography>
            </Box>

            {/* পয়েন্ট ৩: ভারী ব্যাগ বওয়ার কষ্ট নেই */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <LocalMallTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 28 }} />
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                <strong>ভারী ব্যাগ বওয়ার কষ্ট নেই:</strong> চাল, ডাল বা আলুর ভারী থলে আর হাতে করে বয়ে আনার দিন শেষ! আপনার দরকারি সব জিনিস আমরাই সযত্নে আপনার বাড়ির দরজায় পৌঁছে দেব।
              </Typography>
            </Box>

            {/* পয়েন্ট ৪: দরদাম করার দরকার নেই */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <PriceCheckTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 28 }} />
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                <strong>দরদাম করার দরকার নেই:</strong> বাজারে গিয়ে দাম নিয়ে আর কোনো তর্ক করতে হবে না। আমাদের এখানে আপনারা পাবেন একদম সঠিক ও ন্যায্য দাম।
              </Typography>
            </Box>

          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}