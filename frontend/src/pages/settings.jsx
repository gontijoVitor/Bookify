// O uso varia de acordo com o usuário
// Prestador: Edita informações pessoais e senha, edita serviços(nome, tempo, valor), edita disponibilidade dos horarios.
// Cliente: Edita informações pessoais e senha
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from "@fortawesome/free-solid-svg-icons";

function Settings() {
    var tipoUser = "prestador";
    if(tipoUser == "prestador"){
        return(
            <div className="sec-bg-color shadow-xl rounded-lg" style={{padding: "40px"}}>
                <h1 className="text-center font-bold">Settings</h1>
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Personal info</h2>
                    <div className="flex flex-col my-3">
                        <label for="name">Name: </label>
                        <input type="name" id="name" className="border rounded-lg px-3 py-1" />
                    </div>
                    <div className="flex flex-col my-3">
                        <label for="phone">Phone number: </label>
                        <input type="text" id="phone" className="border rounded-lg px-3 py-1" />
                    </div>

                    <div class="flex items-center space-x-4">
                        <div className="flex flex-col">
                            <div>
                                <h2 className="text-3xl font-bold">Schedule availability</h2>
                                <div>
                                    <label for="schedule-start">Start: </label>
                                    <input type="range" id="schedule-start" className="border rounded-lg px-3 py-1" />
                                </div>
                                <div>
                                    <label for="schedule-end">End: </label>
                                    <input type="range" id="schedule-end" className="border rounded-lg px-3 py-1" />
                                </div>
                            </div>
                        </div>
                        <div class="border-l-2 border-gray-300 h-32"/>
                        <div>
                            <h2 className="text-3xl font-bold">Services availability</h2>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="servico-corte" name="servicos" value="Corte" />
                                    <label htmlFor="servico-corte" className="text-sm">Corte</label>
                                    <FontAwesomeIcon icon={faPen} size="xs" className="text-white" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="servico-barba" name="servicos" value="Barba" />
                                    <label htmlFor="servico-barba" className="text-sm">Barba</label>
                                    <FontAwesomeIcon icon={faPen} size="xs" className="text-white" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="servico-sobrancelha" name="servicos" value="Sobrancelha" />
                                    <label htmlFor="servico-sobrancelha" className="text-sm">Sobrancelha</label>
                                    <FontAwesomeIcon icon={faPen} size="xs" className="text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold'>Change password</h2>
                        <div className="flex flex-col my-3">
                            <label for="current-password">Current password: </label>
                            <input type="password" id="current-password" className="border rounded-lg px-3 py-1" />
                        </div>
                        <div className="flex flex-col my-3">
                            <label for="new-password">New password: </label>
                            <input type="password" id="new-password" className="border rounded-lg px-3 py-1" />
                        </div>
                        <div className="flex flex-col my-3">
                            <label for="repeat-new-password">Repeat your new password: </label>
                            <input type="password" id="repeat-new-password" className="border rounded-lg px-3 py-1" />
                        </div>
                    </div>

                    <button className="flex mx-auto highlights-color">Save changes</button>
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
    else{
        return(
            <div className="shadow-xl p-5 rounded-lg">
                <h1 className="text-center">Configurações</h1>
                <p>
                    Um erro EXTREMAMENTE inexperado ocorreu
                </p>
            </div>
        )
    }

}

export default Settings;
