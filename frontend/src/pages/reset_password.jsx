import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Nova_senha(){
    return(
        <div className="sec-bg-color shadow-xl rounded-lg" style={{padding: "40px"}}>
            <h1 className="text-center font-bold">Create new password</h1>
            <div className="space-y-4">
                <div className="flex flex-col">
                    <label for="password">Type your new password: </label>
                    <div className="flex">
                        <input type="password" className="border rounded-lg px-3 py-1" />
                        <FontAwesomeIcon className="mx-auto my-auto" icon={faEye} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label for="password">Repeat your new password: </label>
                    <div className="flex">
                        <input type="password" className="border rounded-lg px-3 py-1" />
                        <FontAwesomeIcon className="mx-auto my-auto" icon={faEye} />
                    </div>
                </div>
                <button className="flex mx-auto highlights-color">Change password</button>
            </div>
        </div>
    )
}

export default Nova_senha;