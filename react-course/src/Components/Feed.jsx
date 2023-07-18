import React from 'react'
import { useEffect, useState } from 'react'
import {Stack, Typography, Box} from '@mui/material'
import SideBar from './SideBar.jsx'
import Videos  from "./Videos.jsx";
import {FetchFromAPI } from '../Utils/FetchFromAPI.js'

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setvideos] = useState([])
  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setvideos(data.items))
  }, [selectedCategory]) 
  
  return (
    <Stack sx={{flexDirection: {sx:"column", md:"row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0, md:2}}}>
        <SideBar  selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />
        <Typography className="copyright" variant="body2" sx={{mt:1.5, color:'#fff'}}>
          copyright  @2023 LAURA
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:"auto",height:'90vh', flex:2}}>
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{color:'white'}} >
          {selectedCategory} <span style={{color:'#FC1503'}}>
            videos
          </span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed