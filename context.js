import React, { useContext, useEffect, useState } from 'react'

const api = 'http://www.omdbapi.com/?apikey=2f518825&s='
const AppContext = React.createContext()

// 'http://www.omdbapi.com/?apikey=2f518825&i=' + id

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('batman')

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)

      try {
        const res = await fetch(`${api}${query}`)
        const data = await res.json()

        setLoading(true)

        if (data.Search) {
          setMovies(data.Search)
          setLoading(false)
          setError(false)
        } else {
          setLoading(false)
          setError(true)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchMovies()
  }, [query])

  return (
    <AppContext.Provider value={{ loading, movies, query, setQuery, error }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
