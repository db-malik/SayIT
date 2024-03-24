import * as React from 'react'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function ActionAreaCard({ title, description, image }) {
  return (
    <CardActionArea
      sx={{
        bgcolor: '#3b4456',
        boxShadow: 1,
        borderRadius: 2,
        p: 0,
        m: 2,
        minWidth: 300,
        maxWidth: 345,
        opacity: 0.43,
        transition: 'opacity 1s ease 0s',
        ':hover': {
          opacity: 1,
        },
        '::selection': {
          bgcolor: '#4c8df6',
        },
      }}
    >
      <CardMedia component="img" height="140" image={image} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  )
}
