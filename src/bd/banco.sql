-- Criação do Banco de Dados
CREATE DATABASE CardAppio;

-- Uso do Banco de Dados
USE CardAppio;

-- Tabela de Usuários
CREATE TABLE USUARIO (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    pass VARCHAR(255) NOT NULL,
    photo VARCHAR(255),
    perfil ENUM('Cliente', 'Gerente') NOT NULL,
);

CREATE TABLE CLIENTE (
    table_number INT NOT NULL,
    usuario USUARIO NOT NULL,
);

-- Tabela de Item do Menu
CREATE TABLE ITEM (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    imageURL VARCHAR(255),
    category VARCHAR(255),
);

-- Tabela de Restaurante
CREATE TABLE RESTAURANTE (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    business_hours VARCHAR(255) NOT NULL,
);

-- Tabela de Pedido
CREATE TABLE PEDIDO (
    order_number INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    client CLIENTE NOT NULL,
    item ITEM NOT NULL,
    time INT,
    total FLOAT,
);