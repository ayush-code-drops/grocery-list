import React, { useState } from 'react'
import GroceryInput from './GroceryInput'
import GroceryList from './GroceryList'

function Grocery() {
    const [list, setList] = useState([]);

    const handleAdd = (query) => {
        let payload = {
            id: list.length + 1,
            title: query,
        }
        let updatedList = [...list, payload]
        setList(updatedList)
    }

    const handleDelete = (id) => {
        let updatedLst = list.filter((item) => item.id !== id)
    setList(updatedLst)
    }
  return (
      <div>
          <GroceryInput onClick={handleAdd} />
          <GroceryList li={list} onClick={handleDelete}/>
    </div>
  )
}

export default Grocery