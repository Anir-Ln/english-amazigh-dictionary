import React from 'react'
import { useRef } from 'react'

const SearchBox = ({handleSearchSubmit, handleSearchChange, lang}) => {
    const valueRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        valueRef.current.value = ''
        handleSearchSubmit()
    }

    return (
        <form action="" onSubmit={handleSubmit} className="search-form" role="search">
            {/* <label htmlFor="search">Search for a word</label> */}
            <input type="search" placeholder={`Write an ${lang} word...`} ref={valueRef} className='input-search' onChange={e => handleSearchChange(e.target.value.trim())}/>
            <button type="submit">Search</button>
            
            <div className="autocom-box">
                
            </div>
        </form>
    )
}

export default SearchBox