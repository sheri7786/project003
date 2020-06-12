import React from 'react'
import Hello from "./hello"
 function App({name,age}) {
  return (
    <div>
      Hello world! {name} age={age}
      <br></br>
      <Hello firstname={name}></Hello>
    </div>
  )
}

export default App;

