-- Criação das tabelas --
 
CREATE TABLE cursos (
id_curso SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL
);
CREATE TABLE alunos (
id_aluno SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
idade INT,
id_curso INT REFERENCES cursos(id_curso)
);
 
-- Inserir os dados nas tabelas --
 
insert into cursos (id_curso, nome)
VALUES (4, 'Computação')
 
insert into alunos (nome, idade, id_curso)
VALUES ('Carlos Lima', 23, 2)
 
-- Buscar a tabela --
 
select *from cursos
 
-- Atualização de dados no banco de dados --
 
UPDATE alunos SET idade = 23
WHERE nome = 'João Silva'
 
UPDATE alunos SET idade = 21, id_curso = 3
WHERE nome = 'Maria Souza'
 
-- Deletar alguma informação da tabela --
 
DELETE FROM alunos 
where nome = 'Carlos Lima'
 
-- Excluir as informações da tabela --
 
DELETE FROM alunos
 
-- Desfazer o delete --
 
ROLLBACK
 
-- Remover todos os registor de uma tableta  (NAO CONSEGUE DESFAZER) --
 
TRUNCATE


---------------------


-- 1 Criar a tabela funcionários
CREATE TABLE funcionarios (
    id_func SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    salario DECIMAL(10,2) NOT NULL
);
-- 1 Criar a tabela funcionários
CREATE TABLE funcionarios (
    id_func SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    salario DECIMAL(10,2) NOT NULL
);

-- 2 Inserir 3 registros na tabela com novos nomes
INSERT INTO funcionarios (nome, cargo, salario) VALUES
('Fernando Souza', 'Analista de Sistemas', 6200.00),
('Juliana Mendes', 'Coordenadora de Projetos', 8500.00),
('Rafael Costa', 'Engenheiro de Software', 7500.00);

-- 3 Consultar os funcionários cadastrados
SELECT * FROM funcionarios;

-- 4️ Excluir o funcionário "Marcos Lima"
DELETE FROM funcionarios
WHERE nome = 'Marcos Lima';
-- 3️ Atualizar o salário de "Lucas Andrade" para R$ 5500,00
UPDATE funcionarios
SET salario = 5500.00
WHERE nome = 'Lucas Andrade';
-- 2️ Inserir os registros na tabela
INSERT INTO funcionarios (nome, cargo, salario) VALUES
('Lucas Andrade', 'Desenvolvedor', 5000.00),
('Paula Ferreira', 'Gerente', 9000.00),
('Marcos Lima', 'Designer', 4000.00);
CREATE TABLE funcionarios (
    nome VARCHAR(100),
    cargo VARCHAR(50),
    salario DECIMAL(10,2)
);
select *from alunos;
TRUNCATE  alunos;

ROLLBACK  
