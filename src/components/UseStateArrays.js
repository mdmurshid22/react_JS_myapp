// import React from 'react';
// import { UseStateArray } from 'react';
import { useState } from 'react';
function UseStateArrays()
{
  const [display,SetDisplay]=useState([]);
  // const names=["kuttyma",'idiot','k','Kutty','H',"H"];
  // const [Display,SetDisplay]=useState([names]);
  function My_fun()
  {
    const names=["kuttyma",'idiot','k','Kutty','H',"H"];
    SetDisplay(names);
  }
  const addoneplayer = () =>
  {
    const name1=["Idiot"];
    SetDisplay([...display,name1]);
  }
  return (
    <div>
    <h3>UseStateArrays</h3>
    {display.length && display.map((names)=>{
      return <li>{names}</li>;
    })}
    <button onClick={My_fun}>Click and Check Arrays Values!</button><br/>
    <button onClick={addoneplayer}>AddClick</button>
    </div>
  );
}
export default UseStateArrays;