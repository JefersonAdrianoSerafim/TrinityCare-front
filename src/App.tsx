import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./pages/Patient/PatientDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registrar" element={<Register />} />
      <Route path="/paciente/dashboard" element={<PatientDashboard />} />
    </Routes>
  );
}

export default App;
