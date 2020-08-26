import React from 'react';
import { Link } from 'react-router-dom';


function StockRows(props) {
    
    return (
        <tr>
            <td>
                <Link to='/stock' onClick={() => {props.setStock(props.data)}}>
                    {props.data}
                </Link>
            </td>
        </tr>
    )
}

export default StockRows;