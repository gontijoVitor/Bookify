//página de recuperação de senha
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function User_recovery (){
    return(
        <div className="shadow-xl p-5 rounded-lg">
            <h1 className="text-center font-bold">Recuperar senha</h1>
            <div className="space-y-4">
                <div className="flex flex-col">
                    <label for="email">Digite o email que deseja recuperar: </label>
                    <input type="email" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="mt-6 text-center ">
                    <Link to="/login">
                        <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline">
                            <FontAwesomeIcon icon={faChevronLeft} />
                            Voltar
                        </button>
                    </Link>
                    <Link to="">
                        <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline">
                            <FontAwesomeIcon icon={faEnvelope} />
                            Enviar email de recuperação
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default User_recovery;