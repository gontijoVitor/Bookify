//página de login de usuario
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCalendarAlt, faUser, faClock, faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Dashboard() {
    var tipoUser = "prestador"
    if(tipoUser == "prestador"){
        return(
            <div className="shadow-xl p-5 rounded-lg">
                {/* Cabeçalho */}
                <div className="mb-6">
                    <h1 className="text-center font-bold">Dashboard do Profissional</h1>
                    <p className="text-gray-400 text-center">Bem-vindo, Higor! Aqui está o resumo do seu dia.</p>
                </div>

                {/* Cards de Resumo */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="shadow-lg rounded-lg p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-400">Agendamentos Hoje</p>
                            <h2 className="text-2xl font-bold">5</h2>
                        </div>
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-yellow-400 text-2xl" />
                    </div>

                    <div className="shadow-lg rounded-lg p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-400">Clientes Atendidos</p>
                            <h2 className="text-2xl font-bold">3</h2>
                        </div>
                        <FontAwesomeIcon icon={faUser} className="text-green-400 text-2xl" />
                    </div>

                    <div className="shadow-lg rounded-lg p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-400">Próximo Horário</p>
                            <h2 className="text-lg font-bold">15:30</h2>
                        </div>
                        <FontAwesomeIcon icon={faClock} className="text-blue-400 text-2xl" />
                    </div>
                </div>

                {/* Lista de Agendamentos */}
                <div className="shadow-lg rounded-lg p-5">
                    <h2 className="text-xl font-bold mb-4">Agendamentos de Hoje</h2>

                    {[1, 2, 3].map((item, index) => (
                        <div
                            key={index}
                            className="shadow-lg rounded-lg p-4 mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div>
                                <p className="font-bold">Deftonerson Scrobblers - Corte simples</p>
                                <p className="text-gray-400 text-sm">15:00 - 15:45</p>
                            </div>
                            <button className="mt-2 sm:mt-0 px-3 py-1 rounded-lg text-sm">
                                Ver Detalhes
                            </button>
                        </div>
                    ))}
                </div>

                {/* Botão Novo Agendamento */}
                <div className="mt-6 text-center ">
                    <Link to="/horarios">
                        <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline">
                            <FontAwesomeIcon icon={faList} />
                            Todos os agendamentos
                        </button>
                    </Link>
                    <Link to="/agendamento">
                        <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline">
                            <FontAwesomeIcon icon={faPlus} />
                            Novo Agendamento
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
    else if(tipoUser == "cliente"){
        return(
            <div className="shadow-xl p-5 rounded-lg">
                {/* Cabeçalho */}
                <div className="mb-6">
                    <h1 className="text-center font-bold">Dashboard do cliente </h1>
                    <p className="text-gray-400 text-center">Bem-vindo, Deftonerson Scrobblers! Aqui está o resumo do seu dia.</p>
                </div>

                {/* Cards de Resumo */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="shadow-lg rounded-lg p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-400">Próximo Horário</p>
                            <h2 className="text-lg font-bold">15:30</h2>
                        </div>
                        <FontAwesomeIcon icon={faClock} className="text-blue-400 text-2xl" />
                    </div>
                </div>

                {/* Lista de Agendamentos */}
                <div className="shadow-lg rounded-lg p-5">
                    <h2 className="text-xl font-bold mb-4">Próximos agendamentos</h2>
                        <div className="shadow-lg rounded-lg p-4 mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="font-bold">Higor - Corte simples</p> {/* nome do prestador de serviço */}
                                <p className="text-gray-400 text-sm">15:00 - 15:45</p>
                            </div>
                            <button className="mt-2 sm:mt-0 px-3 py-1 rounded-lg text-sm">
                                Ver Detalhes
                            </button>
                        </div>
                </div>

                {/* Botão Novo Agendamento */}
                <div className="mt-6 text-center ">
                    <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline">
                        <FontAwesomeIcon icon={faList} />
                        Todos meus agendamentos
                    </button>
                    <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline">
                        <FontAwesomeIcon icon={faPlus} />
                        Novo Agendamento
                    </button>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="shadow-xl p-5 rounded-lg">
                <h1 className="text-center">Dashboard</h1>
                <p>
                    Um erro EXTREMAMENTE inexperado ocorreu
                </p>
            </div>
        )
    }

}

export default Dashboard;