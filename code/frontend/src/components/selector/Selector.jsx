import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { supportedLanguges } from 'data/supportedLanguges'
import { useDispatch } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { setTranslateToLanguges, setTranslateFromLanguges } from 'store/textTranslationSlice'

export default function Selector() {
  const [toLanguage, setToLanguage] = React.useState('')
  // eslint-disable-next-line no-unused-vars
  const [fromLanguage, setFromLanguage] = React.useState('')
  const dispatch = useDispatch()

  const translateToHandler = (event) => {

    setToLanguage(event.target.value)
    dispatch(setTranslateToLanguges(event.target.value))

  }

  // const translateFromHandler = (event) => {
  //   setFromLanguage(event.target.value)
  //   dispatch(setTranslateFromLanguges(event.target.value))
  // }
  return (
    <Box sx={{ display: 'flex', gap: '10px', minWidth: 200 }}>
      {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Translate From</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={fromLanguage} label="Translate From" onChange={translateFromHandler}>
          {supportedLanguges &&
            supportedLanguges.map((item) => (
              <MenuItem key={item.code} value={item.code}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl> */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Translate To</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={toLanguage} label="Translate To" onChange={translateToHandler}>
          {supportedLanguges &&
            supportedLanguges.map((item) => (
              <MenuItem key={item.code} value={item.code}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  )
}
