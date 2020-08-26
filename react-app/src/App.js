import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Views/About'
import Home from './Views/Home'
import Search from './Views/Search'
import Stock from './Views/Stock'
import Stocks from './Views/Stocks'


function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='App'>
      <Router>
        {/* setTerm is for search bar */}
        <Header setTerm={(e) => setSearchTerm(e)}/> 
        
        <div>
          {/* Routing */}
          <Switch>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/search'>
              <Search term={searchTerm} />
            </Route>
            <Route stock path='/stock'>
              <Stock />
            </Route>
            <Route exact path='/stocks'>
              <Stocks />
            </Route>
          </Switch>
        </div>

        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
