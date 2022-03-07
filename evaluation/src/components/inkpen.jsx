import React from 'react'
import { useState } from 'react'
let Inkpens_count
function Inkpens(props) {
     Inkpens_count=props.value;
    const [count ,setCount]= useState(Inkpens_count);
    const change=(value)=>{
        if(count+value>=0){
            setCount(count+value)
        }
        return
    }
  return (
    <div className="items">
    <span>Inkpens:</span>
    <button className="addInkpen"  onClick={()=>change(1)}>
        +
    </button>
    <button className="remInkpen"  onClick={()=>change(-1)}>
        -
    </button>
    <span className="totalInkpens">{count}</span>
</div>
  )
}

export {Inkpens, Inkpens_count}

