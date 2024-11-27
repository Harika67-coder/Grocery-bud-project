import React from 'react'

const GroceryList = ({text,deleteItem,editItem}) => {
  return <section>
    {text.map((t)=>{
      return <article key={t.id}>
        <div className='grocery-item'>
        <input type="checkbox" onChange={()=>{
          editItem(t.id);
        }}/>
        <p style={{textDecoration:t.completed?"line-through":"none"}}>{t.name}</p>
        <button className='delete-btn' onClick={()=>{
           deleteItem(t.id);
        }}>Delete</button>
        </div>
      </article>
    })}
  </section>
}

export default GroceryList