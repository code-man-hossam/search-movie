import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const api = 'http://www.omdbapi.com/?apikey=2f518825&i='

const SingleMovie = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState({})

  const fetchSingleMovie = async () => {
    setLoading(true)

    const res = await fetch(`${api}${id}`)
    const singleMovie = await res.json()
    console.log(singleMovie)
    setMovie(singleMovie)
    setLoading(false)
  }

  useEffect(() => {
    fetchSingleMovie()
  }, [id])

  if (loading) {
    return (
      <section className='section'>
        <div className='loading'></div>
      </section>
    )
  }

  const {
    Title: title,
    Poster: poster,
    Released: released,
    Genre: genre,
    Country: country,
    Production: prod,
    Awards: awards,
    DVD: dvd,
    Director: director,
    Actors: actors,
    Plot: plot,
  } = movie

  return (
    <div className='single-movie'>
      <div className='pic'>
        <img src={poster} alt={title} />
      </div>
      <div className='detail'>
        <h6>
          Title: <span>{title}</span>
        </h6>
        <h6>
          Released: <span>{released}</span>
        </h6>
        <h6>
          Geners: <span>{genre}</span>
        </h6>
        <h6>
          Country: <span>{country}</span>
        </h6>
        <h6>
          Production: <span>{prod}</span>
        </h6>
        <h6>
          Awards: <span>{awards}</span>
        </h6>
        <h6>
          DVD: <span>{dvd}</span>
        </h6>
        <h6>
          Director: <span>{director}</span>
        </h6>
        <h6>
          Actors: <span>{actors}</span>
        </h6>
        <p>{plot}</p>
        <Link to='/'>Back Home</Link>
      </div>
    </div>
  )
}

export default SingleMovie
