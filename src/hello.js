import React from 'react'
import "./Hello.css"
 function Hello({firstname}) {
  return (
    <h1>Practice task</h1>
    <br></br>
    <p className="myname">
      this is paragraph {firstname} 
    </p>
  )
}
export default Hello;

