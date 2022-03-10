import './Movie.css';
import SearchIcon from './search.svg';
// import DisplayPanel from './components/DisplayPanel';
// import Learn from './components/Learn';
import { useEffect, useState } from 'react';
// import MovieCard from '../../../movieland/src/components/MovieCard';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';

const API_URL = 'http://www.omdbapi.com?apikey=7ec85a6a';

export default function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm ] = useState([''])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search)
  }
  useEffect(() => {
   searchMovies('kid')
  }, [])

 
  return (
    <div className='app'>
       <h1>MovieLand</h1>
       
       <div className='search'>
           <input placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
           <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
        </div>
        {movies?.length > 0 ? 
        ( <div className='container'>
          {movies.map((movie) => (
           <MovieCard movie={movie}/>
          ))}
        </div>) : (
          <div className='empty'> 
              <h2>No movie found</h2>
          </div>
        )}
     <Footer />
    </div>

  );
}


// Here is your key: 7ec85a6a