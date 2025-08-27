//página responsável por listar horarios do prestador de serviço
import Horario from "../components/horario.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Horarios() {
    return(
        <div className="shadow-xl p-5 rounded-lg">
            <h1 className="text-center">Todos os agendamentos</h1>
            <Horario/>
            <Horario/>
            <Horario/>
            <div className="mt-6 text-center ">
                <Link to="/">
                    <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline destaques-color">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        Voltar
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Horarios;