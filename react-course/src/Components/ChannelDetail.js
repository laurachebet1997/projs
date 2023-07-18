import {useEffect, useState} from 'react'
import { Box } from "@mui/material";
import {  useParams } from "react-router-dom";
//import VideoCard from './VideoCard.jsx'
import ChannelCard from './ChannelCard.jsx'
import { FetchFromAPI } from "../Utils/FetchFromAPI";
import Videos  from "./Videos.jsx";

const ChannelDetail = () => {
  const {id}= useParams()
  const [channelDetail, setchannelDetail] = useState()
  const [videos, setvideos] = useState([])
  useEffect(() => {
    //FetchFromAPI(`channels?part=snippet&id=${id}`)
    //.then((data)=>setchannelDetail(data.items[0]))
    //FetchFromAPI(`search?channelId=${id}part=snippet&order=date`)
    //.then((data)=>setvideos(data.items))
    const fetchResults = async () => {
      const data = await FetchFromAPI(`channels?part=snippet&id=${id}`);

      setchannelDetail(data?.items[0]);

      const videosData = await FetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setvideos(videosData?.items);
    };
    fetchResults();
  }, [id])  
  return (    
    <Box minHeight="95vh">
          <Box> <div style={{background: '#090979'
            ,zIndex:10 ,height:'300px'}} />
              <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
          </Box>
          <Box sx={{display:"flex", p:"2"}}>
             <Box sx={{mr:{sm:'100px'}}} />
              <Videos videos={videos} />
          </Box>
    </Box>
  )
}

export default ChannelDetail