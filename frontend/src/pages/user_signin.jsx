//página responsável por listar horarios do prestador de serviço
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function UserSignin() {
    return(
        <div className="sec-bg-color shadow-xl rounded-lg" style={{padding: "40px"}}>
            <h1 className="text-center font-bold">Sign in</h1>
            <div className="space-y-4">
                <div className="flex flex-col">
                    <label for="name">Name: </label>
                    <input type="text" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="flex flex-col">
                    <label for="email">Email: </label>
                    <input type="email" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="flex flex-col">
                    <label for="phone">Phone number: </label>
                    <input type="text" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="flex flex-col">
                    <label for="password">Password: </label>
                    <input type="password" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="flex flex-col">
                    <label for="password">Repeat the password: </label>
                    <input type="password" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="flex justify-center">
                    <input type="radio" id="Customer" name="user_type" className="mx-2" value="Customer" />
                    <label htmlFor="Customer">Customer</label>
                    <input type="radio" id="Professional" name="user_type" className="mx-2" value="Professional" />
                    <label htmlFor="Professional">Professional</label>
                </div>
                {/* Botão Novo Agendamento */}
                <div className="mt-6 text-center ">
                    <Link to="/login">
                        <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline highlights-color">
                            <FontAwesomeIcon icon={faUser} />
                            I already own a account
                        </button>
                    </Link>
                    <Link to="">
                        <button className="px-4 py-2 rounded-lg items-center gap-2 mx-2 inline highlights-color">
                            <FontAwesomeIcon icon={faPlus} />
                            Create account
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserSignin;
