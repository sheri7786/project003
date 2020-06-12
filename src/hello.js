import React from 'react'
import "./Hello.css"
 function Hello({firstname}) {
  return (
    <p className="myname">
      this is paragraph {firstname} 
    </p>
  )
}
export default Hello;

