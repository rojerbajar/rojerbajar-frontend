import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

export default function DeliveryAreaCard() {
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
              আমাদের ডেলিভারি এলাকা: আমরা কোথায় আছি?
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
            যেকোনো বড় ও ভালো কাজের শুরুটা নিজের ঘর থেকেই হওয়া উচিত! তাই আমরাও আমাদের এই "রোজের বাজার"-এর পথচলা শুরু করেছি একেবারে নিজেদের ঘরের কাছে, আমাদের নিজেদের গ্রাম <strong>হাজরাপুর</strong> থেকে।
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
            আপাতত আমাদের এই তাজা বাজারের ডেলিভারি পরিষেবা শুধুমাত্র <strong>হাজরাপুর গ্রাম এবং আমাদের লোকাল এলাকার</strong> মধ্যেই সীমাবদ্ধ থাকছে।
          </Typography>

          {/* সাব-হেডিং ১: কেন শুধু নিজেদের গ্রামে শুরু করলাম? */}
          <Box sx={{ mb: 1.5 }}>
            <Typography 
              component="h3"
              fontWeight="800" 
              sx={{ 
                color: '#4e2c1d', 
                fontSize: { xs: '1.1rem', sm: '1.25rem' }, 
                textAlign: 'left' 
              }}
            >
              কেন শুধু নিজেদের গ্রামে শুরু করলাম?
            </Typography>
          </Box>
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 4, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            কারণ, আমরা চাই একদম শুরুর দিকে আমাদের নিজেদের কাছের মানুষদের সেরা সেবাটা দিতে। আপনাদের প্রতিদিনের সুবিধা-অসুবিধাগুলো খুব কাছ থেকে বুঝে, আমাদের সেবার মান আরও নিখুঁত করতে চাই।
          </Typography>

          {/* সাব-হেডিং ২: আমাদের ভবিষ্যৎ পরিকল্পনা */}
          <Box sx={{ mb: 1.5 }}>
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
              mb: 3, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            শুরুটা আমাদের গ্রামে হলেও, আমাদের স্বপ্ন অনেক বড়। আপনাদের ভালোবাসা, ভরসা ও সহযোগিতা সাথে থাকলে, খুব শিগগিরই আমরা হাজরাপুরের গণ্ডি পেরিয়ে আশেপাশের অন্যান্য গ্রাম ও এলাকাতেও "রোজের বাজার"-এর পরিষেবা পৌঁছে দেব!
          </Typography>

          {/* শেষের প্যারাগ্রাফ (ফুটার স্টাইল) */}
          <Typography 
            sx={{ 
              color: '#4e2c1d', 
              mt: 4, 
              mb: 0, 
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.8,
              textAlign: 'start',
              fontWeight: '700',
              borderTop: '1px dashed #e0d4c8',
              pt: 2.5
            }}
          >
            আপাতত, হাজরাপুরের মানুষদের প্রতিদিনের বাজার করার কষ্ট কমাতে আমরা আপনাদের ঘরের কাছেই আছি। আপনাদের সেবায় আমাদের এই নতুন পথচলায় আপনাদের আশীর্বাদ ও পাশে থাকা একান্ত কাম্য!
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
}