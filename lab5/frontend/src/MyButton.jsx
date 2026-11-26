// rafce
import React from 'react'
let click =0;

const mybutton = () => {
    const handleClick=() =>{
       // alert("button clicked");
        click++;
        console.log("Button clicked:" ,click);
    }
  return (
    <div>
        <p>CLick on the button</p>
        <h2>Button clicked: {click}</h2>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default mybutton