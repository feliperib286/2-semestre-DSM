CREATE DATABASE empresa;

-- Usar o banco de dados criado
-- 2️ Criar a tabela funcionários
CREATE TABLE funcionarios (
    id_func SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    salario DECIMAL(10,2) NOT NULL
);

-- 3️ Inserir 3 registros na tabela com novos nomes
INSERT INTO funcionarios (nome, cargo, salario) VALUES
('Fernando Souza', 'Analista de Sistemas', 6200.00),
('Juliana Mendes', 'Coordenadora de Projetos', 8500.00),
('Rafael Costa', 'Engenheiro de Software', 7500.00);

-- 4️ Consultar os funcionários cadastrados
SELECT * FROM funcionarios;
