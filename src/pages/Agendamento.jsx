import { useState } from 'react'
import './Agendamento.css'

function Agendamento() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form className='shadow-sm border-solid rounded p-5'>
        <h1>Agende seu horário</h1>
        <div className='m-2'>
          <label for='nome'>Digite seu completo</label><br/>
          <input className='rounded p-1' type='text' id='nome' placeholder='Seu nome' />
        </div>
        <div>
          <label for='telefone'>Digite seu telefone</label><br/>
          <input type='text' id='telefone' placeholder='DDD12345678'/>
        </div>
        <div>
          <label for='email'>Digite seu email</label><br/>
          <input type='email' id='email' placeholder='email@gmail.com'/>
        </div>
        <div>
          <label for='servico'>Selecione o serviço</label><br/>
          <select id='servico'>
            <option>Corte tradicional (30 min)</option>
            <option>Corte degradê (40 min)</option>
            <option>Barba completa (30 min)</option>
            <option>Sobrancelha (10 min)</option>
            <option>Lavagem com massagem (15 min)</option>
            <option>Camuflagem de fios (45 min)</option>
            <option>Progressiva (90 min)</option>
            <option>Corte + Barba (60 min)</option>
          </select>
        </div>
        <div>
          <label for='profissional'>Escolha o profissional</label><br/> {/*Detalhe, o valor dos serviços variam de acordo com o profissional*/}
          <select id='profissional'>
            <option>Profissional 1</option>
            <option>Profissional 2</option>
          </select>
        </div>
        <div>
          <label for='data'>Escolha uma data</label><br/>
          <input id='data' type='date'/>
        </div>
        <div>
          <label for='hora'>Escolha um horário</label><br/>
          <input id='hora' type='time'/>
        </div>
        <div>
          <label for='obs'>Observações?</label><br/>
          <textarea id='obs'/>
        </div>
        <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 px-4 rounded-ful size-16' type='submit' value='Marcar horário'></input>
      </form>
    </>
  )
}

export default Agendamento
