
import {
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
} from '@mui/material';

export default function RojerBajarWelcomeCard() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        // minHeight: '100vh', 
        py:1,
        px: { xs: 1 } ,
        
    
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
        {/* Header Section (শুধুমাত্র ব্র্যান্ডের নামটা মাঝখানে থাকবে) */}
        <Box 
          sx={{ 
            bgcolor: '#fffcf7', 
            p: { xs: 1.5 }, 
            textAlign: 'center', 
            borderBottom: '2px dashed #e0d4c8' 
          }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            fontWeight="900" 
            sx={{ 
              color: '#4e2c1d', 
              fontSize: { xs: '2.2rem', sm: '3.5rem' } 
            }}
          >
            রোজের বাজার
          </Typography>
        </Box>

        <CardContent sx={{ p: { xs: 2, sm: 4 }, bgcolor: '#ffffff' }}>
          
          {/* Welcome Text (বাঁ-দিক থেকে শুরু) */}
          <Typography 
            variant="h6" 
            fontWeight="700" 
            sx={{ 
              color: '#d35400', 
              mb: 1.5, 
              textAlign: 'left', // একদম বাঁ-দিক থেকে
              fontSize: { xs: '1rem', sm: '1.2rem' } 
            }}
          >
            সবাইকে জানাই "রোজের বাজার"-এর পক্ষ থেকে আন্তরিক শুভেচ্ছা ও স্বাগতম! 🎉
          </Typography>

          {/* Paragraph 1 (বাঁ-দিক থেকে শুরু) */}
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#5d4037', 
              fontSize: { xs: '0.95rem', sm: '1.15rem' }, 
              lineHeight: 1.6, 
              textAlign: 'left', // একদম বাঁ-দিক থেকে
              mb: { xs: 2.5, sm: 3 } 
            }}
          >
            প্রতিদিন সকালে ভিড় ঠেলে, দরাদরি করে বাজার করার দিন এবার শেষ। আপনাদের রোজকার বাজারের ঝামেলা কমাতে আমরা শুরু করেছি <strong>"রোজের বাজার"</strong>।
          </Typography>

          {/* Paragraph 2 (Highlighted Box - বাঁ-দিক থেকে শুরু) */}
          <Paper 
            elevation={0}
            sx={{ 
              bgcolor: '#f1f8e9', 
              p: { xs: 2, sm: 3 }, 
              borderRadius: 3, 
               
              borderLeft: '4px solid #438234' 
            }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '0.9rem', sm: '1.1rem' }, 
                lineHeight: 1.6, 
                color: '#2e6022',
                textAlign: 'left' // একদম বাঁ-দিক থেকে
              }}
            >
              এখন থেকে রান্নার সমস্ত বাজার— যেমন টাটকা মাছ, তাজা সবজি, মাংস থেকে শুরু করে প্রয়োজনীয় মশলাপাতি, সবকিছুই পাবেন <strong>একদম বাজারের দামেই!</strong> বাছাই করা একদম ফ্রেশ জিনিসপত্র হোম ডেলিভারির মাধ্যমে খুব সহজেই পৌঁছে যাবে আপনার বাড়ির দরজায়।
            </Typography>
          </Paper>

        </CardContent>
      </Card>
    </Box>
  );
}