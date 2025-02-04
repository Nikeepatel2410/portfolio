import { Typography ,Box,Grid2, Container, Stack} from '@mui/material'
import React from 'react'
import CardComponent from './CardComponent'
import education from '../images/education.jpeg'



const Education = () => {
    
  return (
   
  <Container maxWidth="xl" disableGutters sx={{ minHeight: "100vh", display: "flex", paddingX:'0px',margin:0 }}>
  
  <Box sx={{backgroundImage:`url(${education})`,height:'100vh',width:'30vw', backgroundSize: 'cover',backgroundPosition:'center',backgroundColor:'rgb(176 208 217)',padding:'0px'}}/>





<Box  marginTop='10px' sx={{textAlign:'center',display:'flex',flex:1,flexDirection:'column',padding:'0px'}}>
     <Typography variant='h3' marginBottom='10px' marginTop='20px'sx={{textDecoration:'underline',fontWeight:'bold'}}>Education</Typography>
    <CardComponent 
          degree="Computer Engineering"
          clg="Leelaben Dasrathbhai Ramdas Patel Institute of Technology & Research, Gandhinagar"
          cgpa="CGPA: 6.87"
         
        />
         <CardComponent
          degree="Higher Secondary School"
          clg="Bright Junior Science College, Modasa"
          cgpa="Percentage: 70%"
         
        />
          <CardComponent
          degree=" Secondary HighSchool"
          clg="Shree K n Shah Modasa Highschool, Modasa"
          cgpa="Percentage: 89.33%"
         
        />
  
  </Box>



  </Container>
  )
}

export default Education
