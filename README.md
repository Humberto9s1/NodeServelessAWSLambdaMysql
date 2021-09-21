# Serverless Framework, AWS, Lambda, NodeJS e Mysql

## Documentação

Nessa aplicação foi realizado um CRUD de Funcionário, utilizando Lambdas para realizar consultas do dados armazados na plataforma AWS com o banco de dados Mysql.
A estrutura foi desenvolvida com linguagem de Node, utilizando o Serverless Framework.

### Banco de dados

Foi utilizado o banco de dados Mysql, os dados estão sendo armazenados na plataforma AWS.

#### SCHEMA

CREATE SCHEMA `module_employee` DEFAULT CHARACTER SET utf8 ;

#### TABELA

CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idade` int NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cargo` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

### Aplicação

### serverless.yml

Construção das Lambdas, para realização de consultas em um banco de Mysql, armazenar em uma infraestrutura no AWS.

### Lambdas:

  getAllEmployees - method: get
    Lista todos os funcionários.

  getEmployee - method: get
    Lista um funcionário com referência no seu ID.

  createEmployee - method: post
    Criação de novos funcionários.

  updateEmployee - method: put
    Atualização das informações de um funcionário.

  deleteEmployee - method: delete
    Deleta o registro de um funcionário.

### handler.js

Todas as regras de negócios, para as operações que serão fetuadas ao acessar o banco.

### Consultas via POSTMAN

Execute no terminal dentro da aplicação o comando *serveless deploy* para realizar novamente o deploy e gerar os novos endpoints caso tenham expirados.

### Endpoints atualizados

PUT = https://sfwtbf94ng.execute-api.us-east-1.amazonaws.com/dev/updateEmployee?idade=25&nome=José&cargo=Analista de Sistema&id=1

POST = https://sfwtbf94ng.execute-api.us-east-1.amazonaws.com/dev/createEmployee?idade=23&nome=Maria Lina&cargo=Analista de Cliente Jr

GET = https://sfwtbf94ng.execute-api.us-east-1.amazonaws.com/dev/getEmployee?id=2

GET = https://sfwtbf94ng.execute-api.us-east-1.amazonaws.com/dev/getAllEmployees

DELETE = https://sfwtbf94ng.execute-api.us-east-1.amazonaws.com/dev/deleteEmployee?id=1


