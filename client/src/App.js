import React, { useEffect, useState } from 'react'
import './index.css'
import './App.css'

function useFetchTopics() {
  const [topics, setTopics] = useState([])
  
  useEffect(() => {
    async function fetchTopics(){
      const response = await fetch('http://localhost:5000/topics')
      const newTopics = await response.json()
      setTopics(newTopics)
    }
    fetchTopics()
  }, [])

  return topics
}

function App() {

  const topics = useFetchTopics()

  return (
    <div className="App">
      <h1 className="title">Welcome to your favorite manga forum</h1>
      <ul className="topics-container">
        {topics.map( topic => {
          return <li key={topic._id}>{topic.title}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
