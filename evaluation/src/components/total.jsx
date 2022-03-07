import React from 'react'
import { Books_count  } from "./books";
import { Inkpens_count } from "./inkpen";
import { Note_count } from "./notebook";
import { Pen_count } from "./pens";

function Total() {
    let sum=Books_count+Inkpens_count+Note_count+Pen_count
  return (
    <div className="total">{sum}</div>
  )
}

export  {Total}