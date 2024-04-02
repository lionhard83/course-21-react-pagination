import React, { memo, useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';





const List = memo((props: {func?: Function}) => {
  // props.func && props.func();
  return (
  <>
    <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  </>)
});
const x = new Set();

const App = () => {
  const [counter, setCounter] = useState<number>(0);
  const [refresh, setRefresh] = useState(false);  
  const f = useCallback(() => console.log("-->", counter), []);
  x.add(f);
  console.log('size:', x.size);
  
  
  return (
    <>
      <span>{counter}</span>
      <h1>Hello World</h1>
      <button onClick={() => setCounter(counter + 1)}>Incrementa</button>
      <button onClick={() => setRefresh(!refresh)}>Refresh</button>
      <List func={f}  />
    </>
  );
}

export default App;
