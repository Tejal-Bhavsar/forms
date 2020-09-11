import React, { useState } from 'react';
 
import './App.css';
//import Form2 from './Form2';

function App() {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ fullName , setFullName] = useState("");
  const [lastNewName, setLastNewName] = useState("");

  const onSubmit = (event) => {
      event.preventDefault();
      setFullName(name)
      setLastNewName(lastName)
      
  }

  const inputEvent = (event) => {
      setName(event.target.value)
  }

  const inputEvent2 = (event) => {
      setLastName(event.target.value)
  }
  
  return (
    <form onSubmit={onSubmit}>
    <div>
    <h1> Hello {fullName} {lastNewName} </h1>
    <input type="text" 
    placeholder="enter your first name"
    value={name}
    onChange={inputEvent}
    />

   <input type="text" 
    placeholder="enter your first name"
    value={lastName}
    onChange={inputEvent2}
    />
   
   <button type="submit"> Submit Me </button>
   </div>

   </form>
  );
}

export default App;
