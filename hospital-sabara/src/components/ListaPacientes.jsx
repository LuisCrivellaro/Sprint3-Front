import { useEffect, useState } from "react";
import pacientesJSON from "../data/pacientes.json";

function ListaPacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setPacientes(pacientesJSON);
  }, []);

  const adicionarPaciente = () => {
    const novoPaciente = {
      id: pacientes.length + 1,
      nome: `Novo Paciente ${contador + 1}`,
      idade: 5 + contador
    };

    setPacientes([...pacientes, novoPaciente]);
    setContador(contador + 1);
  };

  return (
    <section className="container mt-4">
      <h2 className="titulo">Lista de Pacientes</h2>

      <button className="botao-adicionar mb-3" onClick={adicionarPaciente}>
        Adicionar Paciente
      </button>


      <ul className="list-group">
        {pacientes.map((p) => (
          <li key={p.id} className="list-group-item">
            {p.nome} - {p.idade} anos
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListaPacientes;
