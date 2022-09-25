import React from 'react'


const SectionHeader = ({headerData}) => {
 
  return (
      <div className='section-header'>
          {
              headerData.nameColor ? <p className='section-title-orange'>{ headerData.name}</p>:<p className='section-title'>{ headerData.name}</p>
          }
          <h2 className="text-secondary">
              {
                  headerData.title
              }
          </h2>
          <div className="flex-between">
              
          {
              headerData.subtitle?<p className="paragraph">{headerData.subtitle}</p>:null
            }

          {
              headerData.buttonText ? <button className="button-primary section-btn">
                  {headerData.buttonText}
              </button>:null
          }
          </div>
    </div>
  )
}

export default SectionHeader