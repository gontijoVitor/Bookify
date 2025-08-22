import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Nome */}
          <div className="flex-shrink-0 text-xl font-bold text-white">
            Bookify
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">Dashboard</a>
            <a href="#" className="text-gray-300 hover:text-white">Agendamentos</a>
            <a href="#" className="text-gray-300 hover:text-white">Clientes</a>
          </div>

          {/* Ícone de Usuário */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-lg hover:bg-gray-700">
              <FontAwesomeIcon icon={faUserCircle} className="text-gray-300 text-xl" />
              <span className="text-sm text-gray-200">Perfil</span>
            </button>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-2 pb-3 space-y-2">
          <a href="#" className="block text-gray-300 hover:text-white">Dashboard</a>
          <a href="#" className="block text-gray-300 hover:text-white">Agendamentos</a>
          <a href="#" className="block text-gray-300 hover:text-white">Clientes</a>
          <button className="w-full flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg">
            <FontAwesomeIcon icon={faUserCircle} className="text-gray-300 text-lg" />
            <span className="text-sm text-gray-200">Perfil</span>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Topbar;
