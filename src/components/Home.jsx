import { Box, Typography } from '@mui/material'
import React from 'react'

import bgimage from '../images/background.jpeg'

const Home = () => {
   
  return (
    <Box sx={{backgroundImage:`url(${bgimage})`,height:'100vh',width:'100vw', backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'}}>
    
     
      <Box sx={{ textAlign: 'center',  width: '100%', height:'30%', marginTop:60 }}>
<Typography sx={{fontSize:'3rem', fontWeight:'bold'}} color='white' fontFamily='Rubik Mono One,monospace'lineHeight='3rem'  fontWeight={500}>Nikee   Patel</Typography>
  <Typography variant='h5' color='white' lineHeight='3rem' fontFamily='Satisfy'>A Software Developer</Typography>   
  <Typography variant='h5' color='white' noWrap>A Computer engineering student who has a strong interest in web development.</Typography>
  </Box>
    </Box>
  )
}

export default Home
