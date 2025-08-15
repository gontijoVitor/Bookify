//página responsável por listar horarios do prestador de serviço
import Horario from "../components/horario.jsx"

function Horarios() {
    return(
        <div className="shadow-xl p-5 rounded-lg">
            <h1 className="text-center">Horários de hoje</h1>
            <Horario/>
            <Horario/>
            <Horario/>
        </div>
    )
}

export default Horarios;