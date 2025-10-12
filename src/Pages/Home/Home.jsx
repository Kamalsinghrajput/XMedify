import HeroUSPs from "../../Components/Sections/HeroUSPs/HeroUSPs";
import Blogs from "../../Components/Sections/Blogs/Blogs";
import { Box, Grid } from "@mui/material";
import OurFamilies from "../../Components/Sections/OurFamilies/OurFamilies";
import PatientCaring from "../../Components/Sections/PatientCaring/PatientCaring";
import Specialists from "../../Components/Sections/Specialists/Specialists";
import Specialization from "../../Components/Sections/Specialization/Specialization";
import FAQs from "../../Components/Sections/FAQs/FAQs";
import Offers from "../../Components/Sections/Offers/Offers";
import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import NavBar from "../../Components/NavBar/NavBar";
import SearchHospitalForm from "../../Components/SearchHospitalForm/SearchHospitalForm";
import {Container, Stack} from "@mui/material"
import React from 'react'

const Home = () => {
  return (
    <Box className="font-sans">{/* Tailwind test class */}
       <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
          <HeroSlider />
          <Stack
            p={{ xs: 2.5, md: 4 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            
            <SearchHospitalForm />
            <HeroUSPs />
          </Stack>
        </Container>
      </Box>
      
      <Offers />
      <Specialization />
      <Specialists />
      <PatientCaring />
      <Blogs />
      <OurFamilies />
      <FAQs />
      
    </Box>
  )
}

export default Home