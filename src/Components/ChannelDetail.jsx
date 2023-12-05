import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, channelDetail, SearchFeed, ChannelCard } from './'
import { fetchFromAPI } from './utilities/FetchFromAPI'

const Channel = () => {
   const { id } = useParams();
   const [ channelDetail, setChannelDetail ] = useState(null);
   const [ videos, setVideos ] = useState([]) 

   useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`) 
    .then(data => setChannelDetail(data?.items[0]))
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`) 
    .then(data => setVideos(data?.items)) 
   }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div 
        style={{ background: 'linear-gradient(90deg, rgba(14,0,255,1) 0%, rgba(215,1,211,1) 35%, rgba(235,2,222,1) 100%)',
        zIndex: 10,
        height: '300px' 
      }}
        />
      <ChannelCard channelDetail={channelDetail}
      marginTop="-110px" 
      />
      </Box>

      <Box display="flex" p="2">
       <Box sx={{ mr: { sm: "100px" } }} /> 
        <Videos videos={videos}/>

      </Box>
      
    </Box>
  )
}

export default Channel
