DROP TABLE IF EXISTS clientes;

-- Criação da tabela de clientes
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    saldo DECIMAL(10, 2),
    saques DECIMAL(10, 2)[] -- Array para armazenar valores de saques
);
-- Inserindo dados de clientes com saldos menores (até 1000 reais)
INSERT INTO clientes (nome, saldo, saques) VALUES
('João Silva', 500.00, '{200.00, 150.00, 100.00}'),
('Maria Oliveira', 800.00, '{300.00, 250.00}'),
('Carlos Souza', 950.00, '{400.00, 300.00, 250.00}'),
('Ana Costa', 750.00, '{150.00, 200.00, 250.00}'),
('Pedro Santos', 600.00, '{100.00, 150.00}'),
('Fernanda Lima', 850.00, '{300.00, 200.00}'),
('Rafael Martins', 650.00, '{100.00, 150.00}'),
('Patrícia Almeida', 700.00, '{250.00, 150.00}'),
('Luana Pereira', 1000.00, '{500.00, 400.00, 300.00}'),
('Lucas Costa', 950.00, '{350.00, 200.00}'),
('Mariana Rocha', 800.00, '{100.00, 250.00}'),
('Gustavo Oliveira', 900.00, '{200.00, 150.00, 100.00}'),
('Camila Dias', 950.00, '{150.00, 250.00}'),
('Bruno Martins', 600.00, '{50.00, 100.00}'),
('Renata Alves', 950.00, '{500.00, 400.00}'),
('Eduardo Silva', 700.00, '{250.00, 100.00}'),
('Marcos Santos', 800.00, '{300.00, 200.00, 150.00}'),
('Carla Souza', 850.00, '{400.00, 300.00}'),
('Ricardo Pereira', 950.00, '{250.00, 150.00, 100.00}'),
('Juliana Rocha', 900.00, '{150.00, 100.00, 200.00}');

--Contar o número de clientes cadastrados:--

SELECT COUNT(*) AS total_clientes FROM clientes;

--Calcular o saldo total armazenado no banco:--

SELECT SUM(saldo) AS saldo_total FROM clientes;

--Descobrir a média dos saques feitos:--
--Primeiro, vamos somar todos os saques e depois dividir pela quantidade de clientes.--
SELECT AVG(array_length(saques, 1)) AS media_saques FROM clientes;
