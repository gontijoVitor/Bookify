import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='shadow p-5 rounded'>
        <h1>Agende seu horário</h1>
        <div className='m-2'>
          <p className='m-0'>Digite seu completo: </p>
          <input className='rounded p-1' type="text" placeholder="Digite seu nome" />
        </div>
        <div className='m-2'>
          <p className='m-0'>Digite seu número: </p>
          <input className='rounded p-1' type="text" placeholder="Digite seu número" /><br/>
        </div>
        <input className='btn btn-success m-3' type="submit" value="Marcar horário"></input>
      </div>
    </>
  )
}

export default App
