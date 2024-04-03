import React from 'react'
import { MuiFileInput } from 'mui-file-input'
import { Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from "react-redux";
import { fetchVideoTranscription } from "sevices/services";
import { setLoadingVideo } from "store/transcriptVideoSlice"
const UploadButton = () => {
  const [file, setFile] = React.useState(null)
  const dispatch = useDispatch()



  const handleChange = (newFile) => {
    setFile(newFile)
  }
  const sendRequest = () => {

    setLoadingVideo(true)

    setTimeout(() => {
      dispatch(fetchVideoTranscription('textData'))
    }, 3000)


  }

  return (
    <div style={{ bgcolor:"#fff", borderRadius: "10px", display:"flex", gap: "10px"}}>
      <MuiFileInput label="Upload Video" sx={{ color:"#fff", bgcolor: '#fff', padding : "10px",border: "2px solid red", borderRadius: "10px", }} color="info" value={file} onChange={handleChange} />
      <Button onClick={sendRequest} padding="10" variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </div>
  )
}

export default UploadButton
