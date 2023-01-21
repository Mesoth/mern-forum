import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "./App.css";

function useFetchTopics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTopics() {
      const response = await fetch("http://localhost:5000/topics");
      const newTopics = await response.json();
      setTopics(newTopics);
      setIsLoading(false);
    }
    fetchTopics();
  }, []);

  return { topics, isLoading };
}

function App() {
  const { topics, isLoading } = useFetchTopics();

  return (
    <div className="App">
      {isLoading ? (
        <div className="carga-container">
          <h1>Cargando...</h1>
          <div class="custom-loader"></div>
        </div>
      ) : (
        <div>
          <h1 className="title">Welcome to your favorite manga forum</h1>
          <ul className="topics-container">
            {topics.map((topic) => {
              return (
                <li key={topic._id}>
                  <Link className="topic" to={topic._id}>
                    {topic.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
