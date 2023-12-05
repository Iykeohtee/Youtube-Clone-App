import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  const [ searchTerm, setSearhTerm ] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if(searchTerm){
      navigate(`/search/${searchTerm}`) 

      setSearhTerm('');   
    }
  }

  return (
    <div>
      <Paper
       component='form' onSubmit={handleSubmit} 
       sx={{ borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5 }}} 
      >

      <input className='search-box' placeholder='Search...' 
       value={searchTerm}
       onChange={(e) => setSearhTerm(e.target.value)} 
       style={{border: 'none', outline: 'none'}}/>  
      
      
      <IconButton type='Submit' sx={{p: '10px', color: 'red'}}>
      <Search/>
      </IconButton>       
      </Paper>
    </div>
  )
}

export default SearchBar
