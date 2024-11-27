import React from 'react'
import {useState} from 'react'
const Form = ({addItem}) => {
  const [inputText,setInputText]=useState('');
  return <form onSubmit={(e)=>{
    e.preventDefault();
    setInputText('');
    addItem(inputText);
  }}>
  <h4 style={{textAlign:"center"}}>Grocery Bud</h4>
  <input type="text" value={inputText} className='text-input' onChange={(e)=>{
    setInputText(e.target.value);
  }}/>
  <button className='add-item-btn' type="submit">Add Item</button>
  </form>
}

export default Form