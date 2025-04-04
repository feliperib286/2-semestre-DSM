--Criação da tabela
CREATE TABLE funcionarios (
    id_func INT PRIMARY KEY,
    nome VARCHAR(100),
    cargo VARCHAR(50),
    salario DECIMAL(10, 2)
);

-- Inserção de três registros na tabela funcionarios
INSERT INTO funcionarios (id_func, nome, cargo, salario)
VALUES
    (1, 'João Silva', 'Analista de Sistemas', 5000.00),
    (2, 'Maria Oliveira', 'Gerente de Projetos', 8000.00),
    (3, 'Carlos Souza', 'Desenvolvedor', 4500.00);
