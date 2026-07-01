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
import useCopycustomHooks from "../hooks/useCopycustomHooks";
// import CopyandImageProvider from "./CopyandImageProvider";

function Home() {
  const { shareCard } = useShareCard();
  const location = useLocation();

  const { showSnackbar, SnackbarComponent } = useCopycustomHooks();

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const pageScrolling = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  useEffect(() => {
    if (location.state?.scrollTo) {
      pageScrolling(location.state.scrollTo);
    } else {
      const hash = window.location.hash; // যেমন: #how-to-order
      if (hash) {
        pageScrolling(hash.slice(1)); // hash থেকে # বাদ দিয়ে ID পাওয়া যাবে
      }
    }
  }, [location.state]); // প্রতিবার লোকেশন স্টেট আপডেট হলে স্ক্রল হবে

  const genreateLink = ({ id, path }) => {
    console.log("Link generated for:", id);
    showSnackbar({ id, path });
  };

  return (
    <Box sx={{ overflow: "hidden", boxSizing: "border-box" }}>
      <Box component="img" src={bannerImg} alt="Banner" sx={{ width: "95%" }} />
      <Modal open={open} onClose={handleClose}>
        <ModalBody handleClose={handleClose} />
      </Modal>

      <Stack spacing={1} sx={{ px: 1 }}>
        <RojerBajarWelcomeCard id="welcome" />
        <WhyWeStartedCard
          id="why-started"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <AboutUsCard
          id="about"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <ReasonsCard
          id="reasons"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <BenefitsCard
          id="benefits"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <WhatYouWillGetCard
          id="what-you-will-get"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <JourneyStartCard
          id="journey-start"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <TrustAndResponsibilityCard
          id="trust"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <GoalsAndPromisesCard
          id="goals"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <DeliveryAreaCard
          id="delivery-area"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <OrderDeliveryTimeCard
          id="delivery-time"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <RealPhotosCard
          id="real-photos"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <UpdatedPriceListCard
          id="price-list"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <HowToOrderCard
          id="how-to-order"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <PaymentOptionsCard
          id="payment-options"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <OrderAndReturnPolicyCard
          id="return-policy"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <CustomerSupportCard
          id="customer-support"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
        <ContactUsCard
          id="contact"
          genreateLink={genreateLink}
          shareCard={shareCard}
        />
      </Stack>
      {SnackbarComponent}
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
