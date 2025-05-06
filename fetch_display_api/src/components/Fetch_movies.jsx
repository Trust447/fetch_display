import React, {useState, useEffect} from 'react'
import axios from "axios"
import MovieProp from './MovieProp';

const Fetch_movies = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")

    const message = "error fetching movies"

    useEffect(()=>{
        setTimeout(() => {
            axios.get("http://localhost:5000/movies")
                .then(res =>{
                    setMovies(res.data)
                    setLoading(false)
                })
                .catch(()=> {setError(message)
                    setLoading(false)
                })
        }, 1000)
    },[])

  return (
    <div className='fetch-container'>
        <h1>Movies</h1>
        {!loading && movies.length === 0 && <p>No movies found.</p>}
        {loading && <p>loading...</p> }
        {error &&  <p>{error}</p>}
        <ul>
            {movies.map(movie => <li key={movie.id}> <MovieProp title={movie.title} year={movie.year} />  </li>)}
        </ul>
    </div>
  )
}

export default Fetch_movies