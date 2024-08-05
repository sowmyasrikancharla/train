import React from 'react'
import './ExploreTrains.css'
import { trains_list } from '../../assets/assets'
const ExploreTrains = () => {
  return (
    <div className='explore-trains' id="explore-trains">
      <h1 className='pop-head'> Popular Trains</h1>
      <div className='explore-trains-list'>
        {trains_list.map((item,index)=>{
          return (
            <div className='train-item' key={index}>
                <img src={item.train_image} className="train" alt="train"/>
                <p>{item.train_name}</p>
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreTrains
