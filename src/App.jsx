import { useState , useEffect } from 'react';


import Search from './components/Search'
import Spinner from './components/Spinner';


function App() {

  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  const API_BASE_URL = 'https://api.themoviedb.org/3'
  const API_KEY = import.meta.env.VITE_TNDB_API_KEY



  const API_OPTIONS = {
    methods: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  }

  const fetchMovies = async ()=> {
    setIsLoading(true)
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint, API_OPTIONS)

      if(!response.ok){
        throw new Error('Failed to fetch movies')
      }
      const data = await response.json()

      if (data.Response === 'False') {
        setError(data.Error || 'Failed to fetch movies')

        return;
      }
      setMovieList(data.results)
      console.log(movieList)




    }
    catch(error){
      console.error('Error fetching movies:', error)
      setError("Failed to fetch movies")

    }
    finally{
      setIsLoading(false)
    }
  }
  

  useEffect(() => {
    fetchMovies()
  }, [])


  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero Banner" />
          <h1>
            Find <span className='text-gradient'>Movies</span> That You Will Enjoy Without The Hassle.
          </h1>
          <Search 
          search={search}
          setSearch={setSearch}
          />
        </header>
        <section className='all-movies'>
          <h2>All Movies</h2>

          {isLoading ?(
            <Spinner />
          ): error ? (
            <p className='text-red-500'>{error}</p>
          ): (
            <ul>
              {movieList.map((movie)=>(
                <p className='text-white'> {movie.title}</p>
              ))}
            </ul>
          )}
          
        </section>
      </div>
    </main>
  )
}

export default App
