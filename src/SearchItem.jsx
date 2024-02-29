import React from 'react'

export const SearchItem = ({search,setSearch}) => {
    return (
        <form action="" onSubmit={(e) => { e.preventDefault() }} className='searchForm'>
            <label htmlFor="search">Search</label>
            <input type="text"
                id='search'
                role='searchbox'
                placeholder='Search Items'
                value = {search}
                onChange={(e)=> setSearch(e.target.value)}
            />
        </form>
    )
}
