import React from 'react'
import { Chat, ClockCounterClockwise, Gear, Plus, Question } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { Download, Summarize } from '@mui/icons-material'
import { RiMapPin3Fill } from 'react-icons/ri'

const Sidebar = () => {
  const navigate = useNavigate()

  const goTo = (path) => {
    navigate(path)
  }

  const downloadExtension = () => {
    const url = "https://mega.nz/file/AaNhDJTY#l6ktTX8-4dcHm2F7IQ3riTkHgzzTZ8X5osTAF8X7kyA"
    window.open(url, '_blank');

  }

  return (
    <aside className="sidebar-styled">
      <div className="sidebar-top">
        <button onClick={downloadExtension}>
            <Download weight="bold" size={20} />
            Chrome Extension
        </button>
      </div>
      <div className="buttonContainer">
      <button onClick={() => goTo('/profile/fonctionalities')}>
          <Plus weight="bold" size={20} />
          Fonctionalities
        </button>
        <button onClick={() => goTo('/profile/chat_with_ai')}>
          <Chat weight="bold" size={20} />
          Chat with IA
        </button>
        <button onClick={() => goTo('/profile/text_sammury')}>
          <Summarize weight="bold" size={20} />
          Summarize Information
        </button>
        {/* <button onClick={() => goTo('/profile/audio_transcript')} >
          <RiMapPin3Fill weight="bold" size={20} />
          Transcript Audio
        </button> */}
        <button  onClick={() => goTo('/profile/video_transcript')} weight="bold" size={20}>
          <RiMapPin3Fill />
          Transcript Video
        </button>
        <button onClick={() => goTo('/profile/text_translate')}>
          <Summarize   weight="bold" size={20} />
          Translate text
        </button>
      </div>
      <div className="sidebar-bottom">
        <div>
          <Question weight="bold" size={20} />
          user
        </div>
        <div>
          <ClockCounterClockwise weight="bold" size={20} />
          Upgrade to Premium
        </div>
        <div>
          <Gear weight="bold" size={20} />
          Configurations
        </div>
        <p>All Right reserved by @ SAYIT</p>
      </div>
    </aside>
  )
}

export default Sidebar
