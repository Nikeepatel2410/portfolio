import React from 'react'
import { Card, CardContent,Typography } from '@mui/material'
const GreenCard = ({position,company,skill}) => {
  return (
    <Card variant="outlined" sx={{margin:2,border:'#e5e7eb',bgcolor:'#ecfcc840', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',  transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)", // Zoom in effect
          boxShadow: 6, // Increase shadow on hover
        },textAlign:'left'}}>
        <CardContent>
        <Typography variant='h5'>{position}</Typography>
  <Typography variant='h6' sx={{color:'darkgrey'}}>{company}</Typography>
  <Typography variant='h6' sx={{color:'darkgrey'}}>{skill}</Typography>
  
  
        </CardContent>
      </Card>
  )
}

export default GreenCard
