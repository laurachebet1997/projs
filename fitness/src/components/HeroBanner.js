import React from 'react'
import { Box, Stack, Typography,Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:"122px", xs:"70px"},ml:{sm:"50px"}}} position="relative" p="20px" >
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness club</Typography>
        <Typography fontWeight={700} sx={{fontSize:{lg:"44px", xs:"40px"}}} mg="23px" mt="30px">Sweat ,Smile <br/> and Repeat </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>Check out more </Typography>
        <Button variant="contained" color="error" href="#exercices">Explore</Button>
        <Typography color="#FF2625" fontWeight={600} 
         fontSize="200px" sx={{opacity:0.1,display:{lg:"block", xs:"none"}}}>Exercise</Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner