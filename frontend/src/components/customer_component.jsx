import { useState } from "react";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

// Configura o elemento principal da aplicação
ReactModal.setAppElement('#root'); // ou o id do seu elemento principal

function ScheduleComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-xl rounded-lg py-3 px-4 my-4 sec-bg-color">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="m-0 text-white font-semibold text-base">
              Deftonerson Scrobblers
            </h3>
          </div>
          <div className="flex gap-4 mt-1 text-gray-300 text-sm">
            <p className="m-0">Since 04/22/2024</p>
          </div>
        </div>

        {/* Botão que abre o modal */}
        <button className="ml-5 px-3 rounded-lg highlights-color" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faInfo} />
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
              padding: "40px",
              borderRadius: "8px"
            },
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.6)"
            }
          }}
        >
          <h1 className="text-center text-xl font-bold">About the customer [customer_name]</h1>
          <p>Customer since 04/22/2024</p>
          <p>Last Schedule 08/22/2025</p>
          <p>Spent $999</p>
          <p>Phone number -199999999</p>
          <p></p>
          <p></p>

        </ReactModal>
      </div>
    </div>
  );
}

export default ScheduleComponent;
