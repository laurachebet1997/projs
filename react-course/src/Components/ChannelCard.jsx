import { Typography, CardContent, CardMedia ,Box} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {demoProfilePicture} from '../Utils/constants.js'
import { Link } from 'react-router-dom'

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box sx={{boxShadow:"none", borderRadius:'20px',display:'flex',justifyContent:'center',
              alignItems:'center',width:{xs:'356px', md:'320px'},height:'326px',margin:"auto",marginTop:marginTop}}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{flexDirection:'column',display:'flex',justifyContent:"center",color:"#FFF",textAlign:'center'}}>
          <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{width:'180px', height:'180px', borderRadius:'50%',mb:2,border:'1px solid #e3e3e3'}}/>
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize:14,color:"gray" ,ml:'5px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount &&(
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
          )}
          </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard