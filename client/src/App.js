import React, { useEffect, useState } from 'react';
import './index.css';
import './App.css';

function App() {

  const [topics, setTopics] = useState([])

  useEffect(() => {
    async function fetchTopics(){
      const response = await fetch('http://localhost:3000/topics')
      const newTopics = await response.json()
      setTopics(newTopics)
    }
    fetchTopics()
  }, [])

  return (
    <div className="App">
      <h1 className="title">Welcome to your favorite manga forum</h1>
    </div>
  );
}

export default App;
