import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import Home from './Home';


const LandingPage = () => {
const [isTypingFinished,setIsTypingFinished]= useState(false);
useEffect(() => {
  const typingDuration = 9000;
  const timer = setTimeout(() => {
    setIsTypingFinished(true);
  }, typingDuration); 

  return () => clearTimeout(timer); 
}, []);
  return (
    <Box   sx={{ bgcolor:'rgb(230, 191, 243);', display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center', margin:'50',height:'100vh' , width:'100vw'}} >
    {!isTypingFinished ?(<Typography variant='h4'> 
    <Typewriter
    options={{
      strings:['Hey There...!!!','I am Nikee Patel, A Software Devloper'],
      autoStart:true,
      delay: 75,
      deleteSpeed: 50,
      onComplete: ()=>{setIsTypingFinished(true)}
    }}>

    </Typewriter>
    </Typography> ):(<Home/>)}
     
    </Box>
  )
}

export default LandingPage
