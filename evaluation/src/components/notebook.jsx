import React from 'react'
import  { useState } from 'react'
let Note_count
function Notebooks(props) {
     Note_count=props.value;
    const [count ,setCount]= useState(Note_count);
    const change=(value)=>{
        if(count+value>=0){
            setCount(count+value)
        }
        return
    }
  return (
    <div className="items">
    <span>Notebooks:</span>
    <button className="addNotebook"  onClick={()=>change(1)}>
        +
    </button>
    <button className="remNoteBook"  onClick={()=>change(-1)}>
        -
    </button>
    <span className="totalNotebooks">{count}</span>
</div>
  )
}

export {Notebooks,Note_count}