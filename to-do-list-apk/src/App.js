import React, { useState } from "react";
import Todolist from "./componet/todolist";
import Addtask from './componet/Addtask';
import './App.css';

function App() {

  const [listtodo, setlisttodo] = useState([]);
  const  addtask= (intputlist) => {
    if(intputlist!==""){
      setlisttodo([...listtodo, intputlist]);
    }
    
  }
  const deletlistitem = (key)=>{
    const newlisttodo = [...listtodo];
    newlisttodo.splice(key,1)
    setlisttodo([...newlisttodo])
  }
  return (
    <>
      <div className='main-container'>
        <h1>To-Do-list Apk</h1>
      </div>
      <Addtask Addtask={addtask} />
      {listtodo.map((listitem,i)=>{
        return(<Todolist  key={i} index= {i} item={listitem} deletlistitem={deletlistitem} /> ) 
      })}
      
    </>
  );
}

export default App;
