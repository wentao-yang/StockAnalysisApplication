import React from 'react';
import {
    Jumbotron,
    Button,
} from 'react-bootstrap';

function About() {
    // CSS style sheet for the Jumbotron
    const jumboStyle = {
        'backgroundColor': '#ffffff',
    };
    
    return (
        <div className='Home'>
            <Jumbotron style ={jumboStyle}>
                <h1>Stock Analysis App</h1>

                <p>
                    This project utilizes InfluxDB as the database, Django as the backend framework, and
                    React as the frontend framework to create this project. For more information, press the
                    button below to see the GitHub repository of this project.
                </p>
                
                <br />

                <p>
                    <Button variant='primary' href='https://github.com/wentao-yang/StockAnalysisApplication'>See GitHub Repo</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default About;