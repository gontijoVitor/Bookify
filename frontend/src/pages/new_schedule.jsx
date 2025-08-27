import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Agendamento() {
  const [formData, setFormData] = useState({
    nome: '', telefone: '', email: '',
    servico: '', profissional: '',
    data: '', hora: '', observacoes: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        nome: formData.nome,
        telefone: formData.telefone,
        servico_id: formData.servico,
        usuario_id: formData.profissional,
        data: formData.data,
        hora: formData.hora,
        observacoes: formData.observacoes
      };

      const response = await axios.post('http://localhost:3001/agendar', payload);
      alert(response.data.mensagem);
    } catch (error) {
      console.error(error);
      alert('Erro ao enviar o formulário');
    }
  };

  return (
    <div className="shadow-xl p-5 rounded-lg">
      <h1 className="text-center text-xl font-bold">Agende seu horário</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        
        <div className="flex flex-col">
          <label htmlFor="nome">Digite seu nome completo</label>
          <input
            type="text"
            id="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome"
            className="border rounded-lg px-3 py-1"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="telefone">Digite seu telefone</label>
          <input
            type="text"
            id="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="DDD12345678"
            className="border rounded-lg px-3 py-1"
          />
        </div>
        
        <div className="flex flex-row gap-4 w-full">
          <div className="flex flex-col flex-1">
            <label htmlFor="servico">Selecione o serviço</label>
            <select
              id="servico"
              value={formData.servico}
              onChange={handleChange}
              className="border rounded-lg px-3 py-1"
            >
              <option value="">-- Escolha um serviço --</option>
              <option value="1">Corte tradicional (30 min)</option>
              <option value="2">Corte degradê (40 min)</option>
              <option value="3">Barba completa (30 min)</option>
              <option value="4">Sobrancelha (10 min)</option>
              <option value="5">Lavagem com massagem (15 min)</option>
              <option value="6">Camuflagem de fios (45 min)</option>
              <option value="7">Progressiva (90 min)</option>
              <option value="8">Corte + Barba (60 min)</option>
            </select>
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="profissional">Escolha o profissional</label>
            <select
              id="profissional"
              value={formData.profissional}
              onChange={handleChange}
              className="border rounded-lg px-3 py-1"
            >
              <option value="">-- Escolha um profissional --</option>
              <option value="1">Profissional 1</option>
              <option value="2">Profissional 2</option>
            </select>
          </div>
        </div>

        <div className="flex flex-row gap-4 w-full">
          <div className="flex flex-col flex-1">
            <label htmlFor="data">Escolha uma data</label>
            <input
              type="date"
              id="data"
              value={formData.data}
              onChange={handleChange}
              className="border rounded-lg px-3 py-1 w-full"
            />
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="hora">Escolha um horário</label>
            <input
              type="time"
              id="hora"
              value={formData.hora}
              onChange={handleChange}
              className="border rounded-lg px-3 py-1 w-full"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="observacoes">Observações</label>
          <textarea
            id="observacoes"
            value={formData.observacoes}
            onChange={handleChange}
            rows="3"
            placeholder="Digite algo relevante..."
            className="border rounded-lg px-3 py-1"
          />
        </div>

          {/* Botão Novo Agendamento */}
          <div className="mt-6 text-center ">
              <Link to="/">
                  <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline">
                      <FontAwesomeIcon icon={faChevronLeft} />
                      Voltar
                  </button>
              </Link>
              <Link to="/agendamento">
                  <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline">
                      <FontAwesomeIcon icon={faPlus} />
                      Realizar agendamento
                  </button>
              </Link>
          </div>
      </form>
    </div>
  );
}

export default Agendamento;
