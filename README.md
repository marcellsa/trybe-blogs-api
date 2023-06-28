<!-- Título do Projeto -->
# Blogs API

API e um banco de dados para a produção de conteúdo em um blog.

<!-- Status do Projeto -->
## 📊 Status do Projeto

![Concluído](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)

<!-- Visão Geral -->
## 💡Visão Geral

Neste projeto, será desenvolvida uma API em Node.js usando o pacote Sequelize para um CRUD de posts em um blog. A API seguirá os princípios REST e terá autenticação de usuários. Além disso, serão utilizadas categorias para classificar os posts, estabelecendo relações entre usuários, posts e categorias. O objetivo é criar uma API funcional e organizada para a produção de conteúdo em um blog.

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
