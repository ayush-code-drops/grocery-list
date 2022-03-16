import React, { useState } from 'react'

function GroceryInput({onClick}) {
    const [query, setQuery] = useState("")
   
  return (
      <div>
          <input type="text"
              placeholder='Add grocery Item'
              onChange={(e) => setQuery(e.target.value)}
              value={query}
          />
          <button onClick={()=>onClick(query)}>Add</button>
    </div>
  )
}

export default GroceryInput