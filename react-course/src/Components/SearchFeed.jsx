import { useEffect, useState } from 'react'
import { Typography, Box} from '@mui/material'
//import SideBar from './SideBar.jsx'
import Videos  from "./Videos.jsx";
import {FetchFromAPI } from '../Utils/FetchFromAPI.js'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  //const [selectedCategory, setselectedCategory] = useState('New')
  const {searchTerm} = useParams()
  const [videos, setvideos] = useState([])
  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setvideos(data.items))
  }, [searchTerm]) 
  
  return (
    <Box p={2} sx={{overflowY:"auto",height:'90vh', flex:2}}>
    <Typography variant="h4" fontWeight='bold' mb={2} sx={{color:'white'}} >
      Search results for: <span style={{color:'#FC1503'}}>
        {searchTerm}
      </span> videos
    </Typography>
    <Videos videos={videos}/>
  </Box>
  )
}

export default SearchFeed