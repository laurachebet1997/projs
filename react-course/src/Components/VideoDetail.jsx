import {useEffect, useState} from 'react'
import { Box ,Typography, Stack} from "@mui/material";
import {  useParams, Link } from "react-router-dom";
import ReactPlayer  from "react-player";
import  Videos from "./Videos.jsx";
import Loader from './Loader.jsx'
import {FetchFromAPI} from '../Utils/FetchFromAPI.js'
//import CheckCircle from '@mui/icons-material/checkcircle'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const VideoDetail = () => {
  const [videos, setvideos] = useState(null)
  const [videoDetail, setvideoDetail] = useState(null)
  const {id}=useParams()

  useEffect(() => {
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setvideoDetail(data.items[0]))
    FetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setvideos(data.items))
  }, [id])

  if(!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box p={2} sx={{overflowY:"auto",height:'90vh', flex:2}}>
      <Stack direction={{xs:"column",md:"row"}}>
        <Box flex={1}>
          <Box sx={{width:"100%",position:"sticky",top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>{title}</Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>       
        </Box><Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>

      </Stack>
    </Box>
  )
}

export default VideoDetail
