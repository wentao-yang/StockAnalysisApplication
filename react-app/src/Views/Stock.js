import React from 'react'

function Stock(props) {
    return (
        <div className='Stock'>
            <h1>The stock is {props.stock}</h1>
        </div>
    )
}

export default Stock