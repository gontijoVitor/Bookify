//página responsável por listar horarios do prestador de serviço

function User_register() {
    return(
        <div className="shadow-xl p-5 rounded-lg">
            <h1 className="text-center">Cadastro</h1>
            <div className="space-y-4">
                <div className="flex flex-col">
                    <label for="name">Nome: </label>
                    <input type="name" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="flex flex-col">
                    <label for="email">Email: </label>
                    <input type="email" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="flex flex-col">
                    <label for="password">Senha: </label>
                    <input type="password" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="flex flex-col">
                    <label for="password">Repita a senha: </label>
                    <input type="password" className="border rounded-lg px-3 py-1" />
                </div>
                <div className="flex items-center">
                    <input type="radio" id="cliente" name="user_type" className="mx-2" value="cliente" />
                    <label htmlFor="cliente">Cliente</label>
                </div>
                
                <div className="flex items-center">
                    <input type="radio" id="prestador" name="user_type" className="mx-2" value="prestador" />
                    <label htmlFor="prestador">Prestador</label>
                </div>
                <div className="mx-auto">
                    <a><button className="mx-2">Já tenho conta</button></a>
                    <button className="mx-2">Criar conta</button>
                </div>
            </div>
        </div>
    )
}

export default User_register;