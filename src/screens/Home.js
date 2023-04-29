import React from 'react'
import "./Home.css";
import Header from '../components/Header';
import Body from '../components/Body';
import image from "../images/pizza.png"

function Home() {
  return (
    <div className = "home">
        <Header />
        <img src={image} alt='banner' style={{height: 531}}/>
        <h4 className='menu'>Menu</h4>
        <Body />
    </div>
  )
}

export default Home