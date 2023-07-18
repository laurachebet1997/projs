import React, { useState } from 'react'
import { Box} from '@mui/material'
import  Exercices  from "../components/Exercices";
import  HeroBanner  from "../components/HeroBanner";
import  SearchExercises  from "../components/SearchExercises";
//import BodyPart from '../components/BodyPart'



const Home = () => {
  const [bodyPart, setbodypart] = useState('all');
  const [exercices, setExercices] = useState([])
  //console.log(setbodypart)
  return (
    <Box>
      <HeroBanner />
      <SearchExercises bodyPart={bodyPart} setbodypart={setbodypart} setExercices={setExercices}/>
      <Exercices bodyPart={bodyPart} setExercices={setExercices} exercices={exercices} />
    </Box>
  )
}

export default Home