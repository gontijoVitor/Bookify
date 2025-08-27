import { useState } from "react";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

// Configura o elemento principal da aplicação
ReactModal.setAppElement('#root'); // ou o id do seu elemento principal

function Horario() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-xl rounded-lg py-3 px-4 my-4 bg-[#112240]">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="m-0 text-white font-semibold text-base">
              Deftonerson Scrobblers - Corte simples
            </h3>
            <FontAwesomeIcon icon={faNoteSticky} size="xs" className="text-white" />
          </div>
          <div className="flex gap-4 mt-1 text-gray-300 text-sm">
            <p className="m-0">15:00 - 15:45</p>
            <p className="m-0">Profissional: Higor</p>
          </div>
        </div>

        {/* Botão que abre o modal */}
        <button className="destaques-color" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faEllipsisVertical} size="xl" className="text-gray-400 cursor-pointer my-auto ml-5" />
        </button>

        {/* Modal */}
        <ReactModal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              transform: "translate(-50%, -50%)",
              background: "#112240",
              padding: "20px",
              borderRadius: "8px"
            },
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.6)"
            }
          }}
        >
          <h1 className="text-center text-xl font-bold">Informações do horário</h1>

          <form className="space-y-4 mt-4">            
            <div className="flex flex-row gap-4 w-full">
              <div className="flex flex-col flex-1">
                <label htmlFor="servico">Serviço</label>
                <select
                  id="servico"
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
                <label htmlFor="profissional">Profissional</label>
                <select
                  id="profissional"
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
                <label htmlFor="data">Data</label>
                <input
                  type="date"
                  id="data"
                  className="border rounded-lg px-3 py-1 w-full"
                />
              </div>

              <div className="flex flex-col flex-1">
                <label htmlFor="hora">Horário</label>
                <input
                  type="time"
                  id="hora"
                  className="border rounded-lg px-3 py-1 w-full"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="observacoes">Observações</label>
              <textarea
                id="observacoes"
                rows="3"
                placeholder="Digite algo relevante..."
                className="border rounded-lg px-3 py-1"
              />
            </div>
          </form>
          <div className="my-4 flex justify-center">
            <button className="destaques-color">Editar</button>
            <button className="destaques-color">Marcar como concluido</button>
            <button className="destaques-color">Remover horário</button>
          </div>
            <button className="destaques-color" onClick={() => setIsOpen(false)}>Fechar</button>
        </ReactModal>
      </div>
    </div>
  );
}

export default Horario;
