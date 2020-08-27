import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import StockTable from '../Components/StocksTable.js';

function Stocks(props) {
    const[sorted, setSorted] = useState(true); // For the table

    // CSS style sheet for the Jumbotron
    const jumboStyle = {
        'backgroundColor': '#ffffff',
    };

    return (
        <div className='Stocks'>
            <Jumbotron style ={jumboStyle}>
                <h1>Stocks</h1>

                <p>
                    Here are all the stocks stored in the database:
                </p>
            </Jumbotron>
            <StockTable stocks={props.stocks.names} sorted={sorted} setSorted={(e) => setSorted(e)} setStock={(e) => props.setStock(e)}/>
        </div>
    )
}

export default Stocks;