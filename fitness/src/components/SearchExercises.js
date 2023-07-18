import React , {useState, useEffect} from 'react'
import { Box, Stack, Typography,Button,TextField } from '@mui/material'
import {FetchData,exercicesOptions} from '../utils/FetchData'
import HorizontalScrollBar from './HorizontalScrollBar';


const SearchExercises = (setExercices,bodyPart,setbodypart) => {
  const [search, setsearch] = useState('')
  //const [Exercices, setExercices] = useState([])
  const [bodyparts, setbodyparts] = useState([])
  useEffect(() => {
    const FetchExerciseData = async ()=>{
      const bodypartdata = await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exercicesOptions)
      setbodyparts(['all', ...bodypartdata])
    }
    FetchExerciseData();
  }, [])
  
  const handleSearch = async ()=>{
    if(search){
      const exerciseData = await FetchData ('https://exercisedb.p.rapidapi.com/exercises',
       exercicesOptions)
       console.log(exerciseData)
       const searchedData = exerciseData.filter((exercise)=>{
        exercise.name.toLowerCase().includes(search)||
        exercise.target.toLowerCase().includes(search)||
        exercise.equipment.toLowerCase().includes(search)||
        exercise.bodyPart.toLowerCase().includes(search)
       })
       //setsearch = ('')
       setExercices= (searchedData)
    }
  }
  return (
    <Stack justifyContent="center" p="20px" >
        <Typography fontWeight={700} sx={{fontSize:{lg:"44px", xs:"30px"}}}
          textAlign="center" mb="50px" >Awesome exercises you <br/> should know </Typography>
        <Box position="relative" mb="20px">
            <TextField sx={{input:{border:"none", borderRadius:"4px", fontWeight:'700'},
              width:{lg:"800px", xs:"350px"},backgroundColor:"white",borderRadius:"40px"}} 
               onChange={(e)=>setsearch(e.target.value.toLowerCase())} height="76px" value={search} placeholder="Search exercises" type="text" />
               <Button className="search-btn" sx={{fontSize:{lg:"20px", xs:"14px"},backgroundColor:"#ff2625",
                    color:"#fff",
                    textTransform:"none",width:{lg:"175px", xs:"80px"},height:"56px",
                    position:"absolute",right:"280px"}} onClick={handleSearch}>
                search
               </Button>
        </Box>
        <Box sx={{position:"relative", width:"100%",p:"20px"}}>
          <HorizontalScrollBar data={bodyparts} bodyPart={bodyPart} setbodypart={setbodypart} />
        </Box>
    </Stack>
  )
}

export default SearchExercises