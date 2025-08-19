import { useState } from "react";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

// Configura o elemento principal da aplicação
ReactModal.setAppElement('#root'); // ou o id do seu elemento principal

function Horario() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-xl rounded-lg py-3 px-4 my-4 bg-[#3d3d3d]">
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
        <button onClick={() => setIsOpen(true)}>
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
              background: "#fff",
              padding: "20px",
              borderRadius: "8px"
            },
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.6)"
            }
          }}
        >
          <h2>Meu Modal</h2>
          <p>Conteúdo do modal aqui!</p>
          <button onClick={() => setIsOpen(false)}>Fechar</button>
        </ReactModal>
      </div>
    </div>
  );
}

export default Horario;
