import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { query, setQuery } = useGlobalContext()

  return (
    <form className='form' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor='name'>Search movies</label>
      <input
        type='text'
        className='name'
        id='name'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

export default SearchForm
