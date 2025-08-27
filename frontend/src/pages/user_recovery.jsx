//página de recuperação de senha
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function UserRecovery (){
    return(
        <div className="sec-bg-color shadow-xl rounded-lg" style={{padding: "40px"}}>
            <h1 className="text-center font-bold">Password recovery</h1>
            <div className="space-y-4">
                <div className="flex flex-col">
                    <label for="email">Type the email address you'd like to recover the password: </label>
                    <input type="email" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="mt-6 text-center ">
                    <Link to="/login">
                        <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline highlights-color">
                            <FontAwesomeIcon icon={faChevronLeft} />
                            Go back
                        </button>
                    </Link>
                    <Link to="">
                        <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline highlights-color">
                            <FontAwesomeIcon icon={faEnvelope} />
                            Send recovery email
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserRecovery;