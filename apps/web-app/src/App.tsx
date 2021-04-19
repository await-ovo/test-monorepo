import React, {useState} from 'react';
import {addOne} from 'common-tools';
import { add } from './utils';

console.log(`add(1,2) : ${add(1,2)}`)

const App = () => {
  const [num, setNum] = useState(0);
  
  const handleClick = () => {
    setNum(prev => addOne(prev));
  }

  return (
    <div>
      <h1>current number: {num}</h1>
      <button type="button" onClick={handleClick}>addOne</button>
    </div>
  )
}

export default App;