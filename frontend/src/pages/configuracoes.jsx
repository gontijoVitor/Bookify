// O uso varia de acordo com o usuário
// Prestador: Edita informações pessoais e senha, edita serviços(nome, tempo, valor), edita disponibilidade dos horarios.
// Cliente: Edita informações pessoais e senha
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from "@fortawesome/free-solid-svg-icons";

function Config() {
    var tipoUser = "cliente";
    if(tipoUser == "prestador"){
        return(
            <div className="shadow-xl p-5 rounded-lg">
                <h1 className="text-center">Configurações</h1>
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <label for="name">Nome: </label>
                        <input type="name" className="border rounded-lg px-3 py-1" />
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <h2>Disponibilidade de horarios</h2>
                            <label for="email">Início: </label>
                            <input type="range" className="border rounded-lg px-3 py-1" />
                            <label for="email">Fim: </label>
                            <input type="range" className="border rounded-lg px-3 py-1" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Serviços prestados</h2>
                        <FontAwesomeIcon icon={faPen} size="xs" className="text-white" />
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="servico-corte" name="servicos" value="Corte" />
                                <label htmlFor="servico-corte" className="text-sm">Corte</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="servico-barba" name="servicos" value="Barba" />
                                <label htmlFor="servico-barba" className="text-sm">Barba</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="servico-sobrancelha" name="servicos" value="Sobrancelha" />
                                <label htmlFor="servico-sobrancelha" className="text-sm">Sobrancelha</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Alterar senha</h2>
                        <div className="flex flex-col">
                            <label for="password">Senha: </label>
                            <input type="password" className="border rounded-lg px-3 py-1" />
                        </div>
                        <div className="flex flex-col">
                            <label for="password">Repita a senha: </label>
                            <input type="password" className="border rounded-lg px-3 py-1" />
                        </div>
                    </div>

                    <button className="mx-auto">Salvar alterações</button>
                </div>
            </div>
        )
    }
    else if(tipoUser == "cliente"){
        return(
            <div className="shadow-xl p-5 rounded-lg">
                <h1 className="text-center">Configurações</h1>
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <label for="name">Nome: </label>
                        <input type="name" className="border rounded-lg px-3 py-1" />
                    </div>
                    <div>
                        <h2>Alterar senha</h2>
                        <div className="flex flex-col">
                            <label for="password">Senha: </label>
                            <input type="password" className="border rounded-lg px-3 py-1" />
                        </div>
                        <div className="flex flex-col">
                            <label for="password">Repita a senha: </label>
                            <input type="password" className="border rounded-lg px-3 py-1" />
                        </div>
                    </div>

                    <button className="mx-auto">Salvar alterações</button>
                </div>
            </div>
        )
    }

}

export default Config;
