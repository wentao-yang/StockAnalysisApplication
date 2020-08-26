import React from 'react';
import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    // CSS style sheet for certain elements
    const jumboStyle = {
        'backgroundColor': '#ffffff',
    };

    const containerStyle = {
        'width': '25%',
    };
    
    return (
        <div className='Home'>
            <Jumbotron style={jumboStyle}>
                <h1>Hello!</h1>

                <p>
                    A list of stocks and their historical data have been stored on an InfluxDB. 
                    Click below to see the stocks stored or more about this project!
                </p>
                
                <br />

                <Container style={containerStyle}>
                    <Row>
                        <Col>
                            <Button variant='primary' as={Link} to='/stocks'>See Stocks</Button>
                        </Col>
                        <Col>
                            <Button variant='primary' as={Link} to='/about'>Learn More</Button>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home;