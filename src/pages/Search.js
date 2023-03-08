import React, { useEffect, useState } from 'react'
import '../assets/style/search.css'
import Nav from '../components/Nav'
import SearchFeald from '../components/SearchFeald'

function Search() {

  const [searcInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [searches, setSearches] = useState({})

  
  
  

  useEffect(() => {
    
    const searchBy = async (filter, query) => {
    
      const url = `https://api.themoviedb.org/3/search/${filter}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
      const request = await fetch(url);
  
      const data = await request.json();
  
      setMovies(data)
    }

    searchBy('movie', 'die hart');

    console.log(movies);

  }, [searcInput]);

  

  

  

  return (
    <>
    <Nav />
    <main className='search_layer'>
      <div className='search_layer_area'>
          <SearchFeald searcInput={searcInput} />
      </div>
          
      <section className='search_filter_result'>

          <header className='search_result'>
          <div className='search_result_item'>
            <img src='' alt='' />
            <article>
              <h2>Game Of Thrones</h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                or randomised words which don't look even slightly believable. I</p>
            </article>
          </div>
          </header>

      </section>
          

    </main>
    </>
    
  )
}

export default Search