-- 1️⃣ Criar a tabela PRODUTOS
CREATE TABLE PRODUTOS (
    ID SERIAL PRIMARY KEY,
    NOME VARCHAR(100) NOT NULL,
    PRECO DECIMAL(10,2) NOT NULL,
    CATEGORIA VARCHAR(50) NOT NULL
);

-- 2️⃣ Inserir registros na tabela
INSERT INTO PRODUTOS (NOME, PRECO, CATEGORIA) VALUES
('Notebook', 4500.00, 'Eletrônicos'),
('Smartphone', 2500.00, 'Eletrônicos'),
('Cadeira Gamer', 850.00, 'Móveis'),
('Geladeira', 3200.00, 'Eletrodomésticos'),
('Fone de Ouvido', 200.00, 'Acessórios');

-- 3️⃣ Listar todos os produtos cadastrados
SELECT * FROM PRODUTOS;

-- 4️⃣ Buscar apenas os produtos da categoria "Eletrônicos“
SELECT * FROM PRODUTOS WHERE CATEGORIA = 'Eletrônicos';

-- 5️⃣ Listar os produtos mais caros primeiro
SELECT * FROM PRODUTOS ORDER BY PRECO DESC;

-- Listar os produtos mais baratos primeiro
SELECT * FROM PRODUTOS ORDER BY PRECO ASC;

-- Contar quantos produtos existem em cada categoria
SELECT CATEGORIA, COUNT(*) AS TOTAL_PRODUTOS FROM PRODUTOS GROUP BY CATEGORIA;

-- Calcular o preço médio dos produtos
SELECT AVG(PRECO) AS PRECO_MEDIO FROM PRODUTOS;

-- Listar apenas os produtos que custam mais de R$ 1000
SELECT * FROM PRODUTOS WHERE PRECO > 1000;

-- Buscar produtos cujo nome começa com "C"
SELECT * FROM PRODUTOS WHERE NOME LIKE 'C%';

-- Atualizar o preço de um produto específico
UPDATE PRODUTOS SET PRECO = 4800 WHERE NOME = 'Notebook';

-- Remover um produto pelo nome
DELETE FROM PRODUTOS WHERE NOME = 'Fone de Ouvido';

-- Aumentar o preço de todos os produtos em 10%
UPDATE PRODUTOS SET PRECO = PRECO * 1.10;

-- Listar os três produtos mais caros
SELECT * FROM PRODUTOS ORDER BY PRECO DESC LIMIT 3;

-- Buscar produtos que NÃO sejam da categoria "Eletrônicos"
SELECT * FROM PRODUTOS WHERE CATEGORIA <> 'Eletrônicos';

-- Agrupar produtos por categoria e mostrar o preço médio de cada uma
SELECT CATEGORIA, AVG(PRECO) AS PRECO_MEDIO FROM PRODUTOS GROUP BY CATEGORIA;

