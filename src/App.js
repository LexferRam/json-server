import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:3001/posts')
      console.table(res.data)
      setData(res.data)
    })()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {data.map(ele => (
          <p key={ele.id}>{ele.title}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
