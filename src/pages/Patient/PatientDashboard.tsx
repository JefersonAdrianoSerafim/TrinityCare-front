import React from "react";
type ConsultaStatus = "feito" | "pendente" | "analise";

interface Consulta {
  id: number;
  medico: string;
  especialidade: string;
  data: string;
  hora: string;
  local: string;
  status: ConsultaStatus;
}

const statusColors: Record<ConsultaStatus, string> = {
  feito: "bg-green-500",
  pendente: "bg-yellow-400",
  analise: "bg-blue-500",
};

const consultas: Consulta[] = [
  {
    id: 1,
    medico: "Dra. Camila Ferreira",
    especialidade: "Clínico Geral",
    data: "2025-06-01",
    hora: "09:00",
    local: "Sala 3 - Unidade Central",
    status: "feito",
  },
  {
    id: 2,
    medico: "Dr. Rafael Lima",
    especialidade: "Dermatologia",
    data: "2025-06-10",
    hora: "15:30",
    local: "Sala 5 - Unidade Zona Sul",
    status: "pendente",
  },
  {
    id: 3,
    medico: "Dra. Julia Martins",
    especialidade: "Pediatria",
    data: "2025-06-12",
    hora: "11:00",
    local: "Sala 1 - Unidade Norte",
    status: "analise",
  },
  {
    id: 4,
    medico: "Dr. Lucas Almeida",
    especialidade: "Ortopedia",
    data: "2025-06-15",
    hora: "08:45",
    local: "Sala 2 - Unidade Central",
    status: "feito",
  },
  {
    id: 5,
    medico: "Dra. Renata Costa",
    especialidade: "Ginecologia",
    data: "2025-06-18",
    hora: "14:15",
    local: "Sala 4 - Unidade Sul",
    status: "pendente",
  },
  {
    id: 6,
    medico: "Dr. Fernando Silva",
    especialidade: "Neurologia",
    data: "2025-06-20",
    hora: "10:30",
    local: "Sala 6 - Unidade Leste",
    status: "analise",
  },
  {
    id: 7,
    medico: "Dra. Beatriz Nunes",
    especialidade: "Endocrinologia",
    data: "2025-06-22",
    hora: "16:00",
    local: "Sala 7 - Unidade Oeste",
    status: "feito",
  },
  {
    id: 8,
    medico: "Dr. Henrique Souza",
    especialidade: "Urologia",
    data: "2025-06-25",
    hora: "13:00",
    local: "Sala 3 - Unidade Central",
    status: "pendente",
  },
];

const PatientDashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-start h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Minhas Consultas
        </h1>
        <div className="flex-grow overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">
          <ul className="space-y-4">
            {consultas.map((consulta) => (
              <li
                key={consulta.id}
                className="flex border border-gray-200 rounded-md hover:shadow transition-shadow bg-gray-50"
              >
                <div
                  className={`${
                    statusColors[consulta.status]
                  } w-1 rounded-l-md`}
                />

                <div className="p-4 flex-grow">
                  <p className="text-gray-800">
                    <strong>Médico:</strong> {consulta.medico}
                  </p>
                  <p className="text-gray-800">
                    <strong>Especialidade:</strong> {consulta.especialidade}
                  </p>
                  <p className="text-gray-800">
                    <strong>Data:</strong> {consulta.data}
                  </p>
                  <p className="text-gray-800">
                    <strong>Hora:</strong> {consulta.hora}
                  </p>
                  <p className="text-gray-800">
                    <strong>Local:</strong> {consulta.local}
                  </p>
                  <p className="mt-2 text-sm font-semibold">
                    Status:{" "}
                    <span className="capitalize">{consulta.status}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
