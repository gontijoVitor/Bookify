//página de recuperação de senha
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function User_recovery (){
    return(
        <div className="shadow-xl p-5 rounded-lg">
            <h1 className="text-center font-bold">Recuperar senha</h1>
            <div className="space-y-4">
                <div className="flex flex-col">
                    <label for="email">Digite o email que deseja recuperar: </label>
                    <input type="email" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="mx-auto">
                    <a><button className="mx-2">Retornar</button></a>
                    <button className="mx-2">Enviar email</button>
                </div>
            </div>
        </div>
    )
}

export default User_recovery;