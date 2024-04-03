import React, { useEffect } from 'react'
import UploadButton from 'components/uploader/Uploader'
import TypographyCard from 'components/cards/TypographyCard'
import {  useSelector } from "react-redux"

function TranscriptVideo() {
  const transcriptVideo = useSelector((state) => state.transcriptVideoSlice.transcriptVideo)
  const loadingVideo = useSelector((state) => state.transcriptVideoSlice.loadingVideo)
  const error = useSelector((state) => state.transcriptVideoSlice.error)

  useEffect(() => {
    console.log('transcriptVideo', transcriptVideo)
    console.log(loadingVideo);
  }, [transcriptVideo, loadingVideo])

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', flexDirection: 'column' }}>
        <UploadButton />
      </div>
      <TypographyCard load={loadingVideo}  text={transcriptVideo } err={error}/>
    </>
  )
}

export default TranscriptVideo
