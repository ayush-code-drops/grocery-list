import React from 'react'
import styles from './list.module.css'
function GroceryList({li,onClick}) {
  return (
      <div className={styles.listdiv}>
          {
              li?.map((item) => {
                  return (
                      <div key={item.id} className={styles.listComp} >
                          <li>{item.title}</li>
                          <button onClick={()=>onClick(item.id)}>Delete Item</button>
                      </div>
                  )
              })
          }
     </div>
  )
}

export default GroceryList