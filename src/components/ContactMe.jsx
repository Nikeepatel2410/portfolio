import React from 'react'
import { Box,Container,TextField,Typography } from '@mui/material'

import contact from '../images/mail.webp'


const ContactMe = () => {
  return (
    <Container maxWidth='xl'disableGutters sx={{height:'100vh', width:'100vw',display:'flex',paddingX:'0px',margin:0}}>
      <Box sx={{backgroundImage:`url(${contact})`, height:'100vh',width:'30vw',backgroundPosition:'center',backgroundSize:'cover',backgroundColor:'rgb(255 237 213 )'}}>

      </Box>
      <Box sx={{textAlign:'center', display:'flex',flex:1,flexDirection:'column',marginX:10}}>
<Typography variant='h4'sx={{margin:'30px', color:'rgb(217 119 6)',textDecoration:'underline',fontWeight:'bold'}}>Reach Me Out</Typography>
<Box backgroundColor='rgb(255 237 213/0.5 )' marginX={15} paddingBottom={5} borderRadius={3} boxShadow={5}>
<TextField sx={{margin:2, width:'80%'}} label="Name"
          name="name"
          variant="standard"  />
          <TextField sx={{margin:2, width:'80%'}} label="Email"
          name="email"
          variant="standard"  />
          <TextField sx={{margin:2, width:'80%'}} label="Number"
          name="number"
          variant="standard"  />
          <TextField sx={{margin:2, width:'80%'}}  label="Msg"
          name="msg"
          variant="standard"  />

</Box>
      </Box>
    </Container>
  )
}

export default ContactMe
