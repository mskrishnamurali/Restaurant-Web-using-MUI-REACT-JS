import React from 'react'
import Welcome from '../Welcome/Welcome'
import Partner from '../Partner/Partner'
import Booking from '../Booking/Booking'
import Dishes from '../Dishes/Dishes'
import Ambiance from '../Ambiance/Ambiance'
import Delivery from '../Delivery/Delivery'



function Home() {
  return (
    <div>
        <Welcome/>
        <Partner/>
        <Booking/>
        <Dishes/>
        <Ambiance/>
        <Delivery/>
      
    </div>
  )
}

export default Home
