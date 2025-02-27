import { useState } from "react";

// Definindo uma interface Person para tipar as propriedades de cada pessoa na lista
interface Person {
  nome: string;
  idade: string;
}

export function App() {
  // Usando o hook useState para armazenar os valores do nome, idade e a lista de pessoas
  const [nome, setNome] = useState<string>("");  // Nome será um valor de string
  const [idade, setIdade] = useState<string>(""); // Idade será um valor de string
  const [lista, setLista] = useState<Person[]>([]); // Lista de pessoas, inicialmente vazia

  // Função para adicionar o novo item à lista e limpar os campos de entrada
  function handleSave() {
    // Adiciona a pessoa (nome e idade) à lista, preservando os itens anteriores com [...lista]
    setLista([...lista, { nome, idade }]);
    
    // Limpa os campos de entrada para que o usuário possa adicionar um novo item
    setNome("");
    setIdade("");
  }

  return (
    <div>
      {/* Campo de input para o nome */}
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          value={nome} // O valor do campo de nome é controlado pelo estado "nome"
          onChange={(e) => setNome(e.target.value)} // Atualiza o estado "nome" quando o valor mudar
        />
      </div>

      {/* Campo de input para a idade */}
      <div>
        <label htmlFor="age">Idade</label>
        <input
          id="age"
          value={idade} // O valor do campo de idade é controlado pelo estado "idade"
          onChange={(e) => setIdade(e.target.value)} // Atualiza o estado "idade" quando o valor mudar
        />
      </div>

      {/* Botão para salvar a pessoa na lista */}
      <button onClick={handleSave}>Salvar</button>

      {/* Lista ordenada (ol) para exibir as pessoas armazenadas */}
      <ol>
        {/* Mapear a lista de pessoas e exibir cada item */}
        {lista.map((iten, indice) => (
          // Cada item da lista é exibido dentro de uma <li> com um índice único como chave
          <li key={indice}>
            {iten.nome} - {iten.idade} {/* Exibe o nome e a idade */}
          </li>
        ))}
      </ol>
    </div>
  );
}
