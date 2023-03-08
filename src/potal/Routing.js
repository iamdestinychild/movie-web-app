import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Shows from '../pages/Shows'
import Show from '../pages/Show'
import Movies from '../pages/Movies'
import Movie from '../pages/Movie'
import About from '../pages/About'
import Compare from '../pages/Compare'
import Nav from '../components/Nav'

function Routing() {
    return (
        <>
        <Nav />
        
        <Routes>
        <Route path='/' element={<Home />} />
        
              <Route path='/shows'>
                   <Route index element={<Shows />} />
                    <Route path=':id' element={<Show />} />
               </Route>
        
                <Route path='/moves'>
                    <Route index element={<Movies />} />
                    <Route path=':id' element={<Movie />} />
                </Route>
         
                <Route path='/compare' element={<Compare />} />
                <Route path='/about' element={<About />} />
          </Routes>
        </>
  ) 
   
}

export default Routing