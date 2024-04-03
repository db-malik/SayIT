import React, { useState } from 'react'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Textarea from '@mui/joy/Textarea'
import IconButton from '@mui/joy/IconButton'
import Menu from '@mui/joy/Menu'
import MenuItem from '@mui/joy/MenuItem'
import ListItemDecorator from '@mui/joy/ListItemDecorator'
import FormatBold from '@mui/icons-material/FormatBold'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import Check from '@mui/icons-material/Check'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTextSummary, fetchTextTranslation } from 'sevices/services'
import Selector from 'components/selector/Selector'

const TextArea = ({ action, supportedLanguges=[""] }) => {
  const [italic, setItalic] = useState(false)
  const [fontWeight, setFontWeight] = useState('normal')
  const [anchorEl, setAnchorEl] = useState(null)
  const [textData, setTextData] = useState('')
  const loading = useSelector((state) => state.loading)

  const translateFromLanguges = useSelector((state) => state.textTranslation.translateFromLanguges)
  const translateToLanguges = useSelector((state) => state.textTranslation.translateToLanguges)


  const dispatch = useDispatch()

  const sendText = (action) => {
    switch (action) {
      case 'summarize':
        dispatch(fetchTextSummary(textData))
        break
      case 'translate':
        dispatch(fetchTextTranslation(textData, translateToLanguges,  translateFromLanguges))
        break
      default:
    }
  }

  return (
    <FormControl>
      <FormLabel>Your comment</FormLabel>
      <Textarea
        sx={{
          overflowY: 'auto', // Activate vertical scrolling if content overflows vertically
          scrollbarColor: 'var(--scrollbar-thumb) var(--scrollbar-track)',
          bgcolor: '#feffffeb',
          minWidth: 600,
          fontWeight,
          fontStyle: italic ? 'italic' : 'initial',
        }}
        onChange={(event) => setTextData(event.target.value)}
        color="blue"
        placeholder="Type something here…"
        minRows={18.2}
        maxRows={18.2}
        endDecorator={
          <Box
            sx={{
              bgcolor: 'background.paper',
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <IconButton variant="plain" color="neutral" onClick={(event) => setAnchorEl(event.currentTarget)}>
              <FormatBold />
              <KeyboardArrowDown fontSize="md" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              size="sm"
              placement="bottom-start"
              sx={{ '--ListItemDecorator-size': '24px' }}
            >
              {['200', 'normal', 'bold'].map((weight) => (
                <MenuItem
                  key={weight}
                  selected={fontWeight === weight}
                  onClick={() => {
                    setFontWeight(weight)
                    setAnchorEl(null)
                  }}
                  sx={{ fontWeight: weight }}
                >
                  <ListItemDecorator>{fontWeight === weight && <Check fontSize="sm" />}</ListItemDecorator>
                  {weight === '200' ? 'lighter' : weight}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              variant={italic ? 'soft' : 'plain'}
              color={italic ? 'primary' : 'neutral'}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              {action === 'translate' ? 
              <>


              <Selector data={supportedLanguges} /> 
                 
              </> : null }
            </IconButton>
            <Button disabled={loading} onClick={() => sendText(action)} sx={{ ml: 'auto' }}>
              Send
            </Button>
          </Box>
        }
      />
    </FormControl>
  )
}

export default TextArea
