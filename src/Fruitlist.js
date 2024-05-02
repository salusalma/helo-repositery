import React, { useState } from 'react'

const Fruitlist = () => {
  const [search, setSearch] = useState('')
  const fruits = [
    'apple',
    'banana',
    'mango',
    'orange',
    'grape',
    'cherry',
    'milk',
    'butter',
    'tomatto',
  ]
  
  const filteredFruits = fruits.filter((fr) => 
    fr.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{marginLeft:'35rem'}}>
      <h2 style={{color:'blue', fontSize:'3rem',}}>Fruits Lists</h2>
      <input 
        type='text' 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />
      <ol>
        {filteredFruits.map((fr, ss) => (
          <li style={{color:'green', fontSize:'1.5rem'}} key={ss}>{fr}</li>
        ))}
      </ol>
    </div>
  )
}

export default Fruitlist
