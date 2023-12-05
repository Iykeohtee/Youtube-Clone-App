import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { SearchBar, Videos } from './'
import { fetchFromAPI } from './utilities/FetchFromAPI' 
import { useParams } from 'react-router-dom'


const SearchFeed = () => { 
 
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams();  

useEffect(() => { 
   fetchFromAPI(`search?part=snippet&q=${searchTerm}`)     
   .then((res) => setVideos(res.items)) 
  }, [searchTerm]);     

  return (

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: '2'}}> 
      <Typography variant='h4' fontWeight= 'bold' mb={2} 
      sx={{ color: 'white'}}    
      >
       Search results for: <span style={{ color: '#f31503'}}>{searchTerm}</span> Videos   
      </Typography> 

      <Videos videos = {videos}/>   
     </Box>

  )
}

export default SearchFeed;
