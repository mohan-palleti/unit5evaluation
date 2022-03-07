import React, { useState } from 'react'
let Books_count

 function Books(props) {
 
    const [Count ,setCount]= useState(props.value);
    Books_count=Count
    const change=(value)=>{
        if(Count+value>=0){
            setCount(Count+value)
            
        }
        

        return
    }
  return (
    <div className="items">
    <span>Books:</span>
    <button className="addBook" onClick={()=>change(1)}>
        +
    </button>
    <button className="remBook"  onClick={()=>change(-1)}>
        -
    </button>
    <span className="totalBooks">{Count}</span>
</div>
  )
} 

export {Books, Books_count }
