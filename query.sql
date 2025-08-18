create database bookify;

use bookify;

CREATE TABLE users (
  usr_id INT AUTO_INCREMENT PRIMARY KEY,
  usr_name VARCHAR(100) NOT NULL,
  usr_email VARCHAR(100) UNIQUE NOT NULL,
  usr_password VARCHAR(50) NOT NULL,
  usr_type VARCHAR(1) NOT NULL,
  usr_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE services (
  srvc_id INT AUTO_INCREMENT PRIMARY KEY,
  srvc_name VARCHAR(100) NOT NULL,
  srvc_obs VARCHAR(100) NOT NULL,
  srvc_time_length INT NOT NULL,
  srvc_price DECIMAL(10,2) NOT NULL
);

CREATE TABLE scheduling (
  sched_id INT AUTO_INCREMENT PRIMARY KEY,
  sched_cli_name VARCHAR(100) NOT NULL,
  sched_cli_phone VARCHAR(20), -- opcional, para contato
  sched_service_id INT NOT NULL,
  sched_user_id INT, -- barbeiro responsável
  sched_date DATE NOT NULL,
  sched_time TIME NOT NULL,
  sched_obs TEXT,
  FOREIGN KEY (servico_id) REFERENCES servicos(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE user_settings (
  config_id INT AUTO_INCREMENT PRIMARY KEY,
  config_

)

