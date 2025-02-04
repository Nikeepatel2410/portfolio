import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import Home from './Home';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
const [isTypingFinished,setIsTypingFinished]= useState(false);
const navigate= useNavigate()
useEffect(() => {
  const typingDuration = 12000;
  const timer = setTimeout(() => {
    setIsTypingFinished(true);
    navigate('/home')
  }, typingDuration); 

  return () => clearTimeout(timer); 
}, []);
  return (
    <Box   sx={{ bgcolor:'rgb(213, 208, 215);', display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center', margin:'50',height:'100vh' , width:'100vw'}} >
    {!isTypingFinished ?(<Typography variant='h4'> 
    <Typewriter
    options={{
      strings:['Hey There...!!!','I am Nikee Patel, A Software Devloper',"let's dive in"],
      autoStart:true,
      delay: 75,
      deleteSpeed: 30,
      onComplete: ()=>{setIsTypingFinished(true)}
    }}>

    </Typewriter>
    </Typography> ):(<Home/>)}
     
 </Box>
  )
}

export default LandingPage
