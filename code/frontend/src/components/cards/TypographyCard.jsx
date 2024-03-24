import * as React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

const TypographyCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: '#feffffeb',
        maxHeight: '500px',
        minHeight: '400px',
        overflowY: 'auto', 
        scrollbarColor: 'var(--scrollbar-thumb) var(--scrollbar-track)',
        mt: '20px',
      }}
    >
      <div style={{ padding: '16px' }}> {/* Add padding for better readability */}
        <Typography level="h1">National Parks</Typography>
        <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
          Yosemite National Park
        </Typography>
        <Typography>
        Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
        mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
        Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
        mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
        Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
        mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
        Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
        mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
        Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
        mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
        Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
        mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
        Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
        mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
        Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
        mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
        Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
        mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
        Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
        mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
        Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
        mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
        Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
        mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
        Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
        mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
        Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
        mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
        </Typography>
      </div>
    </Card>
  );
};

export default TypographyCard;
