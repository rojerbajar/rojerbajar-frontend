
import {
  Card,
  CardContent,
  Typography,
  Box,
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
           
            fontWeight="900" 
            sx={{ 
              color: '#4e2c1d', 
              fontSize: { xs: '2.2rem', sm: '3.3rem' } 
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
              // color: '#d35400', 
              mb: 1.5, 
              textAlign: 'left', // একদম বাঁ-দিক থেকে
              fontSize: { xs: '1rem', sm: '1.2rem' } 
            }}
          >
            সবাইকে জানাই "রোজের বাজার"-এর পক্ষ থেকে আন্তরিক শুভেচ্ছা ও স্বাগতম! 🎉
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
}