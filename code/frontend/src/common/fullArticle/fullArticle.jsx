import React from "react";
import "./fullArticle.css";



const FullArticle = ({blog}) => {

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tld13Container sectionMargin" id="fullArticle">
      <div className="tld13Feature">

        <img src='/assets/blog01.png' alt="blogImage" />
        <div className="title">{blog.title}</div>
        <div className="content">
          {blog.full_text.map((item, index) => (
            <div className="paragraph">
            <p className="paragraphTitle" key={index}>{item.title}</p>
            <p className="paragraphContent" key={index}>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullArticle;
