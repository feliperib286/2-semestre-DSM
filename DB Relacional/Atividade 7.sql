DROP TABLE IF EXISTS clientes;

-- Criação da tabela de clientes
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    saldo DECIMAL(10, 2)
);

-- Criação da tabela de saques
CREATE TABLE saques (
    id SERIAL PRIMARY KEY,
    cliente_id INT,
    valor_saque DECIMAL(10, 2),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
);
-- Inserir dados na tabela de clientes (valores pequenos)
INSERT INTO clientes (nome, saldo) VALUES
('João Silva', 500.00),
('Maria Oliveira', 400.00),
('Carlos Souza', 300.00),
('Ana Costa', 250.00),
('Pedro Santos', 600.00),
('Fernanda Lima', 350.00),
('Rafael Martins', 450.00),
('Patrícia Almeida', 200.00),
('Luana Pereira', 700.00),
('Lucas Costa', 550.00),
('Mariana Rocha', 500.00),
('Gustavo Oliveira', 450.00),
('Camila Dias', 600.00),
('Bruno Martins', 350.00),
('Renata Alves', 750.00),
('Eduardo Silva', 400.00),
('Marcos Santos', 450.00),
('Carla Souza', 500.00),
('Ricardo Pereira', 650.00),
('Juliana Rocha', 500.00);

-- Inserir dados na tabela de saques (com valores pequenos e no máximo dois saques)
INSERT INTO saques (cliente_id, valor_saque) VALUES
(1, 50.00), (1, 30.00),
(2, 60.00), (2, 40.00),
(3, 80.00), (3, 20.00),
(4, 40.00), (4, 30.00),
(5, 70.00), (5, 50.00),
(6, 60.00), (6, 20.00),
(7, 30.00), (7, 50.00),
(8, 20.00), (8, 40.00),
(9, 60.00), (9, 30.00),
(10, 40.00), (10, 20.00),
(11, 50.00), (11, 30.00),
(12, 70.00), (12, 30.00),
(13, 50.00), (13, 20.00),
(14, 60.00), (14, 40.00),
(15, 30.00), (15, 50.00),
(16, 40.00), (16, 30.00),
(17, 70.00), (17, 20.00),
(18, 30.00), (18, 50.00),
(19, 20.00), (19, 40.00),
(20, 60.00), (20, 20.00);

--1. Contar o número de saques realizados por cada cliente

SELECT cliente_id, COUNT(*) AS total_saques
FROM saques
GROUP BY cliente_id;
--2. Calcular o saldo total armazenado no banco
SELECT SUM(saldo) AS saldo_total
FROM clientes;

--3. Calcular a média de saques realizados pelos clientes
SELECT AVG(saques_por_cliente) AS media_saques
FROM (
    SELECT cliente_id, COUNT(*) AS saques_por_cliente
    FROM saques
    GROUP BY cliente_id
) AS saques_count;
