import { useState } from 'react'
import './App.css'
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { SearchItem } from './SearchItem';
import {AddList} from './AddItem'
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('todo_list')) === null? 0:JSON.parse(localStorage.getItem('todo_list'))
  );
  console.log(JSON.parse(localStorage.getItem('todo_list')));
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const AddItem = (item) => {
    let id = items.length === 0 ? 0 : items[items.length - 1].id + 1
    const value = { id: id, checked: false, item: item }
    const newlist = [...items, value]
    setItems(newlist)
    localStorage.setItem('todo_list', JSON.stringify(newlist))
  }
  const handleCheck = (id) => {
    const newlist = items.map(
      (item) => item.id === id ?
        { ...item, checked: !item.checked } : item)
    setItems(newlist)
    localStorage.setItem('todo_list', JSON.stringify(newlist))
  }
  const handleDelete = (id) => {
    const newList = items.filter((item) => (
      item.id !== id
    ))
    setItems(newList)
    localStorage.setItem('todo_list', JSON.stringify(newList))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    AddItem(newItem)
    setNewItem('')
  }
  return (
    <>
      <div className="App">
        <div className="App-Header">
          <Header />
        </div>
        <div className="App-Content">
          <SearchItem
            search={search}
            setSearch={setSearch}
          />
          <AddList
            newItem={newItem}
            setNewItem={setNewItem}
            handleSubmit={handleSubmit} />
          <Content
            items={items.filter(item => (item.item).toLowerCase().
              includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            setItems={setItems}
          />
        </div>
        <div className="App-Footer">
          <Footer length={items.length} />
        </div>
      </div>
    </>
  )
}

export default App
