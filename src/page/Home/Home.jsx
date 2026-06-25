import {Box}  from '@mui/material';
import bannerImg from "../../assets/banner.webp"
import RojerBajarWelcomeCard from './Cards/WelcomeCard';

function Home() {
  return (
   
<Box sx={{overflow:'hidden',boxSizing:"border-box",     bgcolor: '#f4ede4', }}>
    <Box
    component="img"
    src={bannerImg} 
    alt="Banner"
    sx={{ width: '100%' }}
  />
  <RojerBajarWelcomeCard/>
</Box>
  )
}

export default Home