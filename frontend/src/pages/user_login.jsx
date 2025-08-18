//página de login de usuario
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowRightToBracket, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
                    <Link to="/recuperar"><p className="text-center">Esqueci minha senha</p></Link>
                </div>
                <div className="mt-6 text-center ">
                    <Link to="/registrar">
                        <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline">
                            <FontAwesomeIcon icon={faPlus} />
                            Não tenho conta
                        </button>
                    </Link>
                    <Link to="">
                        <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline">
                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                            Acessar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default User_login;