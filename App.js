import React from 'react'
import Home from './Home'
import SingleMovie from './singleMovie'
import Navbar from './Navbar'
import About from './About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/movies/:id'>
          <SingleMovie />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
