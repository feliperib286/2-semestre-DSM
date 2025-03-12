
atividade 1

import { CSSProperties, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <>
      <h4>Valor: {count}</h4>
      <div>
        <Button rotulo="Incrementar" clique={increment} />
        <Button rotulo="Decrementar" clique={decrement} />
      </div>
    </>
  );
}

function Button(props: Props) {
  return (
    <button onClick={props.clique} style={buttonStyle}>
      {props.rotulo}
    </button>
  );
}

interface Props {
  rotulo: string;  // This should be a string, as you are passing text for button labels
  clique: () => void;
}

const buttonStyle: CSSProperties = {
  backgroundColor: "#567196",
  color: "white",
  padding: "10px 20px",
  marginRight: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

atividade 2

import { CSSProperties, useState } from "react";

// Função principal do componente
export default function App() {
  const [count, setCount] = useState(0); // Estado para armazenar o valor do contador

  // Função para incrementar o valor do contador
  function increment() {
    setCount((prev) => prev + 1); // Atualiza o contador adicionando 1
  }

  // Função para decrementar o valor do contador
  function decrement() {
    setCount((prev) => prev - 1); // Atualiza o contador subtraindo 1
  }

  return (
    <>
      <h4>Valor: {count}</h4> {/* Exibe o valor atual do contador */}
      <div style={{ display: "flex" }}> {/* Container flex para os botões */}
        <Button action={increment}> {/* Botão para incrementar */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
            alt="Incrementar"
            style={iconStyle} // Estilo do ícone
          />
          <span>Incrementar</span> {/* Texto que descreve o botão */}
        </Button>
        <Button action={decrement}> {/* Botão para decrementar */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
            alt="Decrementar"
            style={iconStyle} // Estilo do ícone
          />
          <span>Decrementar</span> {/* Texto que descreve o botão */}
        </Button>
      </div>
    </>
  );
}

// Componente Button para criação de botões reutilizáveis
function Button({ action, children }: Props) {
  return <button onClick={action} style={buttonStyle}>{children}</button>; // Renderiza o botão com ação e conteúdo
}

// Definindo as propriedades esperadas pelo componente Button
interface Props {
  action: () => void; // Ação que será chamada quando o botão for clicado
  children: React.ReactNode; // O conteúdo do botão (ícone + texto)
}

// Estilos para o botão
const buttonStyle: CSSProperties = {
  backgroundColor: "#567196", // Cor de fundo do botão
  color: "white", // Cor do texto
  padding: "10px 20px", // Espaçamento interno
  marginRight: "10px", // Margem à direita
  fontSize: "16px", // Tamanho da fonte
  fontWeight: "bold", // Peso da fonte
  border: "none", // Sem borda
  borderRadius: "5px", // Bordas arredondadas
  cursor: "pointer", // Cursor em forma de ponteiro quando passa por cima
  display: "flex", // Flexbox para alinhamento do conteúdo
  alignItems: "center", // Alinhamento vertical do ícone e texto
  gap: "8px", // Espaçamento entre o ícone e o texto
};

// Estilos para o ícone dentro do botão
const iconStyle: CSSProperties = {
  width: "20px", // Largura do ícone
  height: "20px", // Altura do ícone
};
----------------------------------------

// Importando o hook 'useState' do React para gerenciar o estado no componente.
import { useState } from "react";

// Função principal que representa o componente App.
export default function App() {
  // Definindo o estado 'users' como um array de objetos do tipo User.
  const [users, setUsers] = useState<User[]>([]);

  // Função para adicionar um novo usuário ao estado 'users'.
  function add(user: User) {
    // Atualizando o estado 'users' para incluir o novo usuário.
    setUsers((prev) => [...prev, user]);
  }

  // Retorna o JSX com os componentes 'Form' e 'List'.
  return (
    <>
      {/* Passando a função 'add' como prop para o componente Form. */}
      <Form add={add} />
      {/* Passando o estado 'users' como prop para o componente List. */}
      <List users={users} />
    </>
  );
}

// Componente Form responsável por capturar e enviar os dados do usuário.
function Form(props: FormProps) {
  // Definindo os estados locais 'name' e 'age' para armazenar os dados do formulário.
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Retorna o JSX com o formulário de entrada.
  return (
    <div>
      {/* Campo para o nome, que atualiza o estado 'name' com o valor digitado. */}
      <div>
        <label>Nome</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      {/* Campo para a idade, que atualiza o estado 'age' com o valor digitado. */}
      <div>
        <label>Idade</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      {/* Botão que, ao ser clicado, chama a função 'add' do componente pai para adicionar o usuário. */}
      <button onClick={() => props.add({ name, age })}>Salvar</button>
    </div>
  );
}

// Componente List responsável por exibir a lista de usuários.
function List(props: ListProps) {
  // Retorna o JSX com uma lista ordenada (ol), onde cada item é um nome de usuário.
  return (
    <ol>
      {
        // Mapeando o array de usuários e criando um item de lista (li) para cada um.
        props.users.map((item, indice) => (
          <li key={indice}>{item.name}</li>
        ))
      }
    </ol>
  );
}

// Definindo a interface para o tipo de usuário.
interface User {
  name: string;
  age: string;
}

// Definindo a interface para as propriedades do componente Form.
interface FormProps {
  add: (user: User) => void;
}

// Definindo a interface para as propriedades do componente List.
interface ListProps {
  users: User[];
}
--------------------------------------------

import { useState } from "react";

// Função principal que gerencia o estado dos usuários
export default function App() {
  // Estado que armazena a lista de usuários
  const [users, setUsers] = useState<User[]>([]);

  // Função para adicionar um novo usuário à lista
  function add(user: User) {
    setUsers((prev) => [...prev, user]);
  }

  // Função para remover um usuário da lista com base no índice
  function remove(index: number) {
    setUsers(users.filter((_, i) => i !== index));
  }

  return (
    <>
      {/* Componente de Formulário para adicionar usuários */}
      <Form add={add} />
      {/* Componente de Lista para exibir os usuários */}
      <List users={users} remove={remove} />
    </>
  );
}

// Componente de Formulário para capturar os dados do usuário
function Form(props: FormProps) {
  const [name, setName] = useState(""); // Estado para armazenar o nome
  const [age, setAge] = useState(""); // Estado para armazenar a idade

  return (
    <div>
      {/* Campo para inserir o nome */}
      <div>
        <label>Nome</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)} // Atualiza o nome conforme o input
        />
      </div>
      {/* Campo para inserir a idade */}
      <div>
        <label>Idade</label>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)} // Atualiza a idade conforme o input
        />
      </div>
      {/* Botão para salvar o usuário e adicionar à lista */}
      <button onClick={() => props.add({ name, age })}>Salvar</button>
    </div>
  );
}

// Componente de Lista para exibir os usuários e remover com clique direito
function List(props: ListProps) {

  // Função chamada ao clicar com o botão direito do mouse (context menu)
  function handle(e: React.MouseEvent, index: number) {
    e.preventDefault(); // Previne o menu de contexto padrão
    props.remove(index); // Remove o usuário pelo índice
  }

  return (
    <ol>
      {/* Exibe a lista de usuários */}
      {props.users.map((item, index) => (
        <li key={index} onContextMenu={(e) => handle(e, index)}>
          {item.name} {/* Exibe o nome do usuário */}
        </li>
      ))}
    </ol>
  );
}

// Definição da interface do usuário (User)
interface User {
  name: string; // Nome do usuário
  age: string; // Idade do usuário
}

// Definição da interface para as props do Formulário (FormProps)
interface FormProps {
  add: (user: User) => void; // Função para adicionar um usuário
}

// Definição da interface para as props da Lista (ListProps)
interface ListProps {
  users: User[]; // Lista de usuários
  remove: (index: number) => void; // Função para remover um usuário
}
