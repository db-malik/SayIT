import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./fullArticle.css";

import { blogs } from "data/blogs";



const FullArticle = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const filteredBlog = blogs.find(blog => blog.id === id);
    setBlog(filteredBlog);
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tld13Container sectionMargin" id="fullArticle">
      <div className="tld13Feature">

        {console.log(blog.imgUrl)}
        <img src='/utils/assets/blog01.png' alt="blogImage" />
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
