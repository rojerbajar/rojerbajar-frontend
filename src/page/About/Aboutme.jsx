import {
    Avatar,
    Box,
    Card,
    CardContent,
    Container,
    Stack,
    Typography,
  } from "@mui/material";

  import  image from "../../assets/faruk.webp"; 
  
  const sections = [
    {
      title: "👤 ব্যক্তিগত পরিচয়",
      content:
        "নাম: ফারুক সরদার\nবয়স: ২৪\nগ্রাম: হাজরাপুর\nশিক্ষাগত যোগ্যতা: মাধ্যমিক (১০ম শ্রেণি পাশ)",
    },
    {
      title: "💍 পেশাগত অভিজ্ঞতা",
      content:
        "আমি গত ৮ বছর ধরে Goldsmith হিসেবে কাজ করছি। Necklace, Earring এবং Ring তৈরি করি। Gujarat-এর CVM Company-তে কাজ করেছি এবং এখনও এই পেশাতেই কর্মরত আছি।",
    },
    {
      title: "💻 কম্পিউটারের প্রতি ভালোবাসা",
      content:
        "ছোটবেলা থেকেই কম্পিউটার ছিল আমার সবচেয়ে প্রিয় জিনিস। সবসময় মনে হতো, জীবনে যদি কিছু করতে হয় তাহলে কম্পিউটার দিয়েই করতে চাই।",
    },
    {
      title: "🔍 Programming-এর সাথে পরিচয়",
      content:
        "HTML, CSS দিয়ে শুরু করি। এরপর JavaScript শিখি এবং Website তৈরি করতে শুরু করি। তখনই বুঝতে পারি Programming-ই আমার ভালোবাসা।",
    },
    {
      title: "⚙️ Full Stack Development",
      content:
        "Python, Django শিখে Backend Development শুরু করি। এরপর Full Stack Website তৈরি করি।",
    },
    {
      title: "⚛️ React Journey",
      content:
        "React শেখার পর SPA সম্পর্কে জানি। নিজের Project তৈরি করি এবং React নিয়ে কাজ শুরু করি।",
    },
    {
      title: "📱 Mobile App Development",
      content:
        "React Native শিখে নিজের জন্য Mobile App তৈরি করি এবং Install করে ব্যবহার করি।",
    },
    {
      title: "🖥️ Desktop Development",
      content:
        "Electron শিখে Desktop Application তৈরির চেষ্টা করি।",
    },
    {
      title: "📚 বর্তমানে যা শিখছি",
      content:
        "Node.js, Java, DSA এবং Software Architecture নিয়ে নিয়মিত পড়াশোনা করছি।",
    },
    {
      title: "🚀 আমার Project",
      content:
        "আমি www.rojerbajar.com শুরু করেছি। আমার লক্ষ্য Programming-এর মাধ্যমে মানুষের বাস্তব সমস্যার সমাধান করা।",
    },
    {
      title: "❤️ আমি নিজেকে কী বলি",
      content:
        "আমি নিজেকে Software Developer বলতে চাই না। আমি নিজেকে Programming Lover বলতে বেশি স্বাচ্ছন্দ্যবোধ করি। Programming আমার কাছে শুধুমাত্র একটি পেশা নয়, এটি আমার ভালোবাসা।",
    },
    {
        title: "🎯 আমার লক্ষ্য",
        content:
          "আমি ভবিষ্যতে একজন দক্ষ Software Developer হতে চাই। প্রতিদিন নতুন কিছু শেখা এবং মানুষের জন্য Software তৈরি করাই আমার স্বপ্ন।",
      },
  ];
  
  export default function About() {
    return (
      <Box
        sx={{
          py: 3,
          background: "#f7f8fc",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="sm">
          <Stack
            spacing={1}
            alignItems="center"
            sx={{ mb: 4 }}
            
          >
           <Box  sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            

           <Avatar
              src={image}
              sx={{
                width: {
                  xs: 150,
                  sm: 180,
                },
                height: {
                  xs: 150,
                  sm: 180,
                },
                border: "6px solid white",
                boxShadow: "0 15px 40px rgba(0,0,0,.2)",
              }}
            />
             </Box>
  
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              sx={{margin:0 ,padding:0}}
            >
              Faruk Sardar
            </Typography>
  
            <Typography
              color="primary"
              fontSize={22}
              fontWeight={600}
              sx={{margin:0 ,padding:0}}
            >
              Programming Lover ❤️
            </Typography>
          </Stack>
  
          <Stack spacing={2}>
            {sections.map((item, index) => (
              <Card
                key={index}
                sx={{
                  borderRadius: 5,
                  boxShadow:
                    "0 12px 35px rgba(0,0,0,.08)",
                  transition: ".35s",
  
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow:
                      "0 25px 50px rgba(0,0,0,.15)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: {
                      xs: 3,
                      sm: 5,
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{mb:2}}
                  >
                    {item.title}
                  </Typography>
  
                  <Typography
                    sx={{
                      whiteSpace: "pre-line",
                      lineHeight: 2,
                      color: "#555",
                      fontSize: {
                        xs: 16,
                        sm: 18,
                      },
                      textAlign: "justify",
                    }}
                  >
                    {item.content}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>
    );
  }