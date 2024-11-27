import GroceryList from './GroceryList'
import {useState} from 'react'
import Form from './Form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {nanoid} from 'nanoid';
const setLocalStorage=(items)=>{
  localStorage.setItem('list',JSON.stringify(items));
}
const getLocalStorage=()=>{
 const newItem= localStorage.getItem('list');
 if(newItem)
 {
  var newItems=JSON.parse(newItem);
 }
 else
 {
  var newItems=[];
 }
 return newItems;
}
const defaultState=JSON.parse(localStorage.getItem('list')) || [];
const App = () => {
  
  const [text,setItems]=useState(defaultState);
  const editItem=(id)=>{
      const newItems=text.map((t)=>{
        if(t.id===id)
        {
          const newItem={...t,completed:!t.completed};
          
          return newItem;
        }
        return t;
      });
      
      setItems(newItems);
      setLocalStorage(newItems);
  }
  const addItem=(inputText)=>{
    
    if(inputText.trim()!=="")
    {
      const newItem={
        name:inputText,
        completed:false,
        id:nanoid()
      }
      toast.success('Item Added To The List');
      const newItems=[...text,newItem];
      setItems(newItems);
      setLocalStorage(newItems);
    }
    else
    {
      toast.error('Please Provide Value');
    }
  }
  const deleteItem=(id)=>{
   
    const newItems=text.filter((t)=>
    {
      if(t.id!==id)
        return t;
    });
    
    toast.success('Item Deleted');
    setItems(newItems);
    setLocalStorage(newItems);
  }
  return <section className="section-container" >
    <Form addItem={addItem}/>
    <GroceryList text={text} deleteItem={deleteItem} editItem={editItem}/>
    <ToastContainer position='top-center'/>
  </section>
};

export default App;
