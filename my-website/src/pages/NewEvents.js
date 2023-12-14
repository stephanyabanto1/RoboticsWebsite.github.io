import React from 'react';
import Termitomator from '../photos/Termitomator.png';
import './NewEvents.css'

export default function NewEvents() {
    return( 
    
    <div className='Termitomator'>

      <h1 class = "header">Check out on what were up to!!</h1>
      <h2> List of Events</h2>  
          
      <div class = "row">
          <div class = "column">
                <img className='image'
                    src={Termitomator}
                    alt="Robotics Group"
                    style={{width: '80%', maxWidth: '100%', maxHeight: '400px', margin: '0 auto'}}
                  />
          </div>



          <div class = "column">
                <h1>Termitomator</h1>
                <p>Build a robot to fight against another robot.</p>
          </div>
      </div>
    </div>
   )
  }