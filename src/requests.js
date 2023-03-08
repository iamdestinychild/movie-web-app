const requests = {
    trending: `trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}`,
    topRated:`movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    discover:`discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    genre: `genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    keywordSearch: `search/keyword?api_key=${process.env.REACT_APP_API_KEY}`,
    
}

export default requests