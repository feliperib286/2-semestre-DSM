-- 1️ Criar a tabela funcionarios
CREATE TABLE funcionarios (
    nome VARCHAR(100),
    cargo VARCHAR(50),
    salario DECIMAL(10,2)
);

-- 2️ Inserir os registros na tabela
INSERT INTO funcionarios (nome, cargo, salario) VALUES
('Lucas Andrade', 'Desenvolvedor', 5000.00),
('Paula Ferreira', 'Gerente', 9000.00),
('Marcos Lima', 'Designer', 4000.00);

-- 3️ Atualizar o salário de "Lucas Andrade" para R$ 5500,00
UPDATE funcionarios
SET salario = 5500.00
WHERE nome = 'Lucas Andrade';

-- 4️ Excluir o funcionário "Marcos Lima"
DELETE FROM funcionarios
WHERE nome = 'Marcos Lima';

-- 5️ Verificar os funcionários que ainda estão na tabela
SELECT * FROM funcionarios;
