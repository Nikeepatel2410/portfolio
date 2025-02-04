import { Container ,Box, Grid2,Typography} from '@mui/material'
import React from 'react'
import skill from '../images/skills.webp'
import reactlogo from '../images/react.png'
import jslogo from '../images/js.png'
import reduxlogo from '../images/redux.png'



const Skills = () => {
  return (
    <Container maxWidth='xl' disableGutters sx={{height:'100vh', width:'100vw', display:'flex', marginBottom:'0px'}}>
      <Box sx={{height:'100vh' , width:'30vw' ,backgroundImage:`url(${skill})`,backgroundPosition:'center',backgroundSize:'cover', backgroundColor:'rgb(254 205 211)',padding:'0px'}}>

      </Box>
      <Box disableGutters sx={{ display:'flex',flex:1,textAlign:'center', flexDirection:'column' ,margin:0, padding:0, width:'100%'}} >
      <Typography variant='h4'sx={{marginY:'30px', color:'darkpink',textDecoration:'underline',fontWeight:'bold'}}>Skills</Typography>
  <Grid2 container justifyContent='center' spacing={10} >
<Grid2 item>
  <img src={reactlogo} height='100' ></img>
</Grid2>
<Grid2 item>
  <img src={reduxlogo} height='100' ></img>
</Grid2>
<Grid2 item>
  <img src={jslogo} height='100' ></img>
</Grid2>
  </Grid2>


      </Box>
    </Container>
  )
}

export default Skills
