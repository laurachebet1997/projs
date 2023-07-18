import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
//import { ChannelDetail, VideoDetail, SearchFeed, NavBar } from './Components'
import Feed from './Components/Feed'
import SearchFeed from './Components/SearchFeed'
import VideoDetail from './Components/VideoDetail'
import ChannelDetail from './Components/ChannelDetail'
import NavBar from './Components/NavBar'
//import SearchBar from './Components/SearchBar'
//import { SideBar } from "./Components/SideBar";


function App() {
  return (
    <Box sx={{backgroundColor:'#000', height:'100%'}}>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/videos/:id" element={<VideoDetail/>} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed/>} /> 
      </Routes>
    </Box>
  );
}

export default App;
