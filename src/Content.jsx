import React from 'react'
import './App.css';
import ItemsList from './ItemsList';
const Content = ({ items, handleCheck, handleDelete}) => {

  return (
    <div className='Content-item'>
      {(items.length) ?
        (<ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete} />) :
        <p style={{ textAlign: 'center' }}>Your list is empty</p>
      }
    </div>

  )
}

export default Content