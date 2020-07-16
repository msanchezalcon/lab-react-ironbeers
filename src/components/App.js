import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import BeerList from './Beers/BeerList'
import BeerDetails from './Beers/BeerDetail'
import BeerRandom from './Beers/BeerRandom'



function App() {
  return (

    <div className="App">

      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/beers" render={() => <BeerList />} />
        <Route exact path="/beers/:beer_id" render={props => <BeerDetails {...props} />} />
        <Route exact path="/beers/random" render={() => <BeerRandom />} />

      </Switch>

    </div>
  )
}

export default App
