import React from 'react'

function Search(props) {
    return (
        <div className='Search'>
            <h1>This is the search page. The search term was {props.term}</h1>
        </div>
    )
}

export default Search