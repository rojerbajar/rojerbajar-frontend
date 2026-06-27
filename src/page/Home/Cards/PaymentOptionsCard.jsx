import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

export default function PaymentOptionsCard() {
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
              ৩. মূল্য পরিশোধের নিয়ম (Payment Options)
            </Typography>
          </Box>

          {/* ভূমিকা প্যারাগ্রাফ */}
          <Typography 
            sx={{ 
              color: '#444444', 
              mb: 3.5, 
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
              textAlign: 'left'
            }}
          >
            বাজারের সেরা জিনিসটি আপনার হাতে তুলে দেওয়ার পর দাম মেটানোর পদ্ধতিটাও আমরা একদম সহজ রেখেছি। আপনারা নিজেদের সুবিধামতো দুটি উপায়ে পেমেন্ট করতে পারেন:
          </Typography>

          {/* পয়েন্ট ১: ক্যাশ অন ডেলিভারি */}
          <Box sx={{ display: 'flex', mb: 3.5 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>💵</Typography>
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
                ক্যাশ অন ডেলিভারি (Cash on Delivery):
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                জিনিস হাতে পাবেন, নিজের চোখে তাজা বাজার যাচাই করবেন, তারপর টাকা দেবেন। হাতে নগদ টাকা দিয়ে পেমেন্ট করার এই সহজ সুযোগটি সবার জন্যই থাকছে।
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্ট ২: অনলাইন পেমেন্ট */}
          <Box sx={{ display: 'flex', mb: 4 }}>
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>📱</Typography>
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
                অনলাইন পেমেন্ট (Online Payment):
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                হাতে ক্যাশ নেই বা ভাংতি টাকার সমস্যা? কোনো চিন্তা নেই! আপনারা খুব সহজেই Google Pay, PhonePe, Paytm বা যেকোনো UPI-এর মাধ্যমে ডেলিভারির সময় অনলাইনে পেমেন্ট করে দিতে পারেন।
              </Typography>
            </Box>
          </Box>

          {/* পয়েন্ট ৩: বিনীত অনুরোধ (বাকি বা ধারের কথা) */}
          <Box 
            sx={{ 
              display: 'flex', 
              bgcolor: '#fff9f5', // একটু আলাদা দেখানোর জন্য হালকা ব্যাকগ্রাউন্ড
              p: 2, 
              borderRadius: 2,
              border: '1px dashed #e0d4c8'
            }}
          >
            <Typography sx={{ mr: 1.5, fontSize: '1.4rem', mt: -0.5 }}>🚫</Typography>
            <Box>
              <Typography 
                component="h3"
                fontWeight="800" 
                sx={{ 
                  color: '#d35400', // এটি গুরুত্বপূর্ণ তাই কমলা রঙ দিলাম
                  fontSize: { xs: '1.05rem', sm: '1.15rem' }, 
                  mb: 1, 
                  textAlign: 'left' 
                }}
              >
                একটি বিনীত অনুরোধ (বাকি বা ধারের কোনো ব্যবস্থা নেই):
              </Typography>
              <Typography 
                sx={{ 
                  color: '#444444', 
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                আমাদের লক্ষ্য হলো সবসময় একদম সতেজ জিনিস সঠিক ও ন্যায্য দামে আপনাদের কাছে পৌঁছে দেওয়া। এই ভালো মানটি সবসময় ধরে রাখার জন্যই আমাদের এখানে <strong>বাকি বা ধারের কোনো ব্যবস্থা নেই</strong>। আমরা বিশ্বাস করি— <em>"হিসেব পরিষ্কার থাকলে, সম্পর্কও সুন্দর থাকে এবং বিশ্বাস বাড়ে।"</em> তাই বাজার বুঝে নেওয়ার সময় সাথে সাথেই ক্যাশ বা অনলাইনে পেমেন্ট করে দেওয়ার জন্য আপনাদের কাছে বিনীত অনুরোধ জানাচ্ছি। আপনাদের এই ছোট সহযোগিতাই আমাদের আরও ভালো সেবা দিতে সাহায্য করবে।
              </Typography>
            </Box>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}