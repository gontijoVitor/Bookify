//página de login de usuario
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowRightToBracket, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function UserLogin() {
    return(
        <div className="sec-bg-color shadow-xl rounded-lg" style={{padding: "40px"}}>
            <h1 className="text-center font-bold">Login</h1>
            <div className="space-y-4">
                <div className="flex flex-col">
                    <label for="email">Email: </label>
                    <input type="email" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="flex flex-col">
                    <label for="password">Password: </label>
                    <div className="flex">
                        <input type="password" className="border rounded-lg px-3 py-1" />
                        <FontAwesomeIcon className="mx-auto my-auto" icon={faEye} />
                    </div>
                    <Link to="/user_recovery"><p className="text-center">Forgot my password</p></Link>
                </div>
                <div className="mt-6 text-center ">
                    <Link to="/signin">
                        <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline highlights-color">
                            <FontAwesomeIcon icon={faPlus} />
                            I don't have an account
                        </button>
                    </Link>
                    <Link to="">
                        <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline highlights-color">
                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                            Access
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserLogin;