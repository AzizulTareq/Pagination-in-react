import React from 'react'

const Pagination = ({ totalPages, handleClick }) => {
    const pages = [...Array(totalPages).keys()].map(num => num+1)
    return (
        <div style={{padding: '30px', display: 'flex',   justifyContent: 'center'}}>
            {pages.map(num => (
                <button className="ui button" 
                key={num}
                onClick={() => handleClick(num)}
                >
                {num}
                </button>
            ))}
        </div>
    )
}

export default Pagination

