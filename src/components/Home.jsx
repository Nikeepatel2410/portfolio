import { Box, IconButton ,Drawer, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import bgimage from '../images/background.jpeg'
import zIndex from '@mui/material/styles/zIndex';
const Home = () => {
    const[openDrawer,setOpenDrawer]=useState(false);
    const toggleDrawer =()=>{
        setOpenDrawer(!openDrawer)
    }
    const colseDrawer=()=>{
      setOpenDrawer(false)
    }
  return (
    <Box sx={{backgroundImage:`url(${bgimage})`,height:'100vh',width:'100vw', backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'}}>
      {!openDrawer?( <IconButton sx={{position: 'absolute',  // Position the icon absolutely
          top: 5,              
          left: 16,            
          zIndex: 5}}>
        <MenuIcon sx={{ color: 'lightgray', '&:hover': { color: 'white' } }}onClick={toggleDrawer} fontSize='large'/>
      </IconButton>):
     
     ( <IconButton sx={{position: 'absolute',  // Position the icon absolutely
          top: 5,              // Set top padding from the top
          left: 200,             // Set left padding from the left
          zIndex: 10}}>
        <CloseIcon sx={{ color: 'lightgray', '&:hover': { color: 'white' } }}onClick={colseDrawer} fontSize='large'/>
      </IconButton>)}
      <Drawer
      sx={{ bgcolor:'black',opacity:0.5,zIndex:1,padding:3}}
        anchor="left" 
        open={openDrawer}
        onClose={toggleDrawer}
       
        
      >
        <Box sx={{ width: 250 }} role="presentation">
          <List sx={{margin:4}}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Education" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Experience" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Skills" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact me" />
            </ListItem>
            
          </List>
        </Box>
      </Drawer>
      <Box sx={{ textAlign: 'center',  width: '100%', height:'30%', marginTop:60 }}>
<Typography sx={{fontSize:'3rem', fontWeight:'bold'}} color='white' fontFamily='Rubik Mono One,monospace'lineHeight='3rem'  fontWeight={500}>Nikee   Patel</Typography>
  <Typography variant='h5' color='white' lineHeight='3rem' fontFamily='Satisfy'>A Software Developer</Typography>   
  <Typography variant='h5' color='white' noWrap>A Computer engineering student who has a strong interest in web development.</Typography>
  </Box>
    </Box>
  )
}

export default Home
