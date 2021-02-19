import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Todo = () => {
  const [items, setItems] = useState([])
  const [itemName, setItemName] = useState('')

  const addItem = e => {
    e.preventDefault()
    setItems([
      ...items,
      {
        id: uuidv4(),
        name: itemName
      }
    ])
    setItemName('')
  }

  const deleteItem = e => {
    // items.splice(e.target.name, 1)
    // console.log(event.target)
    const filteredItems = items.filter(item => item.id != e.target.name)
    setItems(filteredItems)
  }

  // useEffect(() => {
  //   console.log('test')
  // }, [items])

  return (
    <div>
      <h1>ToDoList</h1>

      <form onSubmit={addItem}>
        <label>
          <input
            name='item'
            type='text'
            value={itemName}
            onChange={e => setItemName(e.target.value)}
          />
          <button type='submit'> Add</button>
        </label>
      </form>

      {items.map(item => (
        <div key={item.id}>
          <p>- {item.name}</p>
          <button name={item.id} onClick={deleteItem}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Todo
