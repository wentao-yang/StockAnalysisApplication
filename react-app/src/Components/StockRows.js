import React from 'react';


function StockRows(props) {
    return (
        <tr>
            <td>
                {props.time}
            </td>
            <td>
                {props.price}
            </td>
        </tr>
    )
}

export default StockRows;