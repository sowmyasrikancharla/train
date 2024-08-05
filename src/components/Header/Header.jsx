import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header-con'>
         <div className='header-con-left'> <h1 className='header-head'>Choose ur Destination</h1>
         <p className='header-text'>Book train tickets for a safe travel and great experience.
         Traveling by train is a popular choice for both short commutes and longer journeys, and for a good reason. With over a thousand routes connecting cities in India, traveling by train is the most convenient mode of travel. The combination of price, convenience, and speed makes train travel a sweet spot for discerning travelers. Travelers can now search routes, check fares and book train tickets with MyTrainzz train booking system. Moreover, you can also use the MyTrainzz app for easy access to train tickets booking. Planning a trip across India should be fun and easy.
         </p>
         <button className='view-button'>View Trains</button>
         
         
         </div>
       <img src="https://img.freepik.com/free-photo/steam-train-railroad-illustration_1409-6726.jpg" className='train-img'/>
    
    </div>
  )
}

export default Header
