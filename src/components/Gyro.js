import React, { useState } from 'react'
import '../assets/style/gyro.css'

function Gyro({springVal, styleProp}) {

  const [spring, setSpring] = useState(0)

  const moveGyro = () => {
    if (spring === 0) {
      setSpring('auto')
    }
    else if (spring === 'auto') {
      setSpring(0)
    }
  } 

  return (
    <div className={`${styleProp}`}>
      <span className='search_gyro' style={{
      left: `${spring}`}}></span>
      <span onClick={moveGyro}>{springVal[0]}</span>
      <span onClick={moveGyro}>{springVal[1]}</span>
      
</div>
  )
}

export default Gyro