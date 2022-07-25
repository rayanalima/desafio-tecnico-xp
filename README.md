<h1 align="center">Desafio Técnico XP 🚀</h1>

Indíce
=================
<!--ts-->
   * [Sobre o desafio](#sobre-o-desafio)
   * [Como executar o projeto](#-como-executar-o-projeto)
      * [Pre Requisitos](#pre-requisitos)
      * [Local files](#local-files)
   * [Tecnologias](#tecnologias)
<!--te-->

<h4 align="center"> 
	🚧 Desafio Técnico XP 🚀 Em aprimoramento...  🚧
</h4>

### Features

- [x] Tela de Login
- [x] Tela de depósito
- [x] Tela de saque
- [x] Tela com todas as ações disponiveis
- [x] Tela de compra
- [x] Tela de venda
- [ ] Salvar localmente o último usuário logado
- [ ] Validação de e-mail e senha
- [ ] Testes Unitários
- [ ] Tratamento de Erros
- [ ] Deploy da aplicação

## 💻 Sobre o desafio

O projeto consistia em criar telas para simular o dia a dia de um funcionário da XP, eu escolhi desenvolver em ReactJS usando a biblioteca de estilo Chakra UI, pois eu tinha vontade de aprender a utilizar ela, o APP foi pensado totalmente em MobileFirst, e essa foi a oportunidade perfeita pois ela lida com os tamanhos de tela de uma forma bem dinâmica, utilizei o modelo do Atomic Design para organização de páginas e componentes, criei uma mini API no meu json para retornar os dados dos usuários logados, utilizei a biblioteca Axios para consumir a API, usei o Context para gerenciar os estados globais da aplicação, e a biblioteca NumberFormat para deixar os inputs que recebem números para formatação.

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando a API e o Front-End
```bash

# Clone este repositório
$ git clone git@github.com:rayanalima/desafio-tecnico-xp.git

# Acesse a pasta do projeto
$ cd desafio-tecnico-xp

# Instale as dependências
$ npm install

# Para rodar a API execute o comando
$ json-server --watch db.json

## Para rodar a aplicação execute o comando
$ npm start

# O API iniciará na porta 3000

```

