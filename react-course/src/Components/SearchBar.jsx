import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState('')
  const handlesubmit=(e)=>{
    e.preventDefault()
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setsearchTerm('')
    }
}
  return (
    <Paper onSubmit={handlesubmit}
    component="form"
    sx={{ borderRadius: 20,border:'1px solid #e3e3e3' ,pl:2,boxShadow:'none',mr:{sm:5}}}>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)} className="search-bar" />
        <IconButton type="submit" sx={{p:'10px',color:'red'}}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar