import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Validator'
import { Susornot } from "../common/Val"


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <div className='flex justify-between'>
        <a href="https://vite.dev" target="_blank" >
          <img src={viteLogo} className="h-24 m-8 " alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 m-8" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card font-mono">
        <button onClick={() => setCount((count) => count + 1)}>
          count is { Susornot(count)} skibidis
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>



      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
