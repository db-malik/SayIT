import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/app.css';
import ArticlePage from "./views/articlePage";
import HomePage from "./views/homePage";
import SignInPage from "views/SignInPage";
import MeetingSummariser from "./views/MeetingSummariser";
import TranscriptSummariser from "./views/TranscriptSummariser";
import SpeechToText from "./views/SpeechToText";
import Page404 from "./views/Page404";

const App = () => {

  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/MeetingSummariser" component={MeetingSummariser} />
          <Route exact path="/TranscriptSummariser" component={TranscriptSummariser} />
          <Route exact path="/SpeechToText" component={SpeechToText} />
          <Route exact path="/:id" component={ArticlePage} />
          <Route exact path="/*" component={Page404} />                         
        </Switch>
    </BrowserRouter >
  );
};

export default App;
