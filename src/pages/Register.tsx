import { Link } from "react-router-dom";
import React from "react";

const Register: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Criar conta</h2>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Nome Completo"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />
          <input
            type="email"
            placeholder="Endereço de Email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />
          <input
            type="password"
            placeholder="Senha"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />
          <p className="text-gray-900 mt-4">
            Já possui uma conta?{" "}
            <Link to="/" className="text-sm text-blue-500 hover:underline">
              Entrar
            </Link>
          </p>
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Cadastrar-se
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
