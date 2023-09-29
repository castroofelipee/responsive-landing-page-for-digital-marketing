
CREATE DATABASE usuarios_db;


\c usuarios_db


CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(255) NOT NULL
);

-- Inserir alguns dados de exemplo na tabela
INSERT INTO usuarios (nome, telefone, email) VALUES
    ('João da Silva', '1234567890', 'joao@example.com'),
    ('Maria Santos', '9876543210', 'maria@example.com');
