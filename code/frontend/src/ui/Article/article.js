import React from "react";

import "./article.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Article = ({ imgUrl, title, id, textContent }) => {
  const history = useHistory();
  console.log(id);

  const readFullArticle = () => {
    history.push(`/${id}`);
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
