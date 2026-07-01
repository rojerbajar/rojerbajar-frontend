import {Stack,Box} from '@mui/material'
import ContactUsCard from  '../Home/Cards/ContactUsCard'
import CustomerSupportCard from  '../Home/Cards/CustomerSupportCard'

function Contact() {
  return (
    <Box>
        <Stack spacing={1} sx={{ p: 1 }}>
        <ContactUsCard id="contact" />
        <CustomerSupportCard id="customer-support" />
        </Stack>
    </Box>
  )
}

export default Contact