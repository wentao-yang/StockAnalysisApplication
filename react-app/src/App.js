import React, { 
  useState, 
  useEffect,
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Views/About';
import Home from './Views/Home';
import Search from './Views/Search';
import Stock from './Views/Stock';
import Stocks from './Views/Stocks';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [stock, setStock] = useState('');
  const [stocks, setStocks] = useState(null);
  const stock_url = 'http://localhost:8000/api/symbols/';

  // Get ticker symbols of all stocks in database
  useEffect(() => {
    axios.get(stock_url).then(response => {
      setStocks(response.data);
    });
  }, [stock_url]);

  if (stocks) { // Finished above request
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
                <Search term={searchTerm} setStock={(e) => setStock(e)} stocks={stocks}/>
              </Route>
              <Route stock path='/stock'>
                <Stock stock={stock}/>
              </Route>
              <Route exact path='/stocks'>
                <Stocks stocks={stocks} setStock={(e) => setStock(e)}/>
              </Route>
            </Switch>
          </div>
  
          <Footer /> 
        </Router>
      </div>
    );
  } else { // Loading screen

    // Spinner style
    const loadStyle = {
      'position': 'fixed',
      'top': '50%',
      'left': '50%',
    };

    return (
      <div style={loadStyle}>
        <Spinner animation="border" variant="dark" />
      </div>
    )
  }
  
}

export default App;
