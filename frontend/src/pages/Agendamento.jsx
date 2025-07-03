import { useState } from 'react'
import axios from 'axios'

function Agendamento() {
  const [formData, setFormData] = useState({
    nome: '', telefone: '', email: '',
    servico: '', profissional: '',
    data: '', hora: '', observacoes: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3001/agendar', formData)
      alert(response.data.mensagem)
    } catch (error) {
      console.error(error)
      alert('Erro ao enviar o formulário')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <form className="w-full max-w-md bg-gray-800 text-white rounded-lg shadow-lg p-8 space-y-5" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-center text-white">Agende seu horário</h1>

        <div>
          <label htmlFor="nome" className="block mb-1">Digite seu nome completo</label>
          <input
            type="text"
            id="nome"
            placeholder="Seu nome"
            className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="telefone" className="block mb-1">Digite seu telefone</label>
          <input
            type="text"
            id="telefone"
            placeholder="DDD12345678"
            className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">Digite seu email</label>
          <input
            type="email"
            id="email"
            placeholder="email@gmail.com"
            className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="servico" className="block mb-1">Selecione o serviço</label>
          <select
            id="servico"
            className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
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
          <label htmlFor="profissional" className="block mb-1">Escolha o profissional</label>
          <select
            id="profissional"
            className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Profissional 1</option>
            <option>Profissional 2</option>
          </select>
        </div>

        <div>
          <label htmlFor="data" className="block mb-1">Escolha uma data</label>
          <input
            type="date"
            id="data"
            className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="hora" className="block mb-1">Escolha um horário</label>
          <input
            type="time"
            id="hora"
            className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="obs" className="block mb-1">Observações</label>
          <textarea
            id="obs"
            rows="3"
            className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite algo relevante..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition duration-200"
        >
          Marcar horário
        </button>
      </form>
    </div>
  )
}

export default Agendamento
