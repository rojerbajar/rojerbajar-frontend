import {Box}  from '@mui/material';
import bannerImg from "../../assets/banner.webp"
import RojerBajarWelcomeCard from './Cards/WelcomeCard';
import AboutUsCard from './Cards/AboutUsCard'
import WhyWeStartedCard from './Cards/WhyWeStartedCard'
import ReasonsCard from './Cards/ReasonsCard'
import BenefitsCard from './Cards/BenefitsCard'
import WhatYouWillGetCard from './Cards/WhatYouWillGetCard'
import JourneyStartCard from './Cards/JourneyStartCard'
import TrustAndResponsibilityCard from './Cards/TrustAndResponsibilityCard'
import GoalsAndPromisesCard from './Cards/GoalsAndPromisesCard'
import DeliveryAreaCard from './Cards/DeliveryAreaCard'
import OrderDeliveryTimeCard from './Cards/OrderDeliveryTimeCard'
import RealPhotosCard from './Cards/RealPhotosCard'
import UpdatedPriceListCard from './Cards/UpdatedPriceListCard'
import HowToOrderCard from './Cards/HowToOrderCard'
import PaymentOptionsCard from './Cards/PaymentOptionsCard'
import OrderAndReturnPolicyCard from './Cards/OrderAndReturnPolicyCard'
import CustomerSupportCard from './Cards/CustomerSupportCard'
import ContactUsCard from './Cards/ContactUsCard'

function Home() {
  return (
   
<Box sx={{overflow:'hidden',boxSizing:"border-box" }}>
    <Box
    component="img"
    src={bannerImg} 
    alt="Banner"
    sx={{ width: '95%' }}
  />
  <RojerBajarWelcomeCard/>
  <AboutUsCard/>
  <WhyWeStartedCard/>
  <ReasonsCard/>
  <BenefitsCard/>
  <WhatYouWillGetCard/>
  <JourneyStartCard/>
  <TrustAndResponsibilityCard/>
  <GoalsAndPromisesCard/>
  <DeliveryAreaCard/>
  <OrderDeliveryTimeCard/>
  <RealPhotosCard/>
  <UpdatedPriceListCard/>
  <HowToOrderCard/>
  <PaymentOptionsCard/>
  <OrderAndReturnPolicyCard/>
  <CustomerSupportCard/>
  <ContactUsCard/>
  
</Box>
  )
}

export default Home