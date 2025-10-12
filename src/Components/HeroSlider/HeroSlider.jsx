import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img from "../../assets/heroimg.png";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function HeroSlider() {
  return (
    <Box sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)", }}>    
        
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}          
          pt={2}          
        >
          
          <Box>
            <Typography variant="h3" component="h3">
              Skip the travel! Find Online
            </Typography>
            <Typography variant="h1" component="h1" fontSize={56} >
              Medical <span style={{ color: "#2AA7FF", }}>Centers</span>
            </Typography>
            <Typography color="#5C6169" fontWeight={400} fontSize={20} mb={2}>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </Typography>
            <Link to="/search">
              <Button variant="contained" size="large" disableElevation>
                Find Centers
              </Button>
            </Link>
          </Box>
          <Box component={"img"} src={img} width={{ xs: 1, md: 390}} height={380} marginLeft={0} />
        </Stack>      
    </Box>
  );
}

export default HeroSlider;