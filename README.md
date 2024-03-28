<!-- Título do Projeto -->
# Blogs API

Aplicação (API) que permite criar, ler, atualizar e excluir postagens de blog, além de fornecer autenticação de usuários para acessar essas funcionalidades.

<!-- Status do Projeto -->
## 📊 Status do Projeto

![Concluído](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)

<!-- Visão Geral -->
## 💡Visão Geral

Neste projeto, desenvolvi uma aplicação backend para gerenciar um blog. Utilizei Node.js e Sequelize para criar uma API RESTful que permitia aos usuários realizar operações de criação, leitura, atualização e exclusão (CRUD) de postagens. Além disso, implementei um sistema de autenticação para garantir que apenas usuários autorizados pudessem acessar as funcionalidades da API.

O objetivo foi criar uma plataforma robusta e organizada, facilitando a produção de conteúdo e a interação dos usuários em um ambiente de blog. Com este projeto, esperava fornecer uma solução eficiente e segura para a gestão de blogs online.

<!-- Tecnologias -->
## 🔧Tecnologias

![JavaScript](https://img.shields.io/badge/-JavaScript-yellow) ![Node.js](https://img.shields.io/badge/-Node.js-green) ![Express](https://img.shields.io/badge/-Express-lightgrey) ![MySQL](https://img.shields.io/badge/-MySQL-blue) ![Docker](https://img.shields.io/badge/-Docker-blue) ![npm](https://img.shields.io/badge/-npm-red) ![Git](https://img.shields.io/badge/-Git-red) ![GitHub](https://img.shields.io/badge/-GitHub-black) ![ESLint](https://img.shields.io/badge/-ESLint-purple) ![Prettier](https://img.shields.io/badge/-Prettier-pink) ![REST API](https://img.shields.io/badge/-REST%20API-green) ![JSON](https://img.shields.io/badge/-JSON-orange) ![JWT](https://img.shields.io/badge/-JWT-yellow)

<!-- Recursos -->
## 📚Recursos

- Foi desenvolvido endpoints que estao conectados ao banco de dados seguindo os princípios do REST;

- Para fazer um post é necessário usuário e login, portanto foi trabalhado a relação entre user e post;

- Foi necessária a utilização de categorias para os posts, trabalhando, assim, a relação de posts para categories e de categories para posts.

<!-- Instalação -->
## ⚙️Instalação

### ⬇️ Dependências

```bash
npm install
``` 

<!-- Uso -->
## 🖥️Uso

Configurar o banco de dados MySQL:

- Definir variáveis de ambiente em um arquivo .env;
- Criar do banco de dados e tabelas com:

```bash
npx sequelize db:create
npx sequelize db:migrate
```

Se desejar, preencha as tabelas com dados iniciais com:

```bash
npx sequelize db:seed:all
```

A aplicação será iniciado com:

```bash
npm start
```

<!-- Licença -->
## 📝Licença

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 


<!-- Contato -->
## 📞Contato

Informações de contato para dúvidas, suporte ou colaborações.

✉️ msalbuquerque@hotmail.com

💼 [LinkedIn](https://linkedin.com/in/marcellsa)
