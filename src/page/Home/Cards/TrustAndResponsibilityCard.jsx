import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

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
          boxShadow: '0 10px 30px rgba(78, 44, 29, 0.1)', 
          overflow: 'hidden'
        }}
      >
        <CardContent sx={{ p: { xs: 2.5, sm: 4 }, bgcolor: '#ffffff' }}>
          
          {/* চোখে পড়ার মতো সুন্দর প্রধান হেডিং */}
          <Box sx={{ mb: 3.5, textAlign: 'left' }}>
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
              সবার জন্য "রোজের বাজার": আপনার বিশ্বাস, আমাদের দায়িত্ব!
            </Typography>
          </Box>

          {/* ভূমিকা প্যারাগ্রাফ ১ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 2.5, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            আমাদের গ্রাম এবং আমাদের সমাজ সব ধর্মের মানুষের মিলেমিশে থাকার এক সুন্দর জায়গা। আর আমাদের <strong>"রোজের বাজার"</strong> হলো সব ধর্মের, সব পরিবারের মানুষদের জন্য। আমরা প্রতিটি ধর্মকে মন থেকে গভীর সম্মান করি।
          </Typography>

          {/* ভূমিকা প্যারাগ্রাফ ২ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 4, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            খাবারের সাথে আমাদের সবারই নিজস্ব ধর্মীয় বিশ্বাস এবং শুদ্ধতার একটা বড় সম্পর্ক থাকে। তাই আপনাদের বাজারের দায়িত্ব নেওয়ার সময় আমরা শুধু জিনিসই কিনি না, আপনাদের বাড়ির নিয়ম ও বিশ্বাসটাকেও খুব যত্ন করে মাথায় রাখি।
          </Typography>

          {/* সাব-হেডিং ১ */}
          <Box sx={{ display: 'flex', mb: 1.5, alignItems: 'center' }}>
            <Typography sx={{ mr: 1, fontSize: '1.4rem' }}>🤝</Typography>
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
              pl: { xs: 3.5, sm: 4.5 }, // লেখাগুলো একটু ভেতর থেকে শুরু করার জন্য
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
              mb: 4, 
              pl: { xs: 3.5, sm: 4.5 },
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            আপনি যদি হিন্দু ধর্মের হন, তবে আপনাদের নিয়ম, শুদ্ধতা ও পবিত্রতা মেনেই আমরা বাজার করি। আবার আপনি যদি মুসলিম ধর্মের হন, তবে আপনাদের ধর্মীয় নিয়ম-কানুন মেনেই জিনিসপত্র প্রস্তুত করা হয়।
          </Typography>

          {/* সাব-হেডিং ২ */}
          <Box sx={{ display: 'flex', mb: 1.5, alignItems: 'center' }}>
            <Typography sx={{ mr: 1, fontSize: '1.4rem' }}>🏡</Typography>
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
              pl: { xs: 3.5, sm: 4.5 },
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
              mb: 3,
              pl: { xs: 3.5, sm: 4.5 },
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            আপনারা যেকোনো ধর্মের বা যেকোনো পরিবারের মানুষ হোন না কেন, আমাদের ওপর একেবারে চোখ বন্ধ করে ভরসা করতে পারেন। আপনাদের ধর্মীয় বিশ্বাস ও শুদ্ধতা বজায় রাখার ১০০% কথা আমরা দিচ্ছি। কোনো রকম দ্বিধা বা চিন্তা ছাড়াই নিশ্চিন্ত মনে আমাদের কাছে অর্ডার করতে পারেন।
          </Typography>

          {/* শেষের প্যারাগ্রাফ */}
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
            সবাই ভালো জিনিস খাবেন, সুস্থ থাকবেন এবং সবার ধর্মীয় বিশ্বাস অটুট থাকবে—এটাই <strong>"রোজের বাজার"</strong>-এর একমাত্র চাওয়া!
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
}