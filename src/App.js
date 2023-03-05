import React, { useState } from "react";
import ClassCounter from "./components/classCounter";
import Counter from "./components/counter";

function App() {  

    const [value , setValue] = useState('text');

  return (
    <div className="App">
       <ClassCounter/>
    </div>
  )
}

export default App;
