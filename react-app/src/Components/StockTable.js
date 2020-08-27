import React from 'react';
import { Table } from 'react-bootstrap';
import StockRows from './StockRows';


function StockTable(props) {
    return (
        <div>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Datetime</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(props.data).map((key, index) => (
                            <StockRows key={index} time={key} price={props.data[key]}/>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default StockTable;