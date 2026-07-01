import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar,IconButton
} from '@mui/material';

// ১০০% নিরাপদ আইকন ইমপোর্ট করা হলো
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import ExploreTwoToneIcon from '@mui/icons-material/ExploreTwoTone';
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import { useLongPress } from "../../hooks/useLongPress";
export default function DeliveryAreaCard({id,genreateLink,shareCard}) {
  const { isTriggered, ...longPressProps } = useLongPress(() => {
    shareCard(id);
    // console.log("লং প্রেস সফল হয়েছে!");
  }, 2000);
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

            <IconButton
              {...longPressProps}
              color={isTriggered ? "error" : "primary"}
              onClick={() => genreateLink({id,path:window.location.pathname})}
              aria-label="Copy delivery area link"
              sx={{ p: 0 }}
            >
              <Avatar sx={{ bgcolor: '#fff4e6', color: '#d35400', width: 50, height: 50 }}>
                <MapTwoToneIcon fontSize="medium" />
              </Avatar>
            </IconButton>
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
                আমাদের ডেলিভারি এলাকা
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#d35400', fontWeight: 'bold', textAlign: 'left', fontSize: { xs: '0.95rem', sm: '1.05rem' } }}>
                আমরা এখন কোথায় আছি?
              </Typography>
            </Box>
          </Box>

          <Stack spacing={3}>
            
            {/* প্যারাগ্রাফ ১: নিজেদের গ্রাম থেকে শুরু */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <HomeTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 28 }} />
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                যেকোনো বড় ও ভালো কাজের শুরুটা নিজের ঘর থেকেই হওয়া উচিত! তাই আমরাও আমাদের এই "রোজের বাজার"-এর পথচলা শুরু করেছি একেবারে নিজেদের ঘরের কাছে, আমাদের নিজেদের গ্রাম <strong>হাজরাপুর</strong> থেকে।
              </Typography>
            </Box>

            {/* প্যারাগ্রাফ ২: বর্তমান লোকাল এরিয়া */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <PlaceTwoToneIcon sx={{ color: '#d35400', mt: 0.5, fontSize: 28 }} />
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                আপাতত আমাদের এই তাজা বাজারের ডেলিভারি পরিষেবা শুধুমাত্র <strong>হাজরাপুর গ্রাম এবং আমাদের লোকাল এলাকার</strong> মধ্যেই সীমাবদ্ধ থাকছে।
              </Typography>
            </Box>

            {/* হাইলাইট বক্স ১: কেন শুধু নিজেদের গ্রামে? */}
            <Box sx={{ bgcolor: '#fffcf7', p: { xs: 2.5, sm: 3 }, borderRadius: 2, border: '1px dashed #e0d4c8' }}>
              <Box sx={{ display: 'flex', mb: 1.5, alignItems: 'center', gap: 1.5 }}>
                <GroupsTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
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
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                কারণ, আমরা চাই একদম শুরুর দিকে আমাদের নিজেদের কাছের মানুষদের সেরা সেবাটা দিতে। আপনাদের প্রতিদিনের সুবিধা-অসুবিধাগুলো খুব কাছ থেকে বুঝে, আমাদের সেবার মান আরও নিখুঁত করতে চাই।
              </Typography>
            </Box>

            {/* হাইলাইট বক্স ২: ভবিষ্যৎ পরিকল্পনা */}
            <Box sx={{ bgcolor: '#fffcf7', p: { xs: 2.5, sm: 3 }, borderRadius: 2, border: '1px dashed #e0d4c8' }}>
              <Box sx={{ display: 'flex', mb: 1.5, alignItems: 'center', gap: 1.5 }}>
                <ExploreTwoToneIcon sx={{ color: '#d35400', fontSize: 28 }} />
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
                শুরুটা আমাদের গ্রামে হলেও, আমাদের স্বপ্ন অনেক বড়। আপনাদের ভালোবাসা, ভরসা ও সহযোগিতা সাথে থাকলে, খুব শিগগিরই আমরা হাজরাপুরের গণ্ডি পেরিয়ে আশেপাশের অন্যান্য গ্রাম ও এলাকাতেও "রোজের বাজার"-এর পরিষেবা পৌঁছে দেব!
              </Typography>
            </Box>

          </Stack>

          {/* শেষের প্যারাগ্রাফ (ফুটার স্টাইল) */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', mt: 4, pt: 3, borderTop: '1px dashed #e0d4c8' }}>
            <VolunteerActivismTwoToneIcon sx={{ color: '#e74c3c', mt: 0.5, fontSize: 32 }} />
            <Typography 
              sx={{ 
                color: '#4e2c1d', 
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.8,
                textAlign: 'left',
                fontWeight: '700',
              }}
            >
              আপাতত, হাজরাপুরের মানুষদের প্রতিদিনের বাজার করার কষ্ট কমাতে আমরা আপনাদের ঘরের কাছেই আছি। আপনাদের সেবায় আমাদের এই নতুন পথচলায় আপনাদের আশীর্বাদ ও পাশে থাকা একান্ত কাম্য!
            </Typography>
          </Box>

        </CardContent>
      </Card>
  );
}