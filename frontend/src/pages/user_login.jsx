//página de login de usuario
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function User_login() {
    return(
        <div className="shadow-xl p-5 rounded-lg">
            <h1 className="text-center font-bold">Login</h1>
            <div className="space-y-4">
                <div className="flex flex-col">
                    <label for="email">Email: </label>
                    <input type="email" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="flex flex-col">
                    <label for="password">Senha: </label>
                    <div className="flex">
                        <input type="password" className="border rounded-lg px-3 py-1" />
                        <FontAwesomeIcon className="mx-auto my-auto" icon={faEye} />
                    </div>
                    <a><p className="text-center">Esqueci minha senha</p></a>
                </div>
                <div className="mx-auto">
                    <a><button className="mx-2">Não tenho conta</button></a>
                    <button className="mx-2">Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default User_login;