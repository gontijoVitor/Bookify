//página responsável por listar horarios do prestador de serviço
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function User_register() {
    return(
        <div className="shadow-xl p-5 rounded-lg">
            <h1 className="text-center font-bold">Cadastro</h1>
            <div className="space-y-4">
                <div className="flex flex-col">
                    <label for="name">Nome: </label>
                    <input type="name" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="flex flex-col">
                    <label for="email">Email: </label>
                    <input type="email" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="flex flex-col">
                    <label for="password">Senha: </label>
                    <input type="password" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="flex flex-col">
                    <label for="password">Repita a senha: </label>
                    <input type="password" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="flex items-center">
                    <input type="radio" id="cliente" name="user_type" className="mx-2" value="cliente" />
                    <label htmlFor="cliente">Cliente</label>
                </div>
                
                <div className="flex items-center">
                    <input type="radio" id="prestador" name="user_type" className="mx-2" value="prestador" />
                    <label htmlFor="prestador">Prestador</label>
                </div>
                {/* Botão Novo Agendamento */}
                <div className="mt-6 text-center ">
                    <Link to="/login">
                        <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline">
                            <FontAwesomeIcon icon={faUser} />
                            Já tenho conta
                        </button>
                    </Link>
                    <Link to="">
                        <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline">
                            <FontAwesomeIcon icon={faPlus} />
                            Criar conta
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default User_register;
