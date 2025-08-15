import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Nova_senha(){
    return(
        <div className="shadow-xl p-5 rounded-lg">
            <h1 className="text-center font-bold">Criar nova senha</h1>
            <div className="space-y-4">
                <div className="flex flex-col">
                    <label for="password">Digite sua nova senha: </label>
                    <div className="flex">
                        <input type="password" className="border rounded-lg px-3 py-1" />
                        <FontAwesomeIcon className="mx-auto my-auto" icon={faEye} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label for="password">Repita a senha: </label>
                    <div className="flex">
                        <input type="password" className="border rounded-lg px-3 py-1" />
                        <FontAwesomeIcon className="mx-auto my-auto" icon={faEye} />
                    </div>
                </div>
                <div className="mx-auto">
                    <button className="mx-2">Alterar senha</button>
                </div>
            </div>
        </div>
    )
}

export default Nova_senha;