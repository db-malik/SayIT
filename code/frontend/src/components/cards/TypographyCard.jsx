import React from 'react'
import Card from '@mui/joy/Card'
import Typography from '@mui/joy/Typography'
import Loading from 'components/loading/Loading'
import jsPDF from 'jspdf'
import { Button } from '@mui/material'
import { Download } from '@mui/icons-material'

const TypographyCard = ({ title, text, load, err }) => {
  const exportToPDF = () => {
    const pdf = new jsPDF()
    const textLines = pdf.splitTextToSize(text, 210) // Adjust the width as needed
    const margin = 10
    const lineHeight = 5 // Adjust the line height as needed
    const fontSize = 14; // Adjust the font size as needed

    pdf.setFontSize(fontSize); //
    pdf.text(textLines, margin, margin + lineHeight) // Start from (margin, margin)
    pdf.save('exported-text.pdf')
  }

  return (
    <>
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
        <Button onClick={exportToPDF} variant="contained" endIcon={<Download />}>
          Export to PDF
        </Button>

        <div id="textToExport" style={{ padding: '10px' }}>
          <Typography sx={{ mb: 4 }} level="h2">
            {title}
          </Typography>
          {load ? (
            <Loading />
          ) : err ? (
            <Typography> Somthing went wrong</Typography>
          ) : (
            <Typography>
         
              <div style={{ padding: '10px', border: '1px solid #ccc' }}> {text} </div>
            </Typography>
          )}
        </div>
      </Card>
    </>
  )
}

export default TypographyCard
