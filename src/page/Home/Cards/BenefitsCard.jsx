import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

export default function BenefitsCard() {
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
          
          {/* চোখে পড়ার মতো সুন্দর হেডিং */}
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
                  backgroundColor: '#d35400', // নিচে একটি কমলা রঙের সুন্দর দাগ
                  mt: 1.5,
                  borderRadius: '2px'
                }
              }}
            >
              কেন "রোজের বাজার" থেকে কিনবেন? সাধারণ বাজারের চেয়ে এতে আপনার লাভ কী?
            </Typography>
          </Box>

          {/* পয়েন্ট ১ */}
          <Box sx={{ display: 'flex', mb: 2.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.3rem' }}>⏳</Typography>
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

          {/* পয়েন্ট ২ */}
          <Box sx={{ display: 'flex', mb: 2.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.3rem' }}>🥵</Typography>
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

          {/* পয়েন্ট ৩ */}
          <Box sx={{ display: 'flex', mb: 2.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.3rem' }}>🛍️</Typography>
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

          {/* পয়েন্ট ৪ */}
          <Box sx={{ display: 'flex', mb: 0 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.3rem' }}>💵</Typography>
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

        </CardContent>
      </Card>
    </Box>
  );
}