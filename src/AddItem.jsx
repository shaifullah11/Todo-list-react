import { FaPlus } from 'react-icons/fa'
import React from 'react'
export const AddList = ({  newItem, setNewItem, handleSubmit }) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input type="text"
        placeholder='Add Item'
        required
        id='addItem'
        value={newItem}
        onChange={(e)=>{setNewItem(e.target.value)}}
        autoFocus />
      <button type='submit' aria-label='Add Item'>
        <FaPlus 
        />
      </button>
    </form>
  )
}
