import React from 'react'


import { Link } from 'react-router-dom'

const FonctionCards = ({title, description, icon, link}) => {
  return (
    <Link to={link} className="item">
      <p className="cardTitle">{title}</p>
      <p className="cardDescription"> {description} </p>
      <span>
        {icon}
      </span>
    </Link>
  )
}

export default FonctionCards
