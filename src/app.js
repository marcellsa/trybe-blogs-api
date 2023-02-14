const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error');
const { loginRouter } = require('./routes');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
