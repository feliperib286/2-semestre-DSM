import { CSSProperties, useState } from "react";

// Definição da interface para um objeto Person
interface Person {
  nome: string;
  idade: string;
}

export default function App() {
  // Estados para armazenar os valores dos inputs
  const [nome, setNome] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  // Estado para armazenar a lista de pessoas
  const [landleDelete(indice: number)] {
    const temp = [...lista]; // Cria uma cópia do array
    temp.splice(indice, 1); // Remove o item na posição especificada
    setLista(temp); // Atualiza o estado com a nova lista
  }

  return (
    <div>
      {/* Campo de entrada paista, setLista] = useState<Person[]>([]);

  // Função para adicionar uma nova pessoa à lista
  function handleSave() {
    setLista([{ nome, idade }, ...lista]); // Adiciona um novo objeto ao início da lista
  }

  // Função para remover um item da lista pelo índice
  function hra o nome */}
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          value={nome}
          onChange={(e) => setNome(e.target.value)} // Atualiza o estado conforme o usuário digita
        />
      </div>

      {/* Campo de entrada para a idade */}
      <div>
        <label htmlFor="age">Idade</label>
        <input
          id="age"
          value={idade}
          onChange={(e) => setIdade(e.target.value)} // Atualiza o estado conforme o usuário digita
        />
      </div>

      {/* Botão para salvar os dados na lista */}
      <button onClick={handleSave}>Salvar</button>

      {/* Tabela para exibir os dados salvos */}
      <table style={table}>
        <thead>
          <tr>
            <th style={cell}>Nome</th>
            <th style={cell}>Idade</th>
          </tr>
        </thead>
        <tbody>
          {lista.map(function (item, indice) {
            return (
              <tr key={indice} onClick={() => handleDelete(indice)}> {/* Ao clicar, remove o item */}
                <td style={cell}>{item.nome}</td>
                <td style={cell}>{item.idade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// Estilos para a tabela
const table: CSSProperties = {
  tableLayout: "auto", // A largura da tabela se ajusta ao conteúdo
  borderCollapse: "collapse",
  marginTop: "20px",
};

// Estilos para as células da tabela
const cell: CSSProperties = {
  border: "1px solid black",
  padding: "5px",
  whiteSpace: "nowrap", // Garante que o conteúdo não quebre em várias linhas
};
