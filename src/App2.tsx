import React, { memo, useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Panel: React.FC<{title: string}> = (props) => {
  return <li>{props.title}</li>
}

type Post = {
  id: number,
  userId: number,
  title: string,
  body: string
}

const List = memo(() => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((res: Post[]) => setPosts(res));
  }, []);
  return <ul>
    {posts.map((item, index) => <Panel key={index} title={item.title}></Panel>)}
  </ul>
})

const ComponentWithSetTitle: React.FC<{setTitle: Function}> = memo(() => {
  return <div>ComponentWithSetTitle</div>
});

const memory = new Set();

const App = () => {
  const [value, setValue] = useState<number>(0);

  const setTitle =  useCallback(() => {
    document.title = 'Hello world!';
  }, []);
  memory.add(setTitle);
  console.log(memory.size);

  return (
  <>
    <button onClick={() => setValue(Math.random())} >Random {value}</button>
    <ComponentWithSetTitle setTitle={setTitle} />
    {value && <List />}
    </>
  );
}

export default App;
