import React from 'react'
import  { useState } from 'react'
let Pen_count
 function Pens(props) {
    Pen_count =props.value;
    const [count ,setCount]= useState(Pen_count);
    const change=(value)=>{
        if(count+value>=0){
            setCount(count+value)
        }
        return
    }
  return (
    <div className="items">
    <span>Pens:</span>
    <button className="addPen"  onClick={()=>change(1)}>
        +
    </button>
    <button className="remPen"  onClick={()=>change(-1)}>
        -
    </button>
    <span className="totalPens">{count}</span>
</div>
  )
}

export {Pens,Pen_count}

