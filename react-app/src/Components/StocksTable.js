import React from 'react';
import { Table } from 'react-bootstrap';
import StocksRows from './StocksRows';


function StocksTable(props) {
    const data = props.stocks;

    if (props.sorted) {
        data.sort();
    } else {
        data.reverse();
    }

    return (
        <div>
            {/* Can sort by pressing thead */}
            <Table striped bordered hover size='sm'>
                <thead  onClick={() => props.setSorted(!props.sorted)}>
                    <tr>
                        <th>Stock Ticker Symbol</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((x, i) => <StocksRows key={i} data={x} setStock={(e) => props.setStock(e)}/>)}
                </tbody>
            </Table>
        </div>
    )
}

export default StocksTable;