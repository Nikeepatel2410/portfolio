

import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton ,Drawer, List, ListItem, ListItemText ,Toolbar, AppBar, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
const Layout = ({children}) => {
    const[openDrawer,setOpenDrawer]=useState(false);
    const location= useLocation();
    const toggleDrawer =()=>{
        setOpenDrawer(!openDrawer)
    } 
    const closeDrawer=()=>{
      setOpenDrawer(false)
    }
    
    useEffect(()=>{
setOpenDrawer(false)
    },[location])
  return (

    <> 
      
    
     {!openDrawer?( <IconButton sx={{position: 'absolute',  // Position the icon absolutely
        top: 5,              
        left: 16,            
        zIndex: 5}}>
      <MenuIcon sx={{ color: 'white', backgroundColor:'rgb(100 116 139)',height:'2.25rem',width:'3rem',borderRadius:'0.5rem','&:hover': { color: 'white' } }}onClick={toggleDrawer} fontSize='large'/>
    </IconButton>):
   
   ( <IconButton sx={{position: 'absolute',  // Position the icon absolutely
        top: 5,              // Set top padding from the top
        left: 16,             // Set left padding from the left
        zIndex: 10}}>
      <CloseIcon sx={{ color: 'white', backgroundColor:'rgb(100 116 139)',borderRadius:'0.5rem',height:'2rem',width:'2.25rem','&:hover': { color: 'white' } }}onClick={closeDrawer} fontSize='large'/>
    </IconButton>)}
       <Drawer
      sx={{ opacity:0.5,zIndex:1,padding:3,marginTop:'60px',position:'absolute'}}
        anchor="left" 
        open={openDrawer}
        onClose={toggleDrawer}
       color='black'
        
      >
        <Box sx={{ width: 250}} role="presentation">
          <List sx={{margin:4}}>
            <ListItem button component={Link} to='/home' onClick={closeDrawer}>
            <ListItemText
  primary="Home"
  sx={{
    color: 'black', 
    
  }}
/>
            </ListItem>
            <ListItem button component={Link} to='/education' onClick={closeDrawer}>
              <ListItemText primary="Education"  sx={{
    color: 'black', 
    
  }}/>
            </ListItem>
            <ListItem button component={Link} to='/projects' onClick={closeDrawer}>
              <ListItemText primary="Projects" sx={{
    color: 'black', 
    
  }} />
            </ListItem>
            <ListItem button component={Link} to='/experience' onClick={closeDrawer}>
              <ListItemText primary="Experience" sx={{
    color: 'black', 
    
  }} />
            </ListItem>
            <ListItem button component={Link} to='/skills' onClick={closeDrawer}>
              <ListItemText primary="Skills" sx={{
    color: 'black', 
    
  }} />
            </ListItem>
            <ListItem button component={Link} to='/contact' onClick={closeDrawer}>
              <ListItemText primary="Contact me"  sx={{
    color: 'black', 
    
  }}/>
            </ListItem>
            
          </List>
        </Box>
      </Drawer>
      <Box sx={{  marginLeft: openDrawer ? '250px' : '0' }}>
                {children}
            </Box>
 </>
  )
}

export default Layout
