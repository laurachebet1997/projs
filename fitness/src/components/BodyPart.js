import React, {useState} from 'react'
import icon from '../assets/icons/gym.png'
import { Stack, Typography } from "@mui/material";

const BodyPart = ({item,bodyPart,setbodypart}) => {
  //console.log(bodyPart)
  //console.log(setbodypart)
  return (
    <Stack type="button" className="bodyPart-card" alignItems="center" justifyContent="center"
      sx={bodyPart===item ? {
        backgroundColor:"white",
        width:"270px",
        height:"280px",
        gap:"47px",
        cursor:"pointer",
        borderTop:"4 solid #ff2625",
        borderbottomleftradius:"20px"
    }:{
        backgroundColor:"white",
        width:"270px",
        height:"280px",
        gap:"47px",
        cursor:"pointer",
        borderTop:"4 solid #ff2625",
        borderbottomleftradius:"20px"
    }} onClick={()=>{setbodypart(item)
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })}}
      >
        <img src={icon} alt="dumbbell" width="40px" height="40px"/>
        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" 
          color="#3A1212" textTransform="capitalize"> {item}</Typography>
    </Stack>
  )
}

export default BodyPart