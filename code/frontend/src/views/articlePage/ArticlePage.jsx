import React,{memo} from "react";

import { Navbar } from "../../components";

import './articlePage.css';
import FullArticle from "../../common/fullArticle/fullArticle";

const ArticlePage=()=>{

  return (
    <div id="hp01Homepage">
      <div className="gradientBackground">
        <Navbar/>
      
      </div>
      <FullArticle/>
    </div>
  )
}

export default memo(ArticlePage);