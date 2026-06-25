import {Box}  from '@mui/material';
import bannerImg from "../../assets/banner.webp"

function Home() {
  return (
   
<>
    <Box
    component="img"
    src={bannerImg} 
    alt="Banner"
    sx={{ width: '100%', height: 180 }}
  />
</>
  )
}

export default Home