import React, { useState, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import StockTable from '../Components/StocksTable.js';

function Search(props) {
    const[sorted, setSorted] = useState(true); // For the table

    // CSS style sheet for the Jumbotron
    const jumboStyle = {
        'backgroundColor': '#ffffff',
    };

    // Finds stock ticker symbols that contains the search term
    const[stockList, setStockList] = useState([]);
    useEffect(() => {
        const data = [];
        for (var i = 0; i < props.stocks.names.length; i++) {
            if (props.stocks.names[i].toLowerCase().includes(props.term.toLowerCase())) {
                data.push(props.stocks.names[i]);
            }
        }
        setStockList(data);
    }, [props.term, props.stocks.names]);
    
    return (
        <div className='Search'>
        <Jumbotron style ={jumboStyle}>
            <h1>Search</h1>

            <p>
                You searched "{props.term}".
            </p>
        </Jumbotron>
        <StockTable stocks={stockList} sorted={sorted} setSorted={(e) => setSorted(e)} setStock={(e) => props.setStock(e)}/>
    </div>
    )
}

export default Search