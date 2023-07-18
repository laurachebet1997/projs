import React from 'react'
import {Stack} from '@mui/material'
import {Link, link} from 'react-router-dom'

import { logo } from '../Utils/constants'
import SearchBar from './SearchBar'


const NavBar = () => {
  return (
    <Stack direction="row" 
    sx={{position: 'sticky', backgoundColor: '#000', top:0, justifyContent:'space-between'}}
    alignItems="center"
    p={2}>
      <Link to="/" style={{alignItems:"center", display:'flex'}}>
        <img src={logo} alt='logo' height={45}/>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default NavBar