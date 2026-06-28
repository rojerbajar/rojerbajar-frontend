import { Box } from "@mui/material";
import bannerImg from "../../assets/banner.webp";
import RojerBajarWelcomeCard from "./Cards/WelcomeCard";
import AboutUsCard from "./Cards/AboutUsCard";
import WhyWeStartedCard from "./Cards/WhyWeStartedCard";
import ReasonsCard from "./Cards/ReasonsCard";
import BenefitsCard from "./Cards/BenefitsCard";
import WhatYouWillGetCard from "./Cards/WhatYouWillGetCard";
import JourneyStartCard from "./Cards/JourneyStartCard";
import TrustAndResponsibilityCard from "./Cards/TrustAndResponsibilityCard";
import GoalsAndPromisesCard from "./Cards/GoalsAndPromisesCard";
import DeliveryAreaCard from "./Cards/DeliveryAreaCard";
import OrderDeliveryTimeCard from "./Cards/OrderDeliveryTimeCard";
import RealPhotosCard from "./Cards/RealPhotosCard";
import UpdatedPriceListCard from "./Cards/UpdatedPriceListCard";
import HowToOrderCard from "./Cards/HowToOrderCard";
import PaymentOptionsCard from "./Cards/PaymentOptionsCard";
import OrderAndReturnPolicyCard from "./Cards/OrderAndReturnPolicyCard";
import CustomerSupportCard from "./Cards/CustomerSupportCard";
import ContactUsCard from "./Cards/ContactUsCard";
import { useState } from "react";
import { Button, Modal, Typography } from "@mui/material";

import { useShareCard,useEffect } from "../hooks/useShareCard";

function Home() {
  const { shareCard } = useShareCard();

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      setTimeout(() => {
         element?.scrollIntoView({ behavior: 'smooth' });
      }, 500); // ৫০০ মিলিসেকেন্ড অপেক্ষা করবে যাতে কার্ড লোড হওয়ার সময় পায়
    }
  }, []);
  return (
    <Box sx={{ overflow: "hidden", boxSizing: "border-box" }}>
      <Box component="img" src={bannerImg} alt="Banner" sx={{ width: "95%" }} />
      <Modal open={open} onClose={handleClose}>
        <ModalBody handleClose={handleClose}/>
      </Modal>

 
      <button onClick={() => shareCard('order')}>
        কার্ডটি শেয়ার করো
      </button>
      <RojerBajarWelcomeCard />
      <AboutUsCard />
      <WhyWeStartedCard />
      <ReasonsCard />
      <BenefitsCard />
      <WhatYouWillGetCard />
      <JourneyStartCard />
      <TrustAndResponsibilityCard />
      <GoalsAndPromisesCard />
      <DeliveryAreaCard />
      <OrderDeliveryTimeCard />
      <RealPhotosCard />
      <UpdatedPriceListCard />
      <HowToOrderCard />
      <PaymentOptionsCard />
      <OrderAndReturnPolicyCard />
      <CustomerSupportCard />
      <ContactUsCard  />
    </Box>
  );
}

export default Home;

const ModalBody = ({ handleClose }) => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "75%", sm: 400 }, // মোবাইল ও ডেস্কটপের জন্য রেসপন্সিভ সাইজ
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
          outline: "none",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
        }}
      >
        {/* টাইটেল */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#fb8c00",
            textAlign: "start",
          }}
        >
          আমরা এখনো কাজ করছি
        </Typography>

        {/* মূল মেসেজ */}
        <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
          আমাদের ওয়েবসাইটটি বর্তমানে তৈরির কাজ চলছে। আমরা খুব দ্রুত আপনাদের জন্য
          সেবা নিয়ে হাজির হচ্ছি। ধৈর্য ধরে আমাদের সাথে থাকার জন্য ধন্যবাদ।
        </Typography>

        {/* ক্লোজ বাটন */}
        <Button
          variant="contained"
          onClick={handleClose}
          sx={{
            mt: 1,
            borderRadius: 2,
            background: "#00e676",
            color: "text.secondary",
          }}
        >
          ঠিক আছে
        </Button>
      </Box>
    </>
  );
};
