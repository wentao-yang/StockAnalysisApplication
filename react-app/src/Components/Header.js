import React from 'react';
import {
  Navbar, 
  Nav, 
  Form, 
  FormControl, 
  Button 
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

var setTerm; // We will store the setTerm function in here
              // To use in another function

function Header(props) {
  setTerm = props.setTerm;

  return (
    <div className='Header'>
      {/* App Name on the far left */}
      <Navbar bg='dark' variant='dark'>
      <Navbar.Brand as={Link} to='/'>Stock Analysis App</Navbar.Brand>

      {/* Links to different webpages */}
      <Nav className='mr-auto'>
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/stocks/'>Stocks</Nav.Link>
        <Nav.Link as={Link} to='/about/'>About</Nav.Link>
      </Nav>

      {/* Search form */}
      <Form inline>
        <FormControl type='text' placeholder='Search (Please use button)' className='mr-sm-2' id='search-term'/>
        <Button variant='outline-info' type='submit' as={Link} to='/search' onClick={submitForm}>Search</Button>
      </Form>
      </Navbar>
    </div>
  );
}

// Submits the form contents
function submitForm(e) {
  const term = document.getElementById('search-term').value; // Gets content inside form
  setTerm(term);
}

export default Header;
