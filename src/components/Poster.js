import React from 'react'
import '../assets/style/poster.css'

function Poster({img, lagging}) {

  const imgPath = 'https://image.tmdb.org/t/p/w500'


  return (
    <div className='poster'>
        {lagging?<div className='poster_loading_cover'>
            <span className='poster_load_ball'></span>
            <span className='poster_load_ball'></span>
            <span className='poster_load_ball'></span>
        </div>:<div className='poster_img'>
          <img src={`${imgPath}${img}`} alt={`${img}`} />
        </div>

        }
    </div>
  )
}

export default Poster