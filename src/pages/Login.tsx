import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "emailexemplo@gmail.com" && senha === "123456") {
      navigate("/paciente/dashboard");
    } else {
      setErro("Email ou senha inválidos.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Endereço de email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />

          {erro && <p className="text-sm text-red-600 mb-2">{erro}</p>}

          <div className="flex items-center justify-between flex-wrap">
            <label
              htmlFor="remember-me"
              className="text-sm text-gray-900 cursor-pointer"
            >
              <input type="checkbox" id="remember-me" className="mr-2" />
              Lembrar de mim
            </label>
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline mb-0.5"
            >
              Esqueceu sua senha?
            </a>
            <p className="text-gray-900 mt-4">
              Não possui uma conta?{" "}
              <Link
                to="/registrar"
                className="text-sm text-blue-500 hover:underline"
              >
                Cadastrar-se
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
