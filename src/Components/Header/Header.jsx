import React from 'react'
import { shoes1,shoes2 } from '../../Database/shoes'

const Header = () => {
   
    
    

    
  return (
      <header>
          <div className="container flex-between">
              <div className="header-info">
                  <h1 className="text-primary">clout status <span className="text-stroke">
                      in a box.</span> </h1>
                  <p className="paragraph">
                  For over a decade, TheDrop has been providing sneakerheads acess to limited drops without the bots.
                  </p>
                  <div className="header-button-group">
                      <button className="button-primary">
                          SHOP
                      </button>
                      <button className="button-accent">TODAY'S SHOP</button>
                  </div>
              </div>
              <div className="header-slider">
                  <div className="marque-content">
                      {
                          shoes1.map((item) => {
                              return (
                                  
                                  <img src={item.img} alt="" className="slider-img" />
                              )
                          })
                      }
                      
                 </div> <br />
                  <div className="marque-content2">
                  {
                          shoes2.map((item) => {
                              return (
                                  
                                  <img src={item.img} alt="" className="slider-img" />
                              )
                          })
                      }
                      
                 </div>
              </div>
        </div>
    </header>
  )
}

export default Header