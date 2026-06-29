import { Box, Modal, Button, Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import bannerImg from "../../assets/banner.webp";

// কার্ড কম্পোনেন্টগুলো
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

import { useShareCard } from "../hooks/useShareCard";

function Home() {
  const { shareCard } = useShareCard();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const { hash } = useLocation();
  useEffect(() => {
    const id = hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <Box sx={{ overflow: "hidden", boxSizing: "border-box" }}>
      <Box component="img" src={bannerImg} alt="Banner" sx={{ width: "95%" }} />

      <Modal open={open} onClose={handleClose}>
        <ModalBody handleClose={handleClose} />
      </Modal>

      <button onClick={() => shareCard("order")}>কার্ডটি শেয়ার করো</button>
      <Stack spacing={1} sx={{ px: 1 }}>
        <RojerBajarWelcomeCard id="welcome" />
        <WhyWeStartedCard id="why-started" />
        <AboutUsCard id="about" />
        <ReasonsCard id="reasons" />
        <BenefitsCard id="benefits" />
        <WhatYouWillGetCard id="what-you-will-get" />
        <JourneyStartCard id="journey-start" />
        <TrustAndResponsibilityCard id="trust" />
        <GoalsAndPromisesCard id="goals" />
        <DeliveryAreaCard id="delivery-area" />
        <OrderDeliveryTimeCard id="delivery-time" />
        <RealPhotosCard id="real-photos" />
        <UpdatedPriceListCard id="price-list" />
        <HowToOrderCard id="how-to-order" />
        <PaymentOptionsCard id="payment-options" />
        <OrderAndReturnPolicyCard id="return-policy" />
        <CustomerSupportCard id="customer-support" />
        <ContactUsCard id="contact" />
      </Stack>
    </Box>
  );
}

export default Home;

const ModalBody = ({ handleClose }) => (
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: { xs: "75%", sm: 400 },
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
    <Typography
      variant="h5"
      sx={{ fontWeight: "bold", mb: 2, color: "#fb8c00" }}
    >
      আমরা এখনো কাজ করছি
    </Typography>
    <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
      আমাদের ওয়েবসাইটটি বর্তমানে তৈরির কাজ চলছে। আমরা খুব দ্রুত আপনাদের জন্য
      সেবা নিয়ে হাজির হচ্ছি।
    </Typography>
    <Button
      variant="contained"
      onClick={handleClose}
      sx={{ borderRadius: 2, background: "#00e676", color: "#fff" }}
    >
      ঠিক আছে
    </Button>
  </Box>
);
