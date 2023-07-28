import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState(0)
  const [abilities, setAbilities] = useState([])
function getData() {
  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(data => {
    console.log(data.name); // Process the data received from the server
    setName(data.name)
    console.log(data.abilities);
    let newAbilities = data.abilities.map(el=>el.ability.name)
    setAbilities(newAbilities)
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
  
}
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={getData()}>
          name is {name}
          abilities is {abilities}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
