import React from 'react'
import { useLocation } from 'react-router-dom'
import "./SinglePage.css";


const SingleBlogPage = () => {
const location = useLocation();
const {title, img, description} = location.state;
console.log(title)
  return (
    <div className='blogpage'>
        <h1>{title}</h1>
        <img src={img} alt="" />
        <p>{description}</p>
      
    </div>
  )
}

export default SingleBlogPage