import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/app.css'
import ArticlePage from './views/articlePage/ArticlePage'
import HomePage from './views/homePage/HomePage'
import SignInPage from 'views/signInPage/SignInPage'
import MeetingSummariser from './views/meetingSummariser/MeetingSummariser'
import TranscriptSummariser from './views/transcriptSummariser/TranscriptSummariser'
import SpeechToText from './views/speechToText/SpeechToText'
import Page404 from './views/page404/Page404'
import ProfilePage from 'views/profilePage/ProfilePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GridFonctionalities from "components/profile/GridFonctionalities"
import TextSammury from "components/profile/fonctionalities/TextSammury"
import Chatbot from "components/profile/fonctionalities/chat/Chatbot/Chatbot"
import TextTranslate from "components/profile/fonctionalities/TextTranslate"
import TranscriptVideo from "components/profile/fonctionalities/transcriptVideo"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route exact path="/profile/fonctionalities" element={<GridFonctionalities />} />
          <Route path="/profile/text_sammury" element={<TextSammury />} />
          <Route path="/profile/chat_with_ai" element={<Chatbot />} />
          <Route path="/profile/text_translate" element={<TextTranslate />} />
          {/* <Route path="/profile/audio_transcript" element={<TextTranslate />} /> */}
          <Route path="/profile/video_transcript" element={<TranscriptVideo />} />
        </Route>
        <Route path="/MeetingSummariser" element={<MeetingSummariser />} />
        <Route path="/TranscriptSummariser" element={<TranscriptSummariser />} />
        <Route path="/SpeechToText" element={<SpeechToText />} />
        <Route path="/:id" element={<ArticlePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  )
}

export default App
