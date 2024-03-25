import React from "react";

import "./article.css";
import { useNavigate } from 'react-router-dom';

const Article = ({ imgUrl, title, id, textContent }) => {
  const navigate = useNavigate();

  const readFullArticle = () => {
    navigate(`/${id}`);
  };
  return(
  <div className="ar91container">
    <div className="ar91containerImage">
      <img src={imgUrl} alt="blogImage" />
    </div>
    <div className="ar91containerContent">
      <div>
        <h3>{title}</h3>
      </div>
      <p>{textContent}</p>
      <p onClick={()=> readFullArticle()}>
        Read Full Article
      </p>
    </div>
  </div>
);
  }


export default Article;
