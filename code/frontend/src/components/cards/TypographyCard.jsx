import React from 'react'
import Card from '@mui/joy/Card'
import Typography from '@mui/joy/Typography'
import Loading from 'components/loading/Loading'

const TypographyCard = ({title, text, load, err}) => {


  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: '#feffffeb',
        maxHeight: '500px',
        minHeight: '500px',
        overflowY: 'auto',
        scrollbarColor: 'var(--scrollbar-thumb) var(--scrollbar-track)',
        mt: '20px',
      }}
    >
      <div style={{ padding: '10px' }}>
        {' '}
        {/* Add padding for better readability */}
        <Typography sx={{ mb: 4 }} level="h2">
        {title}
        </Typography>
        {load ? <Loading /> : err ? <Typography> Somthing went wrong</Typography> : <Typography>{text}</Typography>}
      </div>
    </Card>
  )
}

export default TypographyCard
