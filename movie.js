import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movie = () => {
  const { loading, movies, error } = useGlobalContext()

  if (loading) {
    return (
      <section className='section'>
        <div className='loading'></div>
      </section>
    )
  }

  return (
    <section className='section'>
      {error && (
        <div className='error'>
          <p>oops! no results</p>
        </div>
      )}
      {movies.map((movie) => {
        const { Title: title, Poster: poster, Year: year, imdbID: id } = movie

        return (
          <Link to={`/movies/${id}`} key={id}>
            <article>
              <div className='img-container'>
                <img src={poster === 'N/A' ? url : poster} alt={title} />
              </div>
              <div className='info'>
                <h3>{title}</h3>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}

export default Movie
