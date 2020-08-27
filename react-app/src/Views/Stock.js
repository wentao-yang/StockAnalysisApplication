import React, { 
    useState,
    useEffect 
} from 'react';
import { 
    Jumbotron, 
    Spinner 
} from 'react-bootstrap';
import axios from 'axios';
import StockTable from '../Components/StockTable.js';

function Stock(props) {
    const[stockData, setStockData] = useState(null);

    // Get data for stock
    useEffect(() => {
        const stock_url = 'http://localhost:8000/api/symbol='.concat(props.stock);
        axios.get(stock_url).then(response => {
        setStockData(response.data);
        });
    }, [props.stock]);

    if (stockData === null) {
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
    } else {
        // CSS style sheet for the Jumbotron
        const jumboStyle = {
            'backgroundColor': '#ffffff',
        };

        return (
            <div className='Stock'>
                <Jumbotron style={jumboStyle}>
                    <h1>{props.stock}</h1>
    
                    <p>
                        Here are all the data stored in the database for {props.stock}.
                    </p>
                </Jumbotron>
                <StockTable data={stockData.data}/>
            </div>
        )
    }
}

export default Stock;