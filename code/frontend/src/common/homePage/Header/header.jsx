import React from 'react';
import { useNavigate } from 'react-router-dom';

import ai from '../../../assets/ai.png';

import './header.css';


const Header = () =>{ 
    const navigate = useNavigate();

    const handleButtonClick=(e)=>{
        navigate(`/${e}`);
    }

  return(
    <div className="h19Header sectionPadding" id="home">
        <div className="h19HeaderContent">
        <h1 className="gradientText">
            Let&apos;s summarise Meetings with SayIt</h1>
        <p>
SayIt is an essential tool tailored for students, accessible exclusively through our web extension. Whether you're at your desk or on the go, SayIt provides a convenient way to capture and organize crucial meeting notes. The smart automated meeting summaries ensure that your knowledge is efficiently retained and easily accessible. With the focus on the web extension, students can seamlessly upload files, making SayIt an indispensable companion for enhancing productivity during virtual classes and collaborative projects.</p>

        <div className="h19HeaderContentInput">
            <button type="button" onClick={() => handleButtonClick("MeetingSummariser")}>Gettt Started</button>
        </div>
        </div>

        <div className="h19HeaderImage">
        <img src={ai} alt="aiImage"/>
        </div>
    </div>
    );
}

export default Header;