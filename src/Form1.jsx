import React, { useState } from 'react';

const Form1 = () => {
    const [name,setName] = useState();
    const [fullName , setFullName] = useState();

    const inputEvent = (event) => {
        setName(event.target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setFullName(name)
    }

    return ( 
     <>
      <form onSubmit={onSubmit}> 
        <div className="form1div">
        <h1> Hello {fullName} </h1>
        <input  type="text" defaultvalue="" placeholder="enter your name" value={name} onChange={inputEvent}/>

        <button type="submit">CLICK ME</button>
        </div>
      </form>
     </>
    );

}

export default Form1;
