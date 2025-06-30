create database agendamento

use agendamento

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha_hash VARCHAR(255) NOT NULL,
  ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE servicos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  duracao_minutos INT NOT NULL,
  preco DECIMAL(10,2) NOT NULL
);

CREATE TABLE agendamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome_cliente VARCHAR(100) NOT NULL,
  telefone_cliente VARCHAR(20), -- opcional, para contato
  servico_id INT NOT NULL,
  usuario_id INT, -- barbeiro responsável
  data DATE NOT NULL,
  hora TIME NOT NULL,
  observacoes TEXT,
  confirmado BOOLEAN DEFAULT FALSE,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (servico_id) REFERENCES servicos(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

