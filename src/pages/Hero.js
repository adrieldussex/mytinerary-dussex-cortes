import React from 'react'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <>
        <div className="Hero-container">
            <div className='Hero-top'>
                <div className='Hero-text'>                    
                    <h1 className='Hero-title'>MyTinerary</h1>
                    <h2 className='Hero-slogan'>Find your perfect trip, designed by insiders who know and love their cities!</h2>
                </div>
                <button className='Hero-calltoaction'>Find your next destination</button>
            </div>
            <div className='Hero-bottom'>                
                <img src="https://i.imgur.com/OZpDvUU.png" alt="logo-hero"></img>
            </div>
        </div>
    </>
  )
}