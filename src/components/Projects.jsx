import React from 'react'
import { Box,Container,Typography } from '@mui/material'
import GreenCard from './GreenCard'
import project from '../images/project.webp'
import PinkCard from './PinkCard'

const Projects = () => {
  return (
    <Container maxWidth='xl'disableGutters sx={{height:'100vh', width:'100vw',display:'flex',paddingX:'0px',margin:0}}>
      <Box sx={{backgroundImage:`url(${project})`, height:'100vh',width:'30vw',backgroundPosition:'center',backgroundSize:'cover',backgroundColor:'rgb(245 208 254)'}}>

      </Box>
      <Box sx={{textAlign:'center', display:'flex',flex:1,flexDirection:'column',marginX:10}}>
<Typography variant='h4'sx={{marginTop:'30px', color:'rgb(134 25 143)',textDecoration:'underline',fontWeight:'bold'}}>Projects</Typography>
<PinkCard 
name='Lumba'
skill='react,redux,materialui,medplum,fihr'
gihub='edwnkan'



/>



      </Box>
    </Container>
  )
}

export default Projects
